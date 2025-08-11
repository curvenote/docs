---
title: Start with a Curvenote project
description: >-
  In this tutorial we will create a site by pulling content from Curvenote, then
  customize the site locally and deploy it directly from your computer.
name: tutorial-deploy-project
short_title: ''
tags:
  - tutorial
thumbnail: thumbnails/tutorial-deploy-project.png
---

Curvenote allows you to easily publish content on the web as a fast, optimized site that preserves all interactive features in Curvenote, and can be hosted for free on a `*.curve.space` domain or on your own [custom domain](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 'Custom Domains').

**In this tutorial we will:**

1. pull content from an existing project on [curvenote.com](curvenote.com);
2. edit the files locally seeing live updates; and
3. deploy that to a new website hosted at `https://username.curve.space`.

```{important}
**Before you start**

This tutorial assumes that you have installed the Curvenote CLI (see [Installing Curvenote](oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb "Installing Curvenote")), generated and set an API Access Token (see [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization")) and is aimed at `*nix` operating systems.

```

## Create a folder and execute `curvenote init`

In this tutorial we will create a scientific website by pulling content locally, where you can customize features or edit content with live-reloads in a local web-server, and then deploy the site directly from your computer.

🛠 The first step is to create a new directory that will contain all local files for your site:

```shell
mkdir myproject
cd myproject
```

🛠️ Next, call `curvenote init` to start an interactive command line that will guide you through the initial setup of your site.

```text
% curvenote init

Welcome to the Curvenote CLI!! 👋

curvenote init walks you through creating a curvenote.yml file.

You can use this client library to:

 - sync content to & from Curvenote
 - build & export professional PDFs
 - create a local website & deploy to https://your.curve.space

Find out more here:
https://curvenote.com/docs/cli


? What is the title of this project? (My Project)
```

The title of your project/site will appear in web-browser tabs, metadata, and navigation menus. This title, and any other setting, can be modified later by editing the `curvenote.yml` file produced in this step.

## Using existing content from Curvenote

Next, we will choose content to add to our site. In this tutorial, we will start with an existing Curvenote project. To create your own project, you can go through the documentation on [writing in Curvenote](https://curvenote.com/oxa:Z1isOjJQGvM22q5fhunb/YCk58PLviS6CnpfLozy9), the tutorial continues using a default project.

```{note}
If you have existing content in a local folder or an existing `git` repository you can see the tutorial for [starting with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS "Start with a local folder").

```

🛠️ Choose `Import from Curvenote`

```text
? What content would you like to use? (Use arrow keys)
❯ Import from Curvenote
  - Use the content & notebooks in this folder
```

If you are using your own content, navigate to your project in Curvenote and copy and paste a link to your project, or any article or notebooks within it. The default project shows features like references, callouts, cross-references, and interactive Jupyter Notebooks.

🛠️ Press enter to select the default project.

```text
? Link to Curvenote project: (https://curvenote.com/@templates/web)
```

The CLI will validate the link and ask you to confirm a location to store content locally, relative to your current folder — as you’re getting started just accept the default here.

```text
Validating link...
🚀 Found "Project Templates" (@templates/web)
? Name of local folder to sync to? (content/web)
```

```{important}
**Private Projects**

If your content is in a private project on Curvenote, and you have not yet set your authorization token this is a good point to stop the command (using `ctrl+c`) and do that. See [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization") for details on how.

```

## Start the local website

Next you will be asked if you want to start the local web server.

```text
Curvenote setup is complete!! 🚀

You can use this client library to:

  - curvenote pull: Update your content to what is on https://curvenote.com
  - curvenote start: Start a local web server now!
  - curvenote deploy: Share content on https://your.curve.space

Find out more here:
https://curvenote.com/docs/cli


? Would you like to start a local server now? (Y/n)
```

🛠️ Choose to **start the web server** the press `y` or `Enter`. This will trigger the following actions:

- ⬇️ finish pulling content from your project to local `.md` and `.ipynb` files
- 🕸 clone a copy of the `curvenote` on your machine
- 🧱 install libraries and dependencies
- 🏗️ build the `md` and `ipynb` content into static `json` for deployment
- 🚀 start a local web server on <http://localhost:3000> or another port if that one is busy

Visit <http://localhost:3000> to see the local site. If you leave the command line running in your terminal it will watch for changes to local files and automatically update. This allows you to **see changes immediately** as you make local edits and change configuration settings.

If you are following with the defaults your website should look something like {numref}`Figure %s <dIaGzZPj3x>`, as well as including interactive figures, references, citations, and Jupyter Notebooks.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-foDLk9A6yZ47hp3M69JG-v1.png
:name: dIaGzZPj3x
:align: center
:width: 70%

Using the default project should bring up a site in your browser that looks something like this figure!
```

## Folders & files created

🛠️ Open the folder in a text editor program, like [VSCode](https://code.visualstudio.com/), to explore the structure of the project.

There are a few things to notice including the configuration YAML and folders for `content`, `_build` and `public` information for your site.

First, the `curvenote.yml` contains all of the information for your `site` like the title, navigation, logo and any actions in the navigation. The configuration also includes configuration about the `project`, which is different because you can actually have many projects in a single site (e.g. many presentations or papers that live on your website). The `project` in this file is the main project for the site and will contain the index material or landing pages. If you started with a paper or report instead, you can always import this into a different site in the future.

Second, the `content` folder includes all of the Markdown files and Jupyter Notebooks in your project. We will look at these files more in the next section as we make a few changes. The individual content folder has a `references.bib` for the project (see [Citations](oxa:Eh6WvY9NT46Ds4lE3OqJ/Vhry2i4pZKexKOLOQasy 'Citations')), and also includes an `images` folder that has all images necessary for the markdown and notebook files.

The `public` folder contains additional static assets necessary for your site like logos, favicons, or global files to download. The public folder doesn’t contain images for your articles or notebooks, which are kept in the content folder.

The `_build/web` folder contains all of the information for running the local web server as well as listen to changes when you are editing the site to provide incremental updates.

```{important}
To dive into details on how content is stored locally see [Folder Structure](oxa:Eh6WvY9NT46Ds4lE3OqJ/fDMrRS0eu2j1AeD8O311 "Folder Structure") and for information on how to customize your site see [Configuration](oxa:Eh6WvY9NT46Ds4lE3OqJ/n4eX0Wb2I1eXXMK2xq9Y "Configuration"). Otherwise, continue with this guide to deploy your site!

```

## Making changes

There are three major areas of the site that we can change (1) the content in Markdown or Notebooks; (2) the table of contents and navigation (including actions); (3) the branding and theme. We will focus in this tutorial on editing content, and you can explore more in guides for [Table of Contents](https://mystmd.org/guide/table-of-contents), [Navigation & Actions](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU 'Navigation & Actions'), [Logo & Branding](oxa:Eh6WvY9NT46Ds4lE3OqJ/UgHua2z4Rp16qMSx6e6U 'Logo & Branding'), and in [Themes](oxa:Eh6WvY9NT46Ds4lE3OqJ/vOSirflk00uCKzwatefn 'Themes').

🛠️ For the live editing to work, ensure that the web server is running, if you have cancelled it you can bring it back up using `curvenote start`

### Editing Markdown

🛠️ Open `content/web/index.md`

You will see markdown frontmatter surrounded in `---` where we can set the title of the article.

🛠️ Change the title of the index file to `Welcome to my site 🚀` and save the file.

The site will live-reload in a few milliseconds (without loosing your scroll position!). If you have the server open (the bottom-right pane in {numref}`Figure %s <Ykb7g8lVu4>`) then you can also see the updates to the web server. In this case the file was built in 25ms ⚡.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-gQwGHN7jcOakbnGuvEad-v1.gif
:name: Ykb7g8lVu4
:align: center
:width: 100%

Live-reload of changes to title and content showing an editor in VSCode on the left and the curve.space site on the top-right with the `curvenote start` command in the bottom-right.
```

🛠️ Change some of the text and see the changes in real time. You can use standard markdown or extended syntax for [MyST markdown](oxa:Eh6WvY9NT46Ds4lE3OqJ/mS6TLCfdpoKbugwh3Rzf 'Working with markdown').

There are a few other additions to the flavour of markdown, called MyST, that we use to allow for rich scientific writing. You will also notice the [OXA Links](https://oxa.link/), which allow us to [sync](oxa:Eh6WvY9NT46Ds4lE3OqJ/7v9DUbI6Qm6f6vEd2anm 'Adding and updating content') information to/from Curvenote blocks. For more information, see the guide on [working with markdown](oxa:Eh6WvY9NT46Ds4lE3OqJ/mS6TLCfdpoKbugwh3Rzf 'Working with markdown').

### Editing Notebooks

Jupyter Notebooks are an excellent way to explore, visualize and analyze scientific data. Curvenote has first-class support for Jupyter, including interactive visualizations (see the [Jupyter docs](https://docs.curvenote.com/jupyter) for more).

🛠️ Open the notebook `content/web/notebook.md` using VSCode, Jupyter Lab or the classic Jupyter Notebook app.

You can make any edits locally as you normally would.

🛠️ Edit the frontmatter, which is a markdown cell, and see the site update in real time.

Many of the interactive visualizations in Jupyter work out of the box in a curve.space site, in the default project in {numref}`Figure %s <pnvb2HiPh0>` you can see an you can see an Altair plot being updated and reloaded in real-time.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-Hax3EL4KLyCP6j0WuZWp-v1.gif
:name: pnvb2HiPh0
:align: center
:width: 100%

Live reload of notebooks with interactive visualizations like Altair plots.
```

The markdown cells in your notebook can also have rich MyST markdown content, including citations and references to figures. For more information, see the guide on [working with notebooks](oxa:Eh6WvY9NT46Ds4lE3OqJ/cg5xe63ZRhLmNpn84YLy 'Working with notebooks').

## Deployment

Up until now, all of our site and changes have been local, next we are going to deploy our site to the internet so other people can see the interactive notebooks and reports we have made.

🛠️ To deploy, stop the local web server using `ctrl+c` then run `curvenote deploy`.

```text
% curvenote deploy

? Deploy local content to "https://your.curve.space"? (y/N)
```

You’ll be shown the target URL for your site, which is based on your Curvenote username and the `site.domains` list in your `curvenote.yml`.

🛠️ Type `Y` or `Enter` to confirm the deployment, and your site will be uploaded and available in the next few seconds. 🚀

```text
☁️ Uploading 27 files
 ████████████████████████████████████████ 100% | ETA: 0s | 27/27
☁️ Uploaded 27 files in 3.64 s.
🚀 Deployed 27 files in 2.08 s.
🕸 Site Deployed
🌎 https://your.curve.space
```

🎉 Congrats on deploying your first site! The site is wicked-fast, follows best practices for performance, accessibility, citations, metadata, SEO, and has a full API on all of the content to help make it [FAIR](https://en.wikipedia.org/wiki/FAIR_data) {cite:p}`Wilkinson2016FAIR`. You can use this to help share your scientific work and the data and computations behind it.

## Next steps

So far you’ve deployed your content, with default settings and without additional configuration — find out how to customize your site by understanding the [Local Folder Structure](oxa:EplL6AlILV3RGEDPzj5U/cgsCbeDyY6uEqrzTzRuC 'Local Folder Structure') and checking the [Configuration](oxa:EplL6AlILV3RGEDPzj5U/IR80H29NQR3l057xtUpi 'Configuration') options.
