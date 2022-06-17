---
title: Videos & Embedded Content
description: ""
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: 2022-03-15T04:37:42.984Z
name: videos-and-iframes
oxa: oxa:Z1isOjJQGvM22q5fhunb/uhqOeXVi0jnYKtq5AIeJ
---

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/a3mz2jgz06uuAJdsXOzV.1"}

External content from a variety of places can be embedded into a Curvenote block. All of the options below must be added using either the options in Insert Menu➕ in the Editing Toolbar at the top of the page or the [command menu](oxa:Z1isOjJQGvM22q5fhunb/gKX5CnZEMGcUbygsA0dh "Command Menu") accessed via the `/` symbol.

- YouTube Video `/YouTube`
- Vimeo Video `/Vimeo`
- Loom Video `/Loom`
- Embed an IFrame `/IFrame`

For example, this is a concept video about Curvenote (when we started we were called iooxa!).

```{iframe} https://www.youtube-nocookie.com/embed/N0imbgUOzYY
:label: sLPcj3nwsc
:align: center
:width: 80%
```

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/EDlpMGMvC2uyB0YOpIM2.1"}

## 3D Content - SketchFab

You can embed 3D content from [Interactive Outputs](oxa:Z1isOjJQGvM22q5fhunb/FQ38tYxjaVDpk4NClicI "Interactive Outputs") hosted on Curvenote, or through external services like Sketchfab.

```{iframe} https://sketchfab.com/models/34dfb04af48747de92ff1add099dda4e/embed
:label: pyfkIUwwVp
:align: center
:width: 70%
```

To embed this sort of content, or any other IFrame content, find the `Embed` button, and copy the specific link to the IFrame, not any of the other code.

```{figure} images/Z1isOjJQGvM22q5fhunb-wiB2XfFaM8HMk1pHi9YF-v1.png
:name: VpqS8wXfb2

Curvenote only uses the specific link to the content, not any of the code provided.
```

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/YCjlEBFVnUnTsx2wgawg.2"}

## Google Slides

You can embed Google Slides, using the **File → Publish to Web** in Google Slides, see [their help here](https://support.google.com/a/users/answer/9308870?hl=en). In the publish dialog, click the embed tab, and copy the URL in the IFrame HTML tag.

```{figure} images/Z1isOjJQGvM22q5fhunb-dZGczZZLuRQTfjBmQOMH-v1.png
:name: BW7o9WpXSQ
```

For example, here is a seminar talk:

```{iframe} https://docs.google.com/presentation/d/e/2PACX-1vQLA_cwshr37isaM5V8TlPDS6GJzcuCL2Qggd00Dp9I1R4YIQaxqk4LCuElwHhEI-TsrryVkAplLwzP/embed
:label: QP1tqy3Nx5
:align: center
:width: 100%
```

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/K6yagBwDSAHYo50YbTbC.1"}

## Interactive Physics - PhET

Integrations with PhET: <https://phet.colorado.edu/>

> “PhET provides fun, free, interactive, research-based science and mathematics simulations. We extensively test and evaluate each simulation to ensure educational effectiveness. These tests include student interviews and observation of simulation use in classrooms”

```{iframe} https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_en.html
:label: UQeLn8GJ4p
:align: center
:width: 90%
```

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/5YnGyYTpUD4DkjWn5u9n.1"}

## Learning Modules - H5P

H5P allows you to create, share and reuse interactive HTML5 content. See <https://h5p.org/> for more info. Curvenote in this integration acts a bit like the Wordpress integration for H5P.

This is an example of embedding content from H5P into Curvenote. You can use the `/iframe` command and copy the source (e.g. `https://h5p.org/h5p/embed/1396`) into the alert that pops up.

```{iframe} https://h5p.org/h5p/embed/1396
:label: MFJ1AWpisR
:align: center
:width: 70%
```

````{warning}
Note, Curvenote does not at this time host `*.h5p` files. You can use your existing solution and embed them in Curvenote using the technique above.

````

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/0l9JXZamwIdKudSlf1sx.1"}

## Figma

To embed a Figma file follow the instructions here:

<https://www.figma.com/developers/embed>

You have to put the following code before the url:

`https://www.figma.com/embed?embed_host=astra&url=`

For example:

[https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File](https://www.figma.com/embed?embed_host=astra&url=\\
       https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File)

```{iframe} https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File
:label: upoQqHt93G
:align: center
:width: 100%
```

