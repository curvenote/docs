---
title: Citations
description: ""
date: 2022-05-24T14:45:10.494Z
name: citations
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/Vhry2i4pZKexKOLOQasy
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/qcKG2ctAV4X4R5KKJDUB.1"}

When you add a citation in Curvenote they automatically show up in your site, including a references section at the bottom of the page. These citations are able to be clicked on to see more information. There are two different ways to add citations to your documents: (1) adding a markdown link to a DOI; and (2) by adding a bibtex file, which can be exported from any reference manager.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/QlwpZR1mcPXqUNLcfxhA.1"}

## Simple Referencing with a DOI Link

🛠️ Add references easily to your markdown files or Jupyter Notebooks by including the citation as a link to the `doi`. For example:

```text
([Purves, 2014](https://doi.org/10.1190/tle33101164.1))
```

Provided the `doi` is formatted correctly, this will be changed during the build process, to a citation with a pop-up panel on hover like this: {cite:p}`Purves2014Phase`, and the reference information will be automatically added to the reference section at the bottom of your notebook (see below👇).

Providing your DOIs as links has the advantage that on other rendering platforms, your citation will still be shown as a link. If you have many citations, however, this can slow down the build process as the citation information is fetched dynamically.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/NIZuEllpI413NBP1aWcJ.3"}

## Including BibTex

A standard way of including references for $\LaTeX$ is using bibtex, you can reference these files directly through including a `references.bib` file in the same directory as your content directory for the project. These will provide the reference keys for that project.

To create a citation in Markdown, use either a parenthetical or textual citation:

```text
This is a parenthetical citation {cite:p}`purves2014`.
You can also use a narrative citation with {cite:t}`purves2014`.
```

This is the difference between: {cite:p}`Purves2014Phase` and {cite:t}`Purves2014Phase`. You can have many citation keys in a single role, by separating them with a `;`.

You can also include DOIs in citations (`cite`, `cite:t`, and `cite:p`) which will be linked in the same way as a simple markdown link, but will match the reference style of the project.

```text
This will be a citation: {cite}`10.7554/eLife.59045`.
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/KctIE4pPkAGEYsTcLRkL.2"}

````{important}
**More Coming Soon! 🚧**

We are actively working on the documentation. Please check back soon or send us an email asking about this page: [support@curvenote.com](mailto:support@curvenote.com)

````

