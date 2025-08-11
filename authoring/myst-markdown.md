---
title: Writing a Scientific Paper using MyST
short_title: Using MyST Markdown
description: Curvenote uses a flavour of Markdown called MyST Markdown, which is designed to create publication-quality, computational documents written entirely in Markdown.
---

:::{tip} Objective
The goal of this overview is to introduce MyST Markdown and commonly used features necessary to write a scientific paper 📄.
MyST Markdown is bundled directly in Curvenote, and can be accessed through the CLI, which you can [install locally](./installing.md).
:::

Curvenote uses a flavour of Markdown called [MyST Markdown](https://mystmd.org) (Markedly Structured Text), which is designed to create publication-quality, computational documents written entirely in Markdown.

:::{important} Getting Started
To get started [install Curvenote CLI](./installing.md).
:::

````{note} See the video tutorial 📺
:class: dropdown
```{iframe} https://www.youtube.com/embed/NxSNVt9XsCI
:width: 100%
```
````

## MyST Markdown Overview

MyST is a superset of [CommonMark](https://commonmark.org/) (a standard form of Markdown) with special syntax for citations, cross-references, and block and inline extension points called "directives" and "roles".
MyST is influenced by [reStructuredText (RST)](https://en.wikipedia.org/wiki/reStructuredText) and [Sphinx](https://www.sphinx-doc.org) – pulling on the nomenclature and introducing additional standards where appropriate.

## Typography

The official documentation for MyST Markdown is found on [mystmd.org](https://mystmd.org/guide),
below we give some brief documentation for writing content.

### Basic Markdown

Documents are Markdown, `.md`, and have additional features when compiled with a tool like the curvenote or `mystmd` CLIs. A full list of the syntax can be found in the [typography documentation](https://mystmd.org/guide/typography), including `###` for headings, `_` for emphasis, `**` for strong, backticks for `` `code` ``, and `-` for bullet points.

```{myst}
## An important heading

1. Use a `-` for lists and `1.` for enumerated lists

- We can see _emphasis_, and **strong** `code`

> This is a block quotation with a [link](https://curvenote.com)
```

### Extended Typography

In addition to the basic markdown, MyST includes extended typography for things like [definition lists](https://mystmd.org/guide/typography#definition-lists), [footnotes](https://mystmd.org/guide/typography#footnotes), [superscript](https://mystmd.org/guide/typography#subscript-superscript), [quotation authors](https://mystmd.org/guide/typography#quotations), and [task lists](https://mystmd.org/guide/typography#task-lists).

```{myst}
Term 1
: This is an important term[^myref]

> A watery quote about H{sub}`2`O,
>
> -- An author

- [x] A completed task

[^myref]: This is an auto-numbered footnote definition
```

### Citations

Citations can be added inline using `@cite-key` syntax and having a BibTeX file in your project.
You can also directly link to DOIs using `@10.5281/zenodo.6476040`, which will create a hover reference
[@10.5281/zenodo.6476040] and a references section at the bottom of the page.
For multiple references in a parenthetical use `[@cite-key1; @cite-key2]`.
See the full MyST documentation on [citations and bibliographies](https://mystmd.org/guide/citations).

## Block Content

Block-level content, or directives, provide multi-line containers surrounded by either backticks or colons that include a type, arguments, options, and content. Examples include callout panels, figures, equations and tables. You can use directives using the following markup:

```{myst}
:::{note} Note Title
:class: simple
Here is a note!
:::
```

The directive above is of type `note`, and can take an arguments of the note's title, as well as a number of options in `:key1: value` syntax. A common option to use is `label`, which allows for you to cross-reference content.

:::{seealso} MyST Documentation on Directives
Directives can be used for [figures](https://mystmd.org/guide/figures), [callouts](https://mystmd.org/guide/admonitions), [tables](https://mystmd.org/guide/tables), [proofs](https://mystmd.org/guide/proofs-and-theorems), [exercises](https://mystmd.org/guide/exercises), [mermaid diagrams](https://mystmd.org/guide/diagrams), and other visual elements. See the full [MyST Markdown](https://mystmd.org/guide) docs for all directives.
:::

### Figures

In addition to the markdown `![](image.png)` syntax to create images, you can create figures in MyST with captions.
These are the `{figure}` directive, and can be labeled and referenced using the same syntax as citations. The figure numbering is automatic. See [figure documentation](https://mystmd.org/guide/figures) for more.

```{myst}
:::{figure} https://source.unsplash.com/random/500x150?sunset
:label: fig:sunset
A beautiful sunset, with an informative caption.
:::

In @fig:sunset, you can see...
```

### Inline Math and Equations

Equations can be created using a `{math}` directive and inline "dollar-math", both of these can also have a label and cross-referenced in text. See full documentation on [math and equations](https://mystmd.org/guide/math).

````{myst}
```{math}
:label: my-equation
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
```

The term $s(w_t)$ in [](#my-equation) means
````

### Tables

Tables can be created using [GFM tables](https://github.github.com/gfm/#tables-extension-) and a caption/label added using the `{table}` directive. See the [documentation on tables](https://mystmd.org/guide/tables).

``````{tab-set}
````{tab-item} GFM Table
```{myst}
:::{table} Table caption
:label: table
| foo | bar |
| --- | --- |
| baz | bim |
:::
```

````
`````{tab-item} List Table
````{myst}
```{list-table} This table title
:header-rows: 1
:name: example-table

* - Training
  - Validation
* - 0
  - 5
* - 13720
  - 2744
```
````
`````
``````

## Cross Referencing

Cross-references can be added in the exact same way as citations, using an `@fig:label` syntax, by default this adds the kind of the element that you are referencing and the auto-generated number (e.g. `Figure 12`).
To get more specific about the way that you reference, you can use a markdown link: `[See %s](#fig:label)`, the `%s` will be replaced by the number (i.e. `See 12`). See [full documentation](https://mystmd.org/guide/cross-references) for information on additional targets, numbering and other rules.

## Abstracts and Parts

To define parts of your document, like an abstract, use the page frontmatter. The full [documentation on page parts](https://mystmd.org/guide/document-parts) shows how to create these inline or in a notebook cell.

```{code-block}
:filename: article.md
---
title: My Paper
abstract: |
  This is a multi-line
  abstract.
---
```
