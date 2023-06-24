---
publishedAt: '2023-02-15T22:56:35.165Z'
title: Tier v0.8
updatedAt: '2023-02-16T04:13:46.659Z'
---

We're happy to announce the latest version of Tier. [v0.8.0 is now available](https://github.com/tierrun/tier/releases/tag/v0.8.0), and it has several exciting updates!


Tier now supports [Stripe Checkout](https://stripe.com/docs/payments/checkout) using Tier plans, enabling both licensed and metered features in Stripe Checkout.


Here is the full rundown of the updates in Tier v0.8.0:


### Checkout


Now in Alpha. We've added support for metered billing to Stripe Checkout! This means that the Node and Go SDKs as well as the CLI now support checkout.


To try it out, simply set the `--checkout` flag when using tier subscribe in the CLI. For example:



```
tier subscribe --checkout=https://example.com/success org:acme plan:pro@2

```

This will return a Stripe Checkout link that you can send to your customer, and you can even test it out by visiting the link yourself. Don't forget that you can set the optional `--cancel_url` flag to redirect users if they cancel out of the checkout session.


### Clobber usage with tier report


The CLI subcommand report now accepts a `--clobber` flag for setting usage versus incrementing. This will help you keep better track of your usage and avoid any surprises along the way.


### Create a test environment on push


You can now use the -c flag on tier push to create a new test environment, switch to it, and push the supplied pricing.json pricing model. This will return a link for the newly created environment.


To give it a go, try running:



```
tier push -c pricing.json

```

We hope you enjoy using Tier v0.8.0 as much as we enjoyed creating it!




---


Please head over to [**https://tier.run/releases**](https://tier.run/releases) to check out more changes and install options. As always, `brew upgrade tierrun/tap/tier` works too!



> 
> ***If you haven't used Tier yet, these resources are a good place to get started:***
> 
> 
> 


* [**Hello World! example**](https://blog.tier.run/tier-hello-world-demo) - Step by step guide to adding Tier to your new or existing codebase
* [**Quick Start Guide**](https://tier.run/docs/quickstart) - Step by step to getting up and running with Tier.
* [**Recipes**](https://tier.run/docs/recipes) - Example common pricing models and their corresponding Tier `pricing.json` representations.
* [**CLI Reference**](https://tier.run/docs/cli) - Documentation for the Tier command line tool.


