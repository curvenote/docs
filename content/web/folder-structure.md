---
title: Folder Structure
description: ""
date: 2022-05-26T17:23:58.905Z
authors: []
name: folder-structure
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/fDMrRS0eu2j1AeD8O311
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/LYFMtOvhlcZcElIhh6tg.1"}

Open the folder in a text editor program, like [VSCode](https://code.visualstudio.com/), to explore the structure of a default project. There are a few things to notice including the configuration YAML and folders for `content`, `_build` and `public` information for your site.

First, the `curvenote.yml` contains all of the information for your `site` like the title, navigation, logo and any actions in the navigation. The configuration also includes configuration about the `project`, which is different because you can actually have many projects in a single site (e.g. many presentations or papers that live on your website). The `project` in this file is the main project for the site and will contain the index material or landing pages. If you started with a paper or report instead, you can always import this into a different site in the future.

Second, the `content` folder includes all of the Markdown files and Jupyter Notebooks in your project. We will look at this folder more in the next section as we start to make changes. The individual content folder has a `references.bib` for the project, and also includes an `images` folder that has all images necessary for the markdown and notebook files.

The `public` folder contains additional static assets necessary for your site like logos, favicons, or global files to download. The public folder doesn’t contain content images, which are kept in the content folder.

The `_build/web` folder contains all of the information for running the local web server as well as listen to changes when you are editing the site to provide incremental updates.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/KctIE4pPkAGEYsTcLRkL.2"}

````{important}
**More Coming Soon! 🚧**

We are actively working on the documentation. Please check back soon or send us an email asking about this page: [support@curvenote.com](mailto:support@curvenote.com)

````

