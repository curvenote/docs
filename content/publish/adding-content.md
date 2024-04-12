---
title: Adding and updating content
description: ''
tags: []
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/8MjaUWcJQ2AtWobtetml.1"}

**In this guide you will:**

- add additional local files to your site, both Markdown `.md` and Jupyter notebooks `ipynb`
- link to a second project on Curvenote, to include it’s content in your website
- pull updated content from Curvenote
- customise the navigation of your site

```{important}
**Before you start:**

This guide assumes that you have completed one of the [Start with a Curvenote project](oxa:Eh6WvY9NT46Ds4lE3OqJ/cMzSX755ZfawTQbU41BV "Start with a Curvenote project") or [Start with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS "Start with a local folder") tutorials and so have the Curvenote CLI installed (see [Installing Curvenote](oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb "Installing Curvenote")), Authorized (see [Authorization](oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw "Authorization")) and have already started the local development environment at least once.

```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/OxF9YDwi9Dfpqf1XnH0m.3"}

## Add a new project within my website project

Let’s assume the local project folder has the following structure and content, in this case containing a `content/myblog` subfolder that is linked to a project (also called `myblog` in this example) on Curvenote.

In this case, `myblog` is my “root” project and the primary project associated with my website. A folder structure like this is typical when you [start with a Curvenote project](oxa:Eh6WvY9NT46Ds4lE3OqJ/cMzSX755ZfawTQbU41BV 'Start with a Curvenote project').

```text
_build/*
public/
	logo.svg
content/blog
		images/
        	DOHMeg040aVXqR51yjBy-v1.jpg
		_toc.yml
		welcome.md
		my-first-post.md
		my-first.notebook.ipynb
curvenote.yml
```

The corresponding website looks like this:

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-r777qnOcE1fKiEHaozw8-v1.png
:name: Kmu0HNj2md
:align: center
:width: 100%

A [curve.space](https://curve.space) website created from content pulled from a single linked Curvenote project
```

🛠️ To add additional projects to your root project, run `curvenote clone`\:

```shell
> curvenote clone
? Link to Curvenote project: (https://curvenote.com/@templates/curvespace)
```

```{important}
**A note on links**

If the link also contains the name of an article or notebook, this will still work and only the **project** information will be used. You can also use an `oxa` link from the “Copy Link” menu item in Curvenote.

```

🛠️ Next, choose the name of the local sub-folder where content for this project will be placed, the default location is based on the project name and is usually a good choice.

```shell
? Link to Curvenote project: https://curvenote.com/@stevejpurves/geoscience/phase-and-the-hilbert-transform
Validating link...
🚀 Found "geoscience" (@stevejpurves/geoscience)
? Name of local folder to sync to? (content/geoscience)
```

Next, the content for the projects you just cloned will be pulled to your local file system, you can also do this later with `curvenote pull`.

This command may take some time depending on how much content is in your project, but it will create local copies of all `Articles` (as markdown files `.md`), `Notebooks` (as `.ipynb` files) and linked content such as images and citations.

```text
Content successfully added 🎉
```

The local folder structure will have been expanded with the additional content and configuration files, to be something like this:

```text
_build/*
public/
	logo.svg
content/
	blog/
  		curvenote.yml
    	welome.md
      	...
    geoscience/
    	curvenote.yml
      	paper.md
        ...
    another-project/
    	curvenote.yml
      	notebook.ipynb
        ...
curvenote.yml
```

🛠️ Run `curvenote start` to see the site expanded with new content. In the example below, we actually added two new projects, each of which appears as new items in the Navigation on top of the site, and each of which has its own Table of Contents on the left-hand side when navigated to.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-Sn10EXtZHXfzkvaLmXDN-v1.png
:name: iCdLf4niTo
:align: center
:width: 100%

Example website based on a root project `myblog` that has had content from an additional two projects (`geoscience`, `Computational Finance`) added to it. When a project is “added” it remained linked in the root site configuration which is stored in the `curvenote.yml` file in the root folder.
```

### Next Steps

Now that you have linked projects contributing content to your website, you will need to pull updates from Curvenote check the next section on `pulling updated content`. When projects are added it’s often necessary to tweak the wording and layout of the navigation elements, check the section `Customizing Navigation` for how to achieve that.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/5ptAjQVMR2pRK3meDinX.3"}

## Pulling updated content

Pulling updates from Curvenote is achieved using the `curvenote pull` command and will replace all local content with updated content from Curvenote.

```{note}
**Note**

Currently, this will remove any local content changes from your folders so is best suited to workflows where any linked projects are modified wholly by authors working on Curvenote.

Pulling content is therefore a one-way operation. However, in the future `curvenote pull` will allow for fetching updated remote content while preserving any local changes, providing tools for merging and diffs. Watch this space. 🧙

```

🛠️ In the root of the local folder, run `curvenote pull`

```shell
curvenote pull
? Pulling content will overwrite all content in folders. Are you sure? (y/N)
```

This command will pull content for all projects in one go. To pull updated content for a **single project** add the local content path to the command e.g. `curvenote pull content/myblog`

```shell
curvenote pull content/myblog
? Pulling will overwrite all content in content/myblog. Are you sure? Yes
Pulling content/myblog from "myblog" (@stevejpurves/myblog)
🚀 Pulled content/myblog in 3.54 s
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/RVJBM6RA3iiaWUpLP67g.3"}

## Customizing Navigation

When projects are added to your site, the `curvenote.yml` file in the root folder is updated to contain the linking information for each project. When projects are added titles are generated based on project names. The `curvenote.yml` file for the example site we’ve shown here is:

```yaml
version: 1
site:
  title: My Blog
  domains:
    - stevejpurves.curve.space
  logo: public/logo.svg
  logoText: My Blog
  twitter: stevejpurves
  nav:
    - title: Blog
      url: /myblog
    - title: geoscience
      url: /geoscience
    - title: Computational Finance
      url: /computational-finance
  projects:
    - path: content/myblog
      slug: myblog
    - path: content/geoscience
      slug: geoscience
    - path: content/computational-finance
      slug: computational-finance
  actions:
    - title: Learn More
      url: https://curvenote.com/docs/web
```

🛠️ Update the strings in any of the `title` fields to change the text that appears on your site, in the banner, Navigation and at the top of the Table of Contents for each section.

```{note}
**Note**

When modifying the `curvenote.yml` file it may be necessary to halt (CTRL+C) restart the `curvenote start` command to see changes.

```

### Nesting Projects

When we added projects to our site, they were automatically added as individual items in the Navigation bar.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-xjiptpnTXElB9Mjs7Jvd-v1.png
:name: TfjJYgQ4go
:align: center
:width: 100%
```

Alternatively, projects can be grouped together, which can be helpful to manage space on the Navigation bar when there is a lot of linked content and organise similar content together. To do this change the `nav` section in the `curvenote.yml` file from:

```yaml
nav:
  - title: Blog
	url: /myblog
  - title: geoscience
	url: /geoscience
  - title: Computational Finance
	url: /computational-finance
```

to:

```yaml
nav:
  - title: Blog
  	url: /myblog
  - title: Research
  	children:
	  - title: geoscience
		url: /geoscience
	  - title: Computational Finance
		url: /computational-finance
```

This results in a new Navigation layout like this:

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-X1raQe1x46aibONnkcSw-v1.gif
:name: bj1YQANn54
:align: center
:width: 100%
```

Find out more about customization in [Navigation & actions](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU 'Navigation & actions') .

```{important}
**😎 Cool Example**

You can see an example of a site with many linked projects that uses this feature to group projects by event, on the [Software Underground Transform Website](https://transform.softwareunderground.org/).

```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/Uk2kKI0AOWlRQ5M3LypW.2"}

## Add new local files to a project

To add additional files we need to locate the `_toc.yml` file in the folder beside the content and update it. In this case, this is located at `content/blog/_toc.yml`.

````{important}
**Note**

If you started by following the [Start with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS "Start with a local folder") tutorial, your initial layout is probably more like this:

```text
_build/
public/
	logo.svg
_toc.yml
welcome.md
my-first-post.md
my-first.notebook.ipynb
curvenote.yml
```

So the `_toc.yml` is located at the root of the local folder structure.

````

Opening the `_toc.yml` for this project we see:

```yaml
# Table of contents
# Learn more at https://jupyterbook.org/customize/toc.html

format: jb-book
root: welcome
chapters:
	- file: my-first-post
	- file: my-first-notebook
```

To add additional files, or change the ordering of files whether these be `.md` or `ipynb` we can simply extend this list.

```yaml
# Table of contents
# Learn more at https://jupyterbook.org/customize/toc.html

format: jb-book
root: welcome
chapters:
	- file: my-first-post
	- file: my-first-notebook
    - file: my-second-post
    - file: my-second-notebook
```

See <https://jupyterbook.org/customize/toc.html> to learn how to further structure the table of contents.
