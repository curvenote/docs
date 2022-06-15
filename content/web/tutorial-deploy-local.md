---
title: Start with a local folder
description: ""
date: 2022-05-26T10:56:00.000Z
name: tutorial-deploy-local
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/GSAEVXnkMFXZwi6bC9jV.1"}

Curvenote allows you to easily publish content on the web as a fast, optimized site that preserves all interactive features in Curvenote, deployed on our hosting service called [curve.space](https://curve.space) and can also be hosted on your own [custom domain](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 "Custom Domains").

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/4PeQhqSkQ4W7SOZYLfC4.2"}

**In this tutorial we will:**

- Prepare content to publish in a local folder, which may also be a git repository
- initialize a Curvenote site in that local folder
- edit the files locally and see live updates; and
- deploy that to a new website hosted at `https://username.curve.space`

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/vs7XbJwoNbAfZ8aIHOqP.1"}

````{important}
**Before you start**

This tutorial assumes that you have installed the Curvenote CLI (see [Installing Curvenote](oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb "Installing Curvenote")), generated and set an API Access Token (see [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization")) and is aimed at `*nix` operating systems.

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/Rlubtklyn8adnMX8dQQQ.4"}

# Create a folder containing content

In this tutorial, we will create a [curve.space](https://curve.space) site using local content. We will see how you can initialize a site, customize features and edit content locally whilst previewing changes in a local web server, before deploying the site directly from your computer.

````{important}
**GitHub**

This is an ideal starting point if you are managing your content in GitHub, and we’ll assume that is the case in this tutorial so that we can add a couple of additional steps to think about when using GitHub. If you are not using GitHub, just ignore those steps and focus on managing the content for your site in a local folder, and backing that up appropriately.

````

````{important}
**Demo Content**

You can follow this tutorial using your own content. However, if you’d like to use the same content that is featured in the tutorial you can do. Just use the `git clone` command specified in the next step without modification.

````

🛠️ The first step is to create a new, or identify an existing, folder to contain all the local content and configuration files from your site and `cd` into it:

```shell
% git clone https://github.com/curvneote/doc-blog-template blog
Cloning into 'blog'...
remote: Enumerating objects: 60, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 60 (delta 0), reused 4 (delta 0), pack-reused 54
Receiving objects: 100% (60/60), 20.30 MiB | 9.82 MiB/s, done.
Resolving deltas: 100% (18/18), done.
% cd blog
```

Your website is built from content in the form of Markdown `.md` files and Jupyter Notebooks `.ipynb`. In this example, we have both in our local folder, as well as an image (used in `index.md`) and a logo that I want to use for my blog.

```python
blog/
	images/
  		hackathon2019.jpg
	blo-logo.svg
	index.md
	my-first-post.md
	my-first.notebook.ipynb
```

````{important}
**Homepage**

When your site is initialized, the CLI will choose a file to use as the first page of your site; `index.md` and `README.md` (in either lower/upper case) are chosen first if they exist.

If you want to ensure a specific file is used as root, you can rename this now. Otherwise, continue and see [Table of contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of contents") on how to change the root file later.

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/ilP0U3rZwq9PpJ0SWLgb.3"}

# Initialize a curvenote site

🛠️ From within your blog folder, run `curvenote init` to start an interactive command line that will guide you through the initial setup of your site.

```text
Welcome to the Curvenote CLI!! 👋

curvenote init walks you through creating a curvenote.yml file.

You can use this client library to:

 - sync content to & from Curvenote
 - build & export professional PDFs
 - create a local website & deploy to https://stevejpurves.curve.space

Find out more here:
https://docs.curvenote.com/cli


? What is the title of this project? (blog) My Blog
```

The title of your project/site will appear in web browser tabs, metadata, and navigation menus. This title, and any other setting, can be modified later by editing the `curvenote.yml` file produced in this step.

🛠️ Next, you will be presented with some options and as we are working with local content select `Use the content & notebooks in this folder`. Use the ↕️ arrow keys to change the selection:

```text
? What is the title of your curve.space site? My Blog
? What content would you like to use? 
  Import from Curvenote 
❯ Use the content & notebooks in this folder 
  - Show me some demo content! (Disabled)
```

This will initialize the folder and give you some tips on how to add new content in future, before prompting you to start a local web server.

```python
Curvenote setup is complete!! 🚀

You can use this client library to:

  - curvenote pull: Update your content to what is on https://curvenote.com
  - curvenote start: Start a local web server now!
  - curvenote deploy: Share content on https://stevejpurves.curve.space

Find out more here:
https://docs.curvenote.com/cli


? Would you like to start the curve.space local server now? (Y/n)
```

🛠️ Go ahead and answer `Y` or hit `Enter`, your content will be processed, your site built and a local web server will start up.

```text
? Would you like to start the curve.space local server now? Yes

Starting local server with:  curvenote start
🌎 Cloning Curvespace
⤵️  Installing libraries
⚙️  Writing site config.json


        ✨✨✨  Starting Curvenote  ✨✨✨


⚡️ Compiled in 356ms.
🚀 Built in 398ms

🔌 Server started on port 3000!🥳 🎉


        👉  http://localhost:3000  👈
```

This command can take a few seconds to complete, or longer if you have a large amount of content to process.

🛠️ Next, visit <http://localhost:3000> to view the website in your local browser.

````{important}
**Note**

If port `3000` is in use on your machine, an open port will be used instead, follow the link provided in the terminal. 🔗

````

The example site in this tutorial only has three pages and by default looks like this:

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-daYcX79Sb0FQmmtZS5DS-v1.png
:name: tJVYC0zweb
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/IYgmz3vsEisaxXxsUMc0.2"}

# Folder Structure

We can now look back at the local folder containing our site, which the Curvenote CLI has now populated with additional files and folders:

```text
blog/
	_build/*
    public/
    	logo.svg
	images/
  		hackathon2019.jpg
	blog-logo.svg
	index.md
	my-first-post.md
	my-first.notebook.ipynb
```

The additions are:

- `curvenote.yml` - the configuration file for your site
- `_build` - the folder containing the processed content and other site assets, which are used by the local web server. You should not need to touch anything in this folder. Should you delete the folder at any point running `curvenote start -f` will rebuild it.
- `public` - a folder where you can place static assets that you want to include in the site

If we open and look inside our `curvenote.yml` we will see a basic configuration like this:

```yaml
version: 1
site:
  title: My Blog
  domains:
    - stevejpurves.curve.space
  logo: public/logo.svg
  logoText: My Blog
  nav: []
  actions:
    - title: Learn More
      url: https://docs.curvenote.com/web
  projects:
    - path: .
      slug: blog
  twitter: stevejpurves
project:
  title: My Blog
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/qNlLyLZ4pEfLSXefkYC3.2"}

# Making changes

There are three major areas of the site that we can change (1) the content in Markdown or Notebooks; (2) the table of contents and navigation (including actions); (3) the branding and theme. We will focus in this tutorial on adding frontmatter and making branding changes around the content that you already have and you can explore more in guides for [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents"), [Navigation & Actions](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU "Navigation & Actions"), [Logo & Branding](oxa:Eh6WvY9NT46Ds4lE3OqJ/UgHua2z4Rp16qMSx6e6U "Logo & Branding"), and in [Themes](oxa:Eh6WvY9NT46Ds4lE3OqJ/vOSirflk00uCKzwatefn "Themes").

🛠️ For the live editing to work, ensure that the web server is running, if you have cancelled it you can bring it back up using `curvenote start`.

````{important}
**Note**

If at any time you do not see some of the following changes appear on your site, you may need to restart the local web server using `curvenote start -c`

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/DmdEESZD7cUUotbLkMtZ.2"}

## Custom Logo

The website comes with a Curvenote logo by default.

🛠️ To change that to a custom logo we can:

1. delete `public/logo.svg`
2. copy your updated logo (`blog-logo.svg` in this example) into the `public` folder
3. edit the `logo:` field in `curvenote.yml:6` to read `logo: public/blog-logo.svg`
4. refresh the website in your browser, if you need to

and you’ll see the custom logo (in this case a green Curvenote logo 😀) in the Navigation bar.

````{important}
**Note**

Your browser is very good at caching image assets like this, you may need to hard refresh to see the change (CTRL/CMD+SHIFT+R)

````

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-aD5FHgaNqHuAnkrjgGGF-v1.png
:name: z6PgRod3mZ
```

## Changing Actions

Actions are buttons that appear on the right of the navigation bar and by default, a single “Learn More” action is added. See [Navigation and actions](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU "Navigation and actions") to find out how to add, customize and remove actions.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/fR6UKHQgWPwrp8FUe7Z8.1"}

## Changing Page Titles

When building your site the Curvenote CLI tries to resolve the title for your page automatically for use in the Table of Contents and as the main Page Title.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-8NS6zk7OlPLLBlbcjxOo-v1.png
:name: U6PCeeIEzD
```

In the example above, the `index.md` file contains a Heading with the text “Welcome” which has been used for the default page title. However, the other two files `my-first-notebook.ipynb` and `my-first-post.md` do not contain any markdown headings, so the filename has been used directly. We can modify these default choices to suit our needs by adding [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") to our content files.

### Frontmatter

Frontmatter is the name for the section of metadata that is included at the top of a content file. Unless you already use frontmatter in your markdown, there is probably no frontmatter section at all in your files yet.

It is easy to add one. Add a pair of lines with `---` markers and in between include YAML formatted fields.

#### Markdown files

🛠️ In the example here, we’ll start with `index.md` and add the following to the top of the file:

```yaml
---
title: The Blog
description: A blog about data engineering and analysis in science
authors:
  - name: Steve Purves
    orcid: 0000-0002-0760-5497
    corresponding: true
    email: steve@curvenote.com
    affiliations:
      - Curvenote
---
```

Once we save, the website will update and we’ll see the following changes and additions:

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-kGcLMaFQ5v7WKxLdz3Ge-v1.png
:name: OEU3wDs6Mf
```

Note that, the title has been updated in the [Table of contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of contents") as well as at the top of the page, and the author and affiliation also now appear in the page header. There is a growing number of options available, check [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") for more details on them all.

#### Notebooks

The format of the [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") section is the same in notebooks with one key difference being that we need to {u}`add an additional Markdown Cell as the first cell in our notebook` and place the front matter section in there, complete with `---` markers.

Whitespace matters, as this is YAML, and as long as the layout of the section looks ok when you are editing the cell, that will work. Once we render the cell, unfortunately, Jupyter, VSCode and other notebook renderers don't “yet” know how to display the frontmatter correctly, so it may look a mess.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/uANFp4XA2VTIjaIr4Na8.5"}

### Site-wide frontmatter

So we can add frontmatter to each of our files and be very precise about the metadata for each piece of content, which is great but some of this metadata can be common across our whole site (or sections of it, see [Working with projects](oxa:Eh6WvY9NT46Ds4lE3OqJ/Omi3OM3q7uQVMkQChjdM "Working with projects")). Rather than duplicate the frontmatter in `index.md` in our other files, let’s instead move some of it to `curvenote.yml` where it will be applied to all content in our site.

🛠️ Open the `curvenote.yml` file for your site and locate the `project:` section. Add the `authors` information that we just added to the `index.md` file.

```yaml
version: 1
site:
  title: My Blog
  domains:
    - stevejpurves.curve.space
  logo: public/blog-logo.svg
  logoText: My Blog
  nav: []
  actions:
    - title: Learn More
      url: https://docs.curvenote.com/web
  projects:
    - path: .
      slug: blog
  twitter: stevejpurves
project:
  title: My Blog
  authors:
    - name: Steve Purves
      orcid: 0000-0002-0760-5497
      corresponding: true
      email: steve@curvenote.com
      affiliations:
        - Curvenote
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/50AWUIpR2WBYsQJq4Iql.2"}

````{important}
**Projects**

Curvenote uses “Projects” to scope different collections of content. When you create a new site there is by default a “root project” associated with it, hence the `curvenote.yml` in your local folder and has both a `site:` and a `project:` section, so here we can speak about project-wide and site-wide synonymously. Learn more about projects in [Working with projects](oxa:Eh6WvY9NT46Ds4lE3OqJ/Omi3OM3q7uQVMkQChjdM "Working with projects").

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/FVBDZwXGTZzjdFH9A9pE.1"}

🛠️ Next, go back to `index.md` and remove the `authors` information from there, leaving only the following fields:

```yaml
---
title: The Blog
description: A blog about data engineering and analysis in science
---
```

Ensure both files are saved and go back to your browser. You should see no change to the main page, it remains as before, complete with author and affiliation information.

🛠️ Next, check the other pages on the site which should now all show the project-wide author information!

This leaves us to add page specific metadata to the other pages on our site, such as title & description (see [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") for the full list) as well as overriding the `authors` metadata on a specific page should we need to.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/r30Ikg5crodeOINctFOF.1"}

````{important}
**Further Customization**

Many options for customization are available and you can learn more in the guides for [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents"), [Navigation & Actions](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU "Navigation & Actions"), [Logo & Branding](oxa:Eh6WvY9NT46Ds4lE3OqJ/UgHua2z4Rp16qMSx6e6U "Logo & Branding"), and [Themes](oxa:Eh6WvY9NT46Ds4lE3OqJ/vOSirflk00uCKzwatefn "Themes").

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/d0W8H9jxbZjQ7h8whsc5.2"}

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

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/W5qIsoCnHGR4PuOHXQjZ.2"}

# Tracking with `git`

If you started out this tutorial in a git repository you should commit your site’s configuration files and keep those in version control alongside your content.

🛠️ Add `_build/` to your `.gitignore` file so that the intermediate files are ignored

🛠️ Add and commit the `curvenote.yml` along with any other local changes to the file that you just deployed.

````{important}
**GitHub Integration**

If you are using GitHub to host your remote repository, it is possible to completely automate the deployment of your site using the Curvenote Deploy Github Action, find out how to set that up in [Deploying from GitHub](oxa:Eh6WvY9NT46Ds4lE3OqJ/rVruBYk1hDZL2Ca9a6UQ "Deploying from GitHub")

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/EEe93L684lrTCaEXRKL6.1"}

## Next steps

So far you’ve deployed your content, with default settings and without additional configuration — find out how to customize your site by understanding the [Local Folder Structure](oxa:EplL6AlILV3RGEDPzj5U/cgsCbeDyY6uEqrzTzRuC "Local Folder Structure") and checking the [Configuration](oxa:EplL6AlILV3RGEDPzj5U/IR80H29NQR3l057xtUpi "Configuration") options.

