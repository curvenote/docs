---
title: LaTeX and PDFs
description: ""
date: 2022-01-20T20:25:52.595Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: latex-and-pdfs
oxa: oxa:EplL6AlILV3RGEDPzj5U/ws9GZcMqfeNIV2sPB82H
---

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/M3ieE6rw3gRWuPbXKKVZ.2"}

LaTeX is one of the best typesetting languages for creating PDFs of technical content, and it is heavily used in computational and mathematical disciplines. LaTeX has a steep learning curve, and it is quite difficult to switch between various templates with all of the intricate requirement differences in how to represent your content. It is also difficult to parameterize your PDF documents with data-driven content, reusable components, and has limited to no support for any interactive content.

The Curvenote CLI has first class support for LaTeX documents and ensures that the LaTeX that is written is thoughtful and easily customizable. The CLI can also stitch together your workflows to allow you to write interactive, computational and reusable content as a *first* target, and ensure that you have LaTeX and PDF outputs that can be submitted to existing preprint servers, journals or customers. PDFs and LaTeX aren’t going away, but we believe they should be a secondary communication tool — with instead a primary focus on interactive, connected, and up-to-date content.

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/0xC6LdjI35DyERzpvyyy.1"}

## Video Overview

```{iframe} https://www.loom.com/embed/a914be6e9de14ca9a0802b5817147edb
:label: j4e2eYZKLK
:align: center
:width: 70%
```

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/ZWrgs0BFl834Jz3xCiPa.2"}

## Exporting a PDF from Curvenote

```python
curvenote export pdf [link] [target] -t [template]
```

This will create the following files:

```shell
my-curvenote-pdf/
├── _build
│ ├── main.tex
│ ├── class_file.cls
│ ├── other_weird_latex_stuff.synctex.gz
│ └── images/
├── main.pdf
└── main.log
```

As with other tools, there is a `_build` directory, which has all the intermediate files that are created. There are only two files that are created in the directory that you run `curvenote`: (1) the PDF; and (2) the log file that has all of the logs from both the curvenote CLI and the latex build process.

## Specifying a Template

There are many different templates that are available in our [open source repository](https://github.com/curvenote/templates) on GitHub, you can also browse them on <https://curvenote.com/templates>. Once you have chosen the template to work with, you can use the `-t` option in the command to export with that template. The default template is `default` which has similar styling to the online Curvenote environment.

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/YqsgIMcfgtnP9cyOzlGZ.1"}

### Dependencies for LaTeX and PDF

If you are exporting to LaTeX with an open-source template specified (see all [templates](https://github.com/curvenote/templates)) or if you are creating a PDF you will need to install the [jtex](https://pypi.org/project/jtex/) python package to be installed and available on the user's `PATH`. With [Python 3.7](https://www.python.org/downloads/) or greater installed, install `jtex` via pip:

```shell
  python -m pip install jtex
```

For LaTeX PDF builds you will also require a version of LaTeX to be installed.

