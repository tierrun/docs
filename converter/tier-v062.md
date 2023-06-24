---
publishedAt: '2022-12-08T00:45:12.000Z'
title: Tier v0.6.2
updatedAt: '2022-12-08T00:50:38.399Z'
---

You can [find Tier v0.6.2 here](https://github.com/tierrun/tier/releases).


This update introduces the ability to enter prices in decimal form as well as the ability to switch between test accounts using the canonical URL for the test account.


### Fractional Prices


The smallest whole unit for a price is 1 cent. Prices can now be represented in fractions of cents.


For example, the following feature in `pricing.json`



```

        "feature:message": {
          "tiers": [{ "upto": 10, "price": 0.1 }]
        }

```

Will be represented in Stripe as:


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670448085412/xYAomICYv.png)


### Test Account Switching by URL


A few weeks ago we introduced [tier switch](https://blog.tier.run/tier-switch-git-branch-stripe) which brings the first sandboxes to Stripe. This is useful for everything from testing new ideas in dev to enabling Stripe Preview Deploys.


With Tier v0.6.2 you can now switch to a test account by including its URL as a parameter in `tier switch`.


For example:


`tier switch https://dashboard.stripe.com/acct_1MCUwJIR5o5wb1n4/test`




---


Please head over to <https://tier.run/releases> to check out more changes and install options. As always, `brew upgrade tierrun/tap/tier` works too!



> 
> If you haven't used Tier yet, these resources are a good place to get started:
> 
> 
> 


* [Hello World! example](https://blog.tier.run/tier-hello-world-demo) - Step by step guide to adding Tier to your new or existing codebase
* [Quick Start Guide](https://tier.run/docs/quickstart) - Step by step to getting up and running with Tier.
* [Recipes](https://tier.run/docs/recipes) - Example common pricing models and their corresponding Tier `pricing.json` representations.
* [CLI Reference](https://tier.run/docs/cli) - Documentation for the Tier command line tool.


