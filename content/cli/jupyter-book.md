---
title: Jupyter Book
description: Export your Curvenote project as a Jupyter Book
date: 2022-01-19T03:37:50.032Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: jupyter-book
oxa: oxa:EplL6AlILV3RGEDPzj5U/PH80omWOCDLi0rYkdu6i
---

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/ATUr3RItqdPVqtIkhONn.2"}

[Jupyter Book](https://jupyterbook.org/) is an open-source project that helps you build publication-quality books and documents from computational documents like Jupyter Notebooks. The project works on top of tools for software documentation in the Python ecosystem ([Sphinx](https://www.sphinx-doc.org/en/master/)) and allows you to integrate narrative and computational content. Curvenote is [involved](https://executablebooks.org/en/latest/team.html) in helping out with [Executable Books](https://executablebooks.org/), which is a multi-stakeholder community that define standards and build tools for computational content.

Our goal at Curvenote is to make it easy for you and your collaborators to work together on the narrative and computational parts of your books, and share blocks of content between various publications. In this sense you can think about Curvenote as a content management system (CMS) for collaborating on your books. This is especially helpful for the narrative content, which can be difficult to collaborate on with authors who are not familiar with Git or the intricacies of [MyST markdown](https://myst-parser.readthedocs.io/en/latest/).

The command line interface for `curvenote` can export directly to a Jupyter Book, and allows you to keep content in sync with Curvenote and deploy it the way that makes sense for you and your team. All of the content is kept local, but embeds [oxa.link](https://oxa.link)’s to share and update content between your various projects and Curvenote.

### Video Overview

```{iframe} https://www.loom.com/embed/09cbe1aad53841f7b30cbef321edb495
:label: QPRe2BJhT2
:align: center
:width: 70%
```

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/aW9b47l4Mih0eZgAzRTP.2"}

### Exporting a Jupyter Book from Curvenote

You can create a local copy of Curvenote content using the export `jupyter-book` (or `jb` for short) command, you will need to copy the URL of any page in the project that you would like to export. You can also use the menu of the article to copy an OXA Link.

```python
curvenote export jb [link]
```

This will create the following files:

```shell
my-curvenote-export/
├── _config.yml
├── _toc.yml
├── intro.md
├── logo.png
├── article.md
├── notebook.ipynb
├── references.bib
└── requirements.txt
```

As with other Jupyter Books, you can use the command `jupyter-book build .` when you are in the directory to build your book to HTML, the `index.html` built file will be in the `_build/html` directory. You can look to the [Jupyter Book](https://jupyterbook.org/intro.html) documentation for more information on how to build or deploy your book.

We are currently working to improve our documentation and support for Jupyter Books, supporting all features of Curvenote to export to JupyterBook is a priority. This allows you to write your content in Curvenote with the confidence that you can take it with you and export to a standard, community supported format.

````{important}
At this time:

* Curvenote will not create or overwrite a `requirements.txt` file
* Curvenote does not create a logo or `favicon.ico` file for you

````

**Current limitations:**

* You can only sync from curvenote → local at the moment. We expect this to change by April, 2022.

