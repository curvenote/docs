---
title: Start with a Launchpad website
description: ""
date: 2022-06-21T12:53:49.052Z
name: launchpad
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/RFA67yjx48ng2e6gvsIx
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/OS7PuLIn8xD3iZKIpeS7.3"}

Curvenote provides a service called Launchpad, hosted at <https://try.curvenote.com>, that allows you to generate a website directly from a GitHub or GitLab repo.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-9Qc1sO8r16rUrnR3rC6J-v1.png
:name: pBJxkN1058
:align: center
:width: 50%
```

**Use Launchpad to:**

- Quickly and easily share materials in markdown and notebooks on a unique randomized URL.
- Try out Curvenote’s website generation on your material before deploying a permanent website that you can maintain and update.

````{important}
**Help us spread the word!**

Like the launchpad service? Help us spread the word and tweet a link to your website once it’s ready.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-SaYD1x6SiVVGe5IwBuhU-v1.png
:name: S9p17sxaVB
:align: center
:width: 70%
```

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/RyPB6QMsRf8DJaTuT4iA.2"}

## Transitioning to a permanent website

If you have already launched your temporary website from your git repository, you’ll be able to see how well your content maps into the default layout, [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents") and [Navigation](oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU "Navigation and actions"). You might also see things areas which you’d like to change and add. The good news is that there are many ways to customize the site; including [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") for authors, affiliations, licenses, DOIs and much more.

Curvenote allows you to publish websites to either a subdomain of your choice or on a [Custom Domain](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 "Custom Domains"), these sites don’t expire and can be easily customized, updated and maintained.

To begin making your website permanent, follow the [Start with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS "Start with a local folder") tutorial.

If you’d like to take a different approach to build your website, via Curvenote’s online editor then follow the [Start with a Curvenote project](oxa:Eh6WvY9NT46Ds4lE3OqJ/cMzSX755ZfawTQbU41BV "Start with a Curvenote project") tutorial.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/E0kVL5xng8AFPRzCXVsT.4"}

## Quickly Sharing Research Materials

````{important}
💡 If you only want to create a temporary website and get a relatively private link to quickly share with others, then here are some tips for getting a nicer layout, controlling the table of contents and navigation features by making changes in your git repository.

````

Launchpad will work with any repository containing Markdown files `.md` and Jupyter Notebooks `.ipynb`, automatically builds a [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents") and infers titles for pages within the website.

### Choose your index file

The homepage or `root` of each website is taken from a single file in the repository, in the following priority order (case insensitive):

1. `index.md`
2. `readme.md`
3. any other `.md` file
4. `index.ipynb`
5. `readme.ipynb`
6. any other `.ipynb` file

Typically, a repository will contain a `README.md`, which will often be used as the homepage by default. To change this, provide alternate content in a `index.md` file.

### Using subdirectories

Launchpad will decend into subfolders in order to find `.md` and `.ipynb` files to add to your website, and will reflect the folder structure in the site’s [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents") . If you are free to adjust your repository’s layout, you may do so to create a nicer [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents") for your website.

For example, the following folder structure:

```text
myrepo/
	index.md
    root.ipynb
    folder/
    	folder.ipynb
        folder/
        	folder2.ipynb
```

will result in the following [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents"):

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-OdLnmrVGgoPxXTwDYsDh-v1.png
:name: LIS6FNRzPj
:align: center
:width: 90%
```

### Improving titles in the table of contents

The titles for items in the [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents") will be determined from file headings where possible, and eventually, fall back to the filename. Top-level headings will be used for the title where they are found i.e. `# My Heading`, In Jupyter Notebooks only top-level headings in the first cell will be used.

In both cases, choose a top-level heading that will make sense in your [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du "Table of Contents"). For repositories with many notebooks, for best results avoid starting each with top-level headings such as `Setup` or `Introduction` and use the top-level heading to represent the title of the notebook. In addition, making good use of the markdown heading hierarchy in any file, will result in a nice document outline being generated for that page on your website.

### Using frontmatter

To get even further control over how your `.md` files and Juptyer Notebooks are rendered, you can add [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") to them and use this to display license information, links, DOIs and more. See [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S "Frontmatter") on how to do this, and the fields available.

