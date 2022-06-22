---
title: Table of Contents
description: ""
date: 2022-05-26T11:41:33.190Z
name: toc
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/FrJ3eDvWP2LO3o40n4du
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/ZtSN5yDwp0NNDrmHsnNA.1"}

The Table of Contents is the left-hand navigation for your site. It can either be auto-generated, following some simple heuristics described below, or can be explicitly defined in a `_toc.yml` using the `jb-book` format.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/Ezn1YpcnhyJKMNIXhMbm.3"}

## Auto-generating a Table of Contents

When there is no `_toc.yml` defined an implicit table of contents is defined by the file system structure. All markdown and notebook files will be found in the working directory and all sub-directories. Filenames are not treated as case sensitive, and files are listed before folders. All hidden directories are ignored (e.g. `.git`) and the `_build` directory is also ignored.

### Filename Transformations

The filenames will also be transformed into url-friendly “slugs” that: remove preceding numbers (unless they are year-like, e.g. 1988-02 or 2022); rename any non-url characters (spaces, underscores, etc.) to `-`; lowercase the filename; remove any file extensions (e.g. `.md` or `.ipynb`); and keep the slug less than 50 characters. If there are duplicates, these will be enumerated with a trailing number (e.g. `readme-1`).

- `01-notebook.ipynb` will become `notebook`
- `2021_02_presentation.md` will remain `2021-02-presentation`

### Title Transformations

If a title is not provided by a notebook or markdown document in the front matter or first heading, the filename is used. The filename is transformed to a title by splitting on camel case, replacing `-` or `_` with spaces, and transforming to title-case.

- `01_MyNotebook.ipynb` becomes `My Notebook`
- `my_article.md` becomes `My Article`

### Root Page

The “root” of a site is the page displayed when someone browses to `https://username.curve.space`. The CLI will choose the root file in the following order:

1. `index.md`
2. `README.md`
3. The first `.md` file found alphabetically
4. `index.ipynb`
5. `README.ipynb`
6. The first `.ipynb` file found alphabetically

````{important}
**Note**

All of these can be over-ridden by choosing an explicit `_toc.yml`, when that is present it will be used.

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/eU6rVFctywLkReoPPK8k.1"}

## Defining a `_toc.yml` using Jupyter Book’s format

The `_toc.yml` can be defined for a site, and uses the format describe by Jupyter Book, the documentation for the format is described [here](https://jupyterbook.org/en/stable/structure/toc.html). If you are exporting from a Curvenote project, this file is automatically kept up to date. Briefly, it defines a `format` as `jb-book` and can list a number of `chapters` with files. The file paths are relative to your `_toc.yml` file and can optionally include the extension.

```yaml
format: jb-book
root: index
chapters:
- file: path/to/chapter1
- file: path/to/chapter2
```

For larger books, you can group the content into `parts`, these are created in Curvenote using the “New Group” functionality of the navigation. Each `part` has a `caption` and a list of `chapters` files can define children using a list of `sections`.

```yaml
format: jb-book
root: index
parts:
  - caption: Name of Part 1
    chapters:
    - file: path/to/part1/chapter1
    - file: path/to/part1/chapter2
      sections:
      - file: path/to/part1/chapter2/section1
  - caption: Name of Part 2
    chapters:
    - file: path/to/part2/chapter1
    - file: path/to/part2/chapter2
```

````{warning}
**Note**

If you are using [Navigation Groups](https://docs.curvenote.com/write/navigation) in Curvenote, ensure that all of your content except the “root”, which is the first document in the navigation, is contained inside of Groups. If you don’t do this, groups will automatically be created for you on export.

````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/r6svGMPR4GMgFSpYs4oH.1"}

## Nesting of Files in URLs

You can have any level of nesting in a file-system of your project, however, when it is displayed in the URL, these nesting will be flattened to have a single “slug” that is contained in the project.

- `project/folder2/01_my_article.md` becomes `project/my-article`

All internal links will automatically be updated, and there is a `file` property that is exported as metadata. Add `.json` to the end of any url in your site to see the full data of the page.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-ULRC5K81Z2wajBUjKIMc-v1.png
:name: MSuxjgD8hx
:align: center
:width: 70%
```

