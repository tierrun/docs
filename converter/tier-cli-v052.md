---
publishedAt: '2022-11-23T01:20:02.117Z'
title: Tier CLI v0.5.2
updatedAt: '2022-11-23T01:27:31.825Z'
---

We just [released v0.5.2](https://github.com/tierrun/tier), with some exciting new enhancements and features.


* **Switch preallocations**: The `tier switch -c` command now preallocates switch accounts which means after the first switch account is created, subsequent uses of `tier switch -c` should be noticeably faster, like, complete in 10us fast! This is because it can now avoid waiting on slow API calls to Stripe.


![Screenshot 2022-11-22 at 9.22.50 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669166841281/-hh3FSdDl.png)


* **Plan immutability**: Plans are now 100% immutable, as was originally planned. To upgrade all existing Tier plans to be 100% immutable, please run `tier pull | tier push` - 2 times; The second should produce output saying `[plan already exists]`, which is your confirmation the migration was successful.
* **Deep links**: Push now outputs deep links to the corresponding prices in Stripe.
* **Clean command**: We added the `tier clean -switchaccounts` command. As you might guess, it cleans up accounts in Test Mode that were created by the switch command. The full command takes a duration of time for specifying the maximum age to use when considering an account for removal. Please see `tier clean -h` for more information.


Please head over to <https://tier.run/releases> to check out more changes and install options. As always, `brew upgrade tierrun/tap/tier` works too! 


