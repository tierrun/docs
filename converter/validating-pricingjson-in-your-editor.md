---
publishedAt: '2022-11-08T18:11:21.233Z'
title: Validating `pricing.json` in Your Editor
updatedAt: '2022-11-08T18:13:54.280Z'
---

This is a quick guide for adding the schema for
[`pricing.json`](https://www.tier.run/docs/pricing.json) files to
vim and VSCode.


TL;DR
-----


The schema for `pricing.json` files is available at
<https://www.tier.run/docs/pricing.schema.json>. Plug that URL into
whatever tool you use to validate JSON, and associate it with
`pricing.json` files.


VS Code
-------


More info on editing JSON is available [in the VSCode
docs](https://code.visualstudio.com/docs/languages/json).


1. Open the [User and Workspace
Settings](https://code.visualstudio.com/docs/getstarted/settings)
menu.
2. Click `Extensions` and then `JSON` in the left sidebar.
3. Look for the option "JSON > Schema Download: Enable" and ensure
that the box is checked.
4. Underneath that, look for the option "JSON: Schemas" and click
"Edit in settings.json"


![screenshot of VSCode settings page](https://cdn.hashnode.com/res/hashnode/image/upload/v1667930888007/PmTGrW3Wq.png)


1. Add the following section:



```
 "json.schemas": [
   {
     "fileMatch": ["pricing.json"],
     "url": "https://www.tier.run/docs/pricing.schema.json"
   }
 ],

```


Here's the result:


![screenshot of VSCode showing a warning about invalid pricing.json](https://cdn.hashnode.com/res/hashnode/image/upload/v1667930926144/o_cZ9b4SN.png)


vim/neovim and COC
------------------


If you use vim with [COC](https://github.com/neoclide/coc.nvim),
you can add support for validating pricing.json files like so:


1. Ensure that `coc-json` is enabled. You can do this by
running `:CocInstall coc-json` or by having something like the
following in your `~/.vimrc`:



```
 let g:coc_global_extensions = ['coc-json']

```
2. Run `:CocConfig` to option the configuration file for coc.
(By default this is `~/.config/nvim/coc-settings.json`.)
3. Add the following field to the object there (if it already
exists) or add it as a new top level object:



```
 {
   "json.schemas": [
     {
       "fileMatch": ["pricing.json"],
       "url": "https://www.tier.run/docs/pricing.schema.json"
     }
   ]
 }

```


Here's what it looks like in action:


![screenshot of vim showing a warning about invalid pricing.json](https://cdn.hashnode.com/res/hashnode/image/upload/v1667930950185/Q_yVFfvdj.png)


That's it!


