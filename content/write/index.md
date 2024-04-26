---
title: Writing with Curvenote
description: ''
---

Curvenote is a platform for scientific and technical communication providing modern tooling for technical writing, collaboration, publishing, and reproducible science. Our [mission](https://curvenote.com/mission) is to help in transitioning scientific communication out of static documents and promote more connections between how researchers work, and how they communicate and share that work.

Critical to that mission is providing tools that:

1. are accessible to programmers and non-programmers alike;
2. allow the creation of interactive, computationally driven online documents;
3. allow you to reuse components of documents across various resources; and
4. export to traditional formats, like PDF, PPT and Word to support your existing workflows.

You can use Curvenote to write scientific papers, technical reports, course materials, tutorials, documentation, blog posts, prepare a manuscript or thesis, and more!

Curvenote provides a writing platform that provides a variety of tools and features for you to create meeting or class notes, write reports, blog posts, prepare a manuscript or thesis, and more! When writing with Curvenote your content is separated into blocks that can be versioned and reused throughout multiple projects. You can collaborate simultaneously with other users, add comments, and share you content here or export it to Word, PDF, $\LaTeX$, or Markdown formats.

```{figure} images/w6jXebeTS6WGaVFDIEz9-HeO2H9Xr2LQgzX9OvOvq-v1.png
:name: LIWhdN2Wro
:align: center
:width: 90%
```

Writing your research and technical material once and publishing that in a number of places; Curvenote provides document conversion, version control, collaboration, and commenting at the center of your communication workflow.

# The Curvenote Platform

Curvenote is comprised of three main components:

1. The Curvenote Platform ([curvenote.com](https://curvenote.com))
2. The Curvenote Command Line Interface (CLI)
3. Web-based publishing infrastructure ([curve.space](https://curve.space))

## Curvenote - [curvenote.com](https://curvenote.com)

Curvenote is a Content Management System (CMS) and online application for technical writing, built around an online editor that is designed for scientific and technical content. The [editor](./editing.md) provides a WYSIWYG interface with [Markdown Acceleration](./markdown-accelerators.md), [Latex based inline math and equations](./math-and-equations.md), and support for [citations](./citations.md), [tables](./tables.md), [figures](./figures-and-images.md) and [interactive components](./interactive-outputs.md).

Log in to Curvenote and use it to write anything from scientific papers, and technical reports to a complete PhD thesis or project documentation. Manage your work in [Projects](./curvenote-projects.md), whilst also [working online with collaborators](./collaboration.md) or organizing multiple [Projects](./curvenote-projects.md) and people within a [Team](./curvenote-teams.md).

Curvenote integrates with [Jupyter Notebooks](./jupyter-extension-overview.md) through a [browser extension](./install-jupyter-extension.md) providing [version control and collaboration features](./versioning-notebooks.md), forming a bridge between data science and analysis work and writing & review, enabling effective collaboration across domains and skillsets. By saving Jupyter Notebooks in Curvenote your papers, reports and articles can include [reproducible figures](./reproducible-figures.md) and [interactive outputs](./interactive-outputs.md) that remain linked to your Jupyter Notebook environment and are easy to track and update.

Curvenote allows you to publish your work:

1. as [a rich and interactive website](./export-hosting.md) that can preserve many of the interactive and reproducible features from your draft in Curvenote and;
2. by [exporting to traditional document formats](./export-template-options.md) including [$\LaTeX$](./export-latex.md), [PDF](./export-pdf.md) and [Microsoft Word](./export-microsoft-word.md).

:::{important} Next Steps

- [Start Writing](https://docs.curvenote.com/write)
- [Integrate your data science work from Jupyter](./jupyter-extension-overview.md)
- [Publish to the web](./export-hosting.md)
- [Export](./export-pdf.md) your work to other document formats

:::

### Curvenote Command Line Interface (CLI)

Curvenote provides an open-source CLI tool, that allows you to interact with the Curvenote API as well as work with content locally on your machine to produce documents and websites.

With the Curvenote CLI you can:

- [Build, preview, and publish a website](https://curvenote.com/@docs/web/index) using Markdown and Jupyter Notebooks either entirely from your local machine or from one or more Curvenote projects;
- Export to [$\LaTeX$, PDF](./export-pdf.md), Microsoft Word (docx) and [JupyterBook](./export-cli-jupyter-book.md) format from the Curvenote API.

```{figure} images/w6jXebeTS6WGaVFDIEz9-2uEwIBEcG0xjIrESdKoB-v1.png
:name: XfN6daKZSB
:align: center
:width: 70%
```

The CLI is in active development and our roadmap includes the following powerful features:

- `curvenote push` allowing local content, including images and files, to be saved to or updated in a Curvenote project, enabling workflow automation for figure generation and reporting.
- `curvenote sync` allowing complete round trip of content between the Curvenote CMS and local folders and files, enabling collaboration between authors online and those working locally in Markdown and Notebooks.
- `curvenote export` “local mode”, enabling document conversion and workflow automation for creating $\LaTeX$, PDF and Microsoft Word (docx) from mixes of Markdown and Jupyter Notebooks.

:::{important} Next Steps

- [Install the Curvenote CLI](https://docs.curvenote.com/cli/installing)
- [Setup Curvenote API access](https://docs.curvenote.com/cli/authorization)
  :::

### Web-based publishing - curve.space

Curvenote provides a modern website publishing system that makes building and deploying a professional scientific website quick and easy. Based on the Curvenote CLI’s `web` command set, websites can be built from [one or more Curvenote projects](https://curvenote.com/@docs/web/tutorial-deploy-project), from [a folder containing Markdown and Jupyter Notebooks](https://curvenote.com/@docs/web/tutorial-deploy-local), or [directly from GitHub](https://curvenote.com/@docs/web/github-action).

```{figure} images/w6jXebeTS6WGaVFDIEz9-dEuS2pFgrmQvvCcIsm6a-v1.png
:name: xhj11Hc884
:align: center
:width: 90%
```

The resulting websites are automatically deployed on a global CDN for fast rendering and delivery around the globe and incorporate interactive features typically only found in the most modern web-based Journals and publications.

Each Curvenote user can deploy multiple sites for free to their [curve.space](https://curve.space) subdomain (e.g. `https://username-slug.curve.space`) or deploy to a custom domain. Members of Curvenote [Team](oxa:w6jXebeTS6WGaVFDIEz9/REipmoZAgXHBPDKdLEC5 'Teams') can also deploy websites linked to shared team projects, making content aggregation and collaboration across a group of authors, editors, and reviewers easy.

:::{important} Next Steps

- [Learn more about Curvenote web and curve.space](https://docs.curvenote.com/web);
- [Publish a website from a Curvenote Project](https://curvenote.com/@docs/web/tutorial-deploy-project);
- [Publish a website from a Local Folder](https://curvenote.com/@docs/web/tutorial-deploy-local)
  :::
