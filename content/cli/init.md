---
title: Quick Start
description: ""
date: 2022-05-10T17:21:48.607Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: init
oxa: oxa:EplL6AlILV3RGEDPzj5U/hUjYAf56j7B5kXlHpklk
---

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/F9Im6F4ygDdaMAr4AfAg.2"}

Curvenote allows you to easily publish content on the web as a fast, optimized static site that preserves all of the interactive features that are available in Curvenote, but is deployed on a hosting service called [curve.space](https://curve.space) and will soon be available for your custom domain.

The aim of this guide is to get you started with a deployment of your content from a single project on [curvenote.com](curvenote.com), to a new website hosted at `https://username.curve.space`.

````{important}
This quick start guide assumes that you have installed Curvenote (see [Installing Curvenote](oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb "Installing Curvenote") ), generated and set an API Access token (see [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization") ) and is aimed at `*nix` operating systems.

````

## Working locally

Deploying a curve.space site involves pulling content to your local machine, where you can customize features and deploying from there.

The first step is to create a new directory to contain the local files for your site:

```shell
% cd ~
% mkdir myblog
% cd myblog
```

## init

Then calling `curvenote init` will start the interactive command line, guiding you through the initial setup of your site.

```python
% curvenote init

Welcome to the Curvenote CLI!! 👋

curvenote init walks you through creating a curvenote.yml file.

You can use this client library to:

 - sync content to & from Curvenote
 - build & export professional PDFs
 - create a local website & deploy to https://stevejpurves.curve.space

Find out more here:
https://docs.curvenote.com/cli


? What is the name of this space? (My Curve Space) 
```

The name of the “space” is the “Title” of your site, appearing in the title bar, and to begin with, in the navigation menus. This name, and any other setting, can be modified later by editing the `curvenote.yml` file that this step produces.

Next, we need to add content to the site. Currently, only importing from a Curvenote project is available but working from entirely local files will be available soon.

```python
? What content would you like to use? (Use arrow keys)
❯ Import from Curvenote 
  - Use the content & notebooks in this folder (Disabled)
  - Show me some demo content! (Disabled)
```

To import content from Curvenote, copy and paste a link to your project, or any article or notebooks within it.

```python
? Link to Curvenote project: (https://curvenote.com/@templates/projects) 
```

The CLI will validate the link and ask you to confirm a location to store content locally, relative to your current folder — as you’re getting started just accept the default here.

```python
Validating link...
🚀 Found "Project Templates" (@templates/projects)
? Name of local folder to sync to? (content/projects) 
```

````{important}
Note: if your content is in a private project on Curvenote, and you have not yet set your authorisation token this is a good point to hit `ctrl+c` and do that. See [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization") for details on how.

````

````{important}
Note: to add content from additional projects run `curvenote sync add` after the `init` process is complete.

````

## Start the local webserver

Next, press `y` to start the local `curve.space` webserver, this will

```python
Curvenote setup is complete!! 🚀

You can use this client library to:

  - curvenote pull: Update your content to what is on https://curvenote.com
  - curvenote start: Start a local web server now!
  - curvenote deploy: Share content on https://stevejpurves.curve.space

Find out more here:
https://docs.curvenote.com/cli


? Would you like to start curve.space locally now? (Y/n) 
```

This will trigger the following actions:

* finish pulling content from your project to local `.md` and `.ipynb`files
* clone a copy of the `curvespace` template on your machine
* install libraries and dependencies
* “build” the `md` and `ipynb` content into static `json` for deployment
* start a local webserver on <http://localhost:3000> or another port if that one is busy.

Visit <http://localhost:3000> to see a draft of your site. If you leave the command line running in your terminal it will watch for changes to local files and automatically update.

This allows you to see changes to your site immediately as you make local edits and perform some configuration changes. (Note: currently some configuration changes may require a restart)

````{important}
To dive into details on how content is stored locally see [Local Folder Structure](oxa:EplL6AlILV3RGEDPzj5U/cgsCbeDyY6uEqrzTzRuC "Local Folder Structure") and for information on how to customize your site see [Configuration](oxa:EplL6AlILV3RGEDPzj5U/IR80H29NQR3l057xtUpi "Configuration"). Otherwise, continue with this guide to deploy your site!

````

## Deployment

To deploy, hit `ctrl+c` in your terminal to stop the local web server and then run:

```python
% curvenote deploy

? Deploy local content to "https://stevejpurves.curve.space"? (y/N) 
```

You’ll be shown the target URL for your site, which is based on your curvenote username, and after you confirm your content will be uploaded and available at the URL

```python
☁️  Uploading 27 files
 ████████████████████████████████████████ 100% | ETA: 0s | 27/27
☁️  Uploaded 27 files in 3.64 s.
🚀 Deployed 27 files in 2.08 s.
🕸  Site Deployed
🌎 https://stevejpurves.curve.space
```

## Next Steps

So far you’ve deployed your content, with default settings and without additional configuration — find out how to customize your site by understanding the [Local Folder Structure](oxa:EplL6AlILV3RGEDPzj5U/cgsCbeDyY6uEqrzTzRuC "Local Folder Structure") and checking the [Configuration](oxa:EplL6AlILV3RGEDPzj5U/IR80H29NQR3l057xtUpi "Configuration") options.

