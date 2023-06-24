---
publishedAt: '2022-11-30T01:30:04.263Z'
title: Tier CLI v0.6
---

You can [find the Tier CLI v0.6 here](http://github.com/tierrun/tier/releases/tag/v0.6.0).

The v0.6 release introduces a way to manage customer data stored in stripe for any Tier managed org.

To set the _email_, _description_, _name_, _phone_, or _user-defined metadata_, for an org, set the new `info` field for `/v1/subscribe` request. In addition to this change, a minimum of one phase for a `/v1/subscribe` request is no longer required.

The new fields are:

- description
- name
- phone
- email
- metadata

Additionally, the `/v1/whois` endpoint will now report up-to-date attributes if the query parameter `include=info` is present.

Both [the Go and Node SDKs have been updated](https://www.tier.run/docs/sdk/).

Please head over to <https://tier.run/releases> to check out more changes and install options. As always, `brew upgrade tierrun/tap/tier` works too!

> If you haven't used Tier yet, these resources are a good place to get started:
>
> - [Hello World! example](https://blog.tier.run/tier-hello-world-demo) - Step by step guide to adding Tier to your new or existing codebase
> - [Quick Start Guide](https://tier.run/docs/quickstart) - Step by step to
>   getting up and running with Tier.
> - [Recipes](https://tier.run/docs/recipes) - Example common pricing models and
>   their corresponding Tier `pricing.json` representations.
> - [CLI Reference](https://tier.run/docs/cli) - Documentation for the Tier
>   command line tool.
