---
publishedAt: '2023-04-02T23:15:05.472Z'
title: Tier v0.10
---

A new Tier release is ready, and Cloud has already been updated!  
[v0.10.0 is here](https://tier.run/releases) and it contains many features that have been requested by you.


Tier Cloud
----------


Tier Cloud is available in Alpha and is now running v0.10.0. 


We’ve seen many users migrating from using `tier serve` to Tier Cloud. We encourage you to give it a try. It’s a seamless process. **Just set TIER\_API\_KEY to your Stripe key**, and the SDK will do the right thing. [See an example here](http://email.tier.run/e/c/eyJlIjoxMzM0NDAsImVtYWlsX2lkIjoiZXhhbXBsZSIsImhyZWYiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZXZvbi9hMjlmNmIxMGQyOTRlYjdmZDA2ZWE1YTRiNjdiMzUxNyIsInQiOjE2ODA0NzY4MzB9/86b6ba1feb36261a636e7128b43f88fb60883eea2a7e055a1afc285cf230a784).


Join our support channel if you have any questions: <https://tier-community.slack.com/archives/C04V6K76G7K>


Model Builder Preview
---------------------


Pricing.json has been a powerful way to model pricing. It's flexible, versioned and easy to share. As more companies adopt a [PriceOps approach](http://email.tier.run/e/c/eyJlIjoxMzM0NDAsImVtYWlsX2lkIjoiZXhhbXBsZSIsImhyZWYiOiJodHRwczovL3ByaWNlb3BzLm9yZyIsInQiOjE2ODA0NzY4MzB9/a0d139dfcdb532c7f5ed806a2ed5f33da6f98736c3db2fb0fe28df2fc1197a33) to pricing, it's important that non-technical members of your team have the ability to create pricing models.


Model Builder is a WYSIWYG pricing model builder that natively supports plan creation, collaboration, push, pull, and Checkout links.


We will have more to share soon, but if you are interested in testing Model Builder, [**please sign up here**](http://email.tier.run/e/c/eyJlIjoxMzM0NDAsImVtYWlsX2lkIjoiZXhhbXBsZSIsImhyZWYiOiJodHRwczovL3NoYXJlLmhzZm9ybXMuY29tLzFNVlV6bEI4RVJVbWNSV3A3R3phamJnZGp6NTIiLCJ0IjoxNjgwNDc2ODMwfQ/e77337ba2b444574bd536835edd7fa197e528a17caf2438cb6b24f6bdab16ec4)**.**


API Changes
-----------


**Base prices support decimals** 


The plans["plan:name@0"].features["feature:name"].base may now contain decimals with up to 12 decimal places, which is the limit Stripe imposes. 


**Test Clocks**


The API is now aware of Stripe Test Clocks and will pass test clock IDs along with requests to Stripe that support them, for any tier request that provides them. The SDKs have also been updated to make using test clocks easy. 


**Support for Metered+Per Unit pricing** 


Tier no longer uses tiered pricing for features with only a single tier that does not contain a base price. 


Features with a single tier that has a base price of 0 will now be converted to metered+per\_unit in Stripe. This is useful for models such as per-seat pricing and the change will have no effect on any existing features with single tiers in Stripe. [See an example here](http://email.tier.run/e/c/eyJlIjoxMzM0NDAsImVtYWlsX2lkIjoiZXhhbXBsZSIsImhyZWYiOiJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZXZvbi8zOTNhZTEzNTgzNjE2MDE0MDBjMDBmY2ZjYWZhMjBiNiIsInQiOjE2ODA0NzY4MzB9/0acaa7fb04f32de813210f9608db55cb499ffb2a93851ef473efb6aff05db3e1). 


**Pricing Transforms** 


Tier models now support a Stripe’s division transform, which transforms the quantity *before* multiplying the base price to determine the amount to bill. Stripe restricts transforms to metered+per\_unit (see above for how to create these features). 


The transform takes two fields: **by** and **rounding**. The by must be an integer to divide by, and rounding must be "up" or "down". 


To specify a division transform:


![](https://userimg-assets.customeriomail.com/images/client-env-133440/editor_images/Screenshot%202023-03-29%20at%206.37.27%20AM-01GWPBNJAKWW2AEARNB38EP4XX.png)


Updates to the /v1/phase endpoint
---------------------------------


**Trial field** 


The /v1/phase endpoint now returns a trial boolean that is true if the current phase is a trial. 


**End field**


The /v1/phase endpoint now returns an end field specifying the date and time the current phase ends (not the period end).


SDKs
----


**Cancel**


Both the Go and Node SDKs now provide a cancel function on their respective clients, as sugar for canceling subscriptions, which has always been supported by scheduling a phase containing zero features. Once the phase's effective date passes, the org's limits will report 0 per feature’s limits. 


**Test Clocks**


The Go and Node SDKs now support Stripe Test Clocks via the new Tier API addition. 


**Misc**


The SDKs also include various bug fixes and additions for supporting new API changes.


CLI
---


**Price link fixes**


On tier push the resulting price links should no longer link to incorrect accounts or live mode, preventing confusion.


