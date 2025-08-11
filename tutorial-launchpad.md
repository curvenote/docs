---
title: Start from try.curvenote.com
description: >-
  After you launch a website using https://try.curvenote.com, use this tutorial
  to customize it and make a permanent website.
tags:
  - tutorial
thumbnail: thumbnails/launchpad.png
---

```{important}
**Success!**

So you have already launched a website from your git repository using <https://try.curvenote.com/>!

```

In this tutorial we will customize the site locally and make a permanent deployment:

1. [Install the Curvenote CLI](https://curvenote.com/oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb)
2. Clone your GitHub repo
3. Follow the tutorial: [Start with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS 'Start with a local folder')
4. [Get an API Key](https://curvenote.com/oxa:EplL6AlILV3RGEDPzj5U/RzBCtk3yOrXhAVY2z2Bw)
5. Setup [deployment from GitHub](oxa:Eh6WvY9NT46Ds4lE3OqJ/rVruBYk1hDZL2Ca9a6UQ 'Deploying from GitHub')

## Quickly Sharing Research Materials

```{important}
If you only want to create a temporary website and get a relatively private link to quickly share with others, then here are some tips for getting a nicer layout, controlling the table of contents and navigation features by making changes in your git repository.

```

Launchpad will work with any repository containing Markdown files `.md` and Jupyter Notebooks `.ipynb`, automatically builds a [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents') and infers titles for pages within the website.

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

Launchpad will decend into subfolders in order to find `.md` and `.ipynb` files to add to your website, and will reflect the folder structure in the site’s [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents') . If you are free to adjust your repository’s layout, you may do so to create a nicer [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents') for your website.

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

will result in the following [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents')\:

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-OdLnmrVGgoPxXTwDYsDh-v1.png
:name: LIS6FNRzPj
:align: center
:width: 90%
```

### Improving titles in the table of contents

The titles for items in the [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents') will be determined from file headings where possible, and eventually, fall back to the filename. Top-level headings will be used for the title where they are found i.e. `# My Heading`, In Jupyter Notebooks only top-level headings in the first cell will be used.

In both cases, choose a top-level heading that will make sense in your [Table of Contents](oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du 'Table of Contents'). For repositories with many notebooks, for best results avoid starting each with top-level headings such as `Setup` or `Introduction` and use the top-level heading to represent the title of the notebook. In addition, making good use of the markdown heading hierarchy in any file, will result in a nice document outline being generated for that page on your website.

### Using frontmatter

To get even further control over how your `.md` files and Juptyer Notebooks are rendered, you can add [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S 'Frontmatter') to them and use this to display license information, links, DOIs and more. See [Frontmatter](oxa:Eh6WvY9NT46Ds4lE3OqJ/ZS5jFLjvnEdoTjlf1d7S 'Frontmatter') on how to do this, and the fields available.
