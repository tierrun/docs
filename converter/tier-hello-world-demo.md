---
publishedAt: '2022-11-01T16:21:19.751Z'
title: Tier Hello World Demo
updatedAt: '2022-11-02T15:32:36.231Z'
---

This is an example application that shows using Tier to integrate
pricing, in a way that makes it possible to implement best
[PriceOps](https://priceops.org) practices with a trivial amount
of effort.


The example app is exceedingly simple, but the principles are
flexible enough to easily be put into practice in much more
complicated applications.


All of the code for this demo is available on GitHub, at
[tierrun/tier-node-demo](https://github.com/tierrun/tier-node-demo).


The App
-------


The application we'll be monetizing is a simple temperature
conversion app. If you give it a Fahrenheit temperature, it'll
convert it to Celsius, and vice versa. This is provided via a
simple site built on [express](https://expressjs.com).


To see the app as it exists *before* adding any Tier integration,
check out the [`pre-tier`
branch](https://github.com/tierrun/tier-node-demo/tree/pre-tier).


Nothing Up Our Sleeves
----------------------


Nothing described here relies on any services running on
https://tier.run, or anything at all other than Stripe.


You can think of Tier as a very fancy Stripe client that manages
metadata and connections. It sets up your system so that the
path of least resistance is also the path of optimum
[PriceOps](https://priceops.org).


Setting Up Tier
---------------


First, we'll have to [install the Tier
binary](https://tier.run/docs/install). On macOS machines, you
can do this with Homebrew:



```
brew install tierrun/tap/tier

```
Binaries for major architectures can be found [on
GitHub](https://github.com/tierrun/tier/releases).


You can also install it using `go` version 1.19 or later:



```
go install tier.run/cmd/tier@latest

```
Once it's installed, use the [`tier
connect`](https://tier.run/docs/cli/connect) command to give Tier
access to your Stripe account. By default, Tier will only work
on test mode Stripe data, using a restricted key with permissions
that you can easily lock down.


Alternatively, you can set the `STRIPE_API_KEY` in the
environment, if you have a key that you'd like Tier to use.


Installing Tier SDK
-------------------


In the app, we install the Tier SDK by running:



```
npm install tier

```
[f32b5b4](https://github.com/tierrun/tier-node-demo/commit/f32b5b4)


Create Pricing Model
--------------------


We create a pricing model by writing a [`pricing.json`
file](https://www.tier.run/docs/pricing.json).


The pricing model is a simple free/pro scheme. Free accounts get
10 free temperature conversions per month, then they have to upgrade.


Pro accounts cost $10 per month, and get 100 conversions per
month included with that base price. Beyond that, they will be
charged $0.01 per conversion.


To do this, we define two plans in our pricing.json file with the
appropriate tiers. We're calling the feature `feature:convert`.



```
{
  "plans": {
    "plan:free@1": {
      "title": "Convert (free)",
      "features": {
        "feature:convert": {
          "title": "Temperature Conversions",
          "tiers": [
            {
              "upto": 10,
              "price": 0
            }
          ]
        }
      }
    },
    "plan:pro@1": {
      "title": "Convert (Pro)",
      "features": {
        "feature:convert": {
          "title": "Temperature Conversions",
          "tiers": [
            {
              "base": 1000,
              "price": 0,
              "upto": 100
            },
            {
              "price": 1
            }
          ]
        }
      }
    }
  }
}

```

The most important part is that plans are named like
`plan:<name>@<version>`, and features start with `feature:`. But
if you try to do something against the rules, Tier will give you
an error telling you what's wrong.


When we want to change this scheme, we can add a new
plan (or a new version of the `free` or `pro` plan). Any
customers still on the old version will be unaffected.


To push the pricing model live, run:



```
tier push pricing.json

```
[3f6e7cf](https://github.com/tierrun/tier-node-demo/commit/3f6e7cf)


The `/pricing` Page
-------------------


In order to create a nice little two-column page showing the plan
options, we can pull the highest version of each plan with the
`tier.pullLatest()` method, and hand that object off to our
[template](https://github.com/tierrun/tier-node-demo/blob/main/lib/templates/pricing.ejs)
to turn into HTML. I'm using EJS in this example, because it's
so dead simple to throw together an example like this, but you
can of course do the same thing with React, nunjucks, or any
other templating system.


Note: beware that this is definitely some demo magic. We're just sorting the plan versions lexically, but in practice, you'll probably want a config or some other system to say what the "public" version of any given plan is, so you don't end up with something like `plan:free@zzzZZZ:final2.final.latest.final`. The `tier.pullLatest()` method is marked as "experimental" in the Node SDK for this reason, we expect to add more utility in this area soon.


The important part is that we're *not* reading the file from
disk, or hard-coding the plan details into our app. Instead, we
pull from the single source of truth, and let that drive the rest
of the system.


[c0a7859](https://github.com/tierrun/tier-node-demo/commit/c0a7859)


Subscribing Users To Plans
--------------------------


Stripe doesn't really have a concept of a "plan". There are
*Products* which have *Prices*, and multiple Price objects can be
attached to a customer's subscription.


Each of those Price objects has a unique identifier. So, if you
want to treat multiple "Prices" as a "plan", you
have to keep track of them to use the right ones when creating a
subscription. As you add more tracked features, and test more
different iterations of packaging them up into plans for
customers, the complexity increases geometrically.


Thankfully, using Tier, we can just do:



```
await tier.subscribe(org, plan)

```

All of the Price objects associated with the plan
will be attached automatically.


The `org` is an opaque string that identifies the customer. It
must start with `org:`, and it must be unique, but you can use
whatever identifier you use for customers in your system already.
These are all perfectly acceptable: `org:user@email.com`,
`org:beefcafebad1d3a`, `org:213415-221321-4321`. There's
(almost) never any reason to deal with the Stripe Customer ID.


The `plan` is the `plan:<name>@<version>` from your
`pricing.json` model. You should not hard code this! In the
demo, you'll note that we get it from a `POST` request when the
user clicks the "Subscribe" button on the programmatically
generated pricing page.


No matter how many versions of your plans you have, the plan identifier is
all you need to create the correct subscription for your customer.



> 
> Note: you *can* still create subscriptions using Tier that mix
> and match any prices and entitlements you like. We'll cover
> that in a future "advanced usage" blog post, as it's out of
> scope for a "Hello, World" app such as this.
> 
> 
> 


[ecb1cf1](https://github.com/tierrun/tier-node-demo/commit/ecb1cf1)


Reporting Usage
---------------


Just like with subscriptions, rather than having to track Price objects
to know how to report feature usage to Stripe, using Tier, we just need
the `org:...` identifier and the feature name from your pricing model.



```
await tier.report(org, 'feature:convert')

```

The default count is 1, but if you want to report more than 1 of
something, you can just pass `n` as the third argument:



```
await tier.report(org, 'feature:morethanone', 100)

```

In this demo, we're reporting feature usage right at the point
of delivery. For many use cases, that's perfectly fine. But,
for example, if you're tracking download bandwidth or some other
high-volume metric, you can of course roll that up and report it
in a batch at any cadence that makes sense for your application.


The caveat, of course, is that the usage data you pull from Tier
won't be fully up to date if you haven't yet updated it.


[18bfb50](https://github.com/tierrun/tier-node-demo/commit/18bfb50)


Limiting Access
---------------


We said that users on the `free` account can only get 10
conversions per month. In order to make sure they haven't gone
over (and that they're on a plan that has access to the feature
at all!) we can call the `tier.limit` method, like this:



```
const usage = await tier.limit(org, feature)

```

This method will return an object with `used` and `limit` fields,
which you can check to see whether the feature should be enabled.


Again, there's no need to keep track of Customer or Price
objects, or even know what plan a user is subscribed to. Just
check whether they have access to the feature, and if so, give
them the feature.


[920f8c1](https://github.com/tierrun/tier-node-demo/commit/920f8c1)


Changing Plans
--------------


You can try out changing the pricing model any time you like, as
often as you like:



```
tier push pricing-2.json

```
When you do this, the `/pricing` page gets updated with the new
version of the plan, but importantly, the customer's plan *isn't*
changed. With Tier, grandparenting in your existing userbase is
the default, so you never have a situation where you try a
different price, and make everyone upset.


In fact, you could even have multiple versions of a plan living
side by side, and see which one encourages better user behavior
or gets better conversions.


Collecting Payment Info
-----------------------


For this, we still will need to go direct to Stripe, so that the
user can submit their credit card information directly to Stripe
from their browser, using `stripe.Elements`.


Thankfully, the `tier.whois(org)` method will give us their
Stripe Customer ID.


[cd8b1ae](https://github.com/tierrun/tier-node-demo/commit/cd8b1ae)


That's it!
----------


In this demo, we took a working application and monetized it,
without ever having to worry about managing Stripe object
identifiers, and any future change to our pricing model is
trivial.


There's a lot more documentation available [on the Tier website](https://tier.run/docs). Try it out, and [let us know what you think](https://join.slack.com/t/tier-community/shared_invite/zt-1blotqjb9-wvkYMo8QkhaEWziprdjnIA)!


