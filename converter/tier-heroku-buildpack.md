---
publishedAt: '2023-01-06T13:11:49.263Z'
title: Tier Heroku Buildpack
updatedAt: '2023-01-06T18:16:54.430Z'
---

We are now maintaining a Heroku Buildpack for Tier. You can get the latest version and documentation on [GitHub](https://github.com/tierrun/tier-run-buildpack).


This buildback installs and runs the Tier sidecar in Heroku dynos.


Install
-------



```
heroku buildpacks:add https://github.com/tierrun/tier-run-buildpack

```

Environment
-----------


The below environment variables can be set using `heroku config:set X=Y` or via the Heroku dashboard.


* `STRIPE_API_KEY`: The required Stripe key (live or test) to use. If a live key is used, the `-live` flag will be automatically passed to `tier serve`.
* `TIER_VERSION`: The optional Tier sidecar version (default is `0.6.2`)
* `TIER_ADDR`: The optional address the sidecar will listen on (default is `127.0.0.1:8080`)
* `TIER_RUN_DYNOS`: An optional comma seperated list of process type names (e.g. "web") to run the sidecar in. If unset, all process types will run the sidecar.


Support
-------


For further questions, please join our [Community Slack](https://join.slack.com/t/tier-community/shared_invite/zt-1blotqjb9-wvkYMo8QkhaEWziprdjnIA).


