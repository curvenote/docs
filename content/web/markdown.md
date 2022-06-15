---
title: Working with markdown
description: ""
date: 2022-05-27T18:05:17.117Z
name: markdown
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/mS6TLCfdpoKbugwh3Rzf
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/WYFohaEVVZyeEsj6una3.1"}

Curvenote uses a flavour of Markdown called [MyST](https://myst.tools/) (Markedly Structured Text), which is designed to create publication-quality, computational documents written entirely in Markdown.

````{important}
**Note**

The easiest way to get started with MyST is to start writing directly in Curvenote ([see docs](https://curvenote.com/oxa:Z1isOjJQGvM22q5fhunb/YCk58PLviS6CnpfLozy9)) and then export content by [adding and updating content](oxa:Eh6WvY9NT46Ds4lE3OqJ/7v9DUbI6Qm6f6vEd2anm "Adding and updating content") to your project. Using the export will create well-formed MyST Markdown and help show you the syntax.

````

## MyST Markdown Overview

MyST is a superset of [CommonMark](https://commonmark.org/) (a standard form of Markdown) and allows you to directly create “directives” and “roles” as extension points in the markup language.

- `directives` are block-level extension points, like callout panels, tabs, figures or embedded charts; and
- `roles` are inline extension points, for components like references, citations, or inline math.

MyST is influenced by [ReStructured Text (RST)](https://en.wikipedia.org/wiki/ReStructuredText) and [Sphinx](https://www.sphinx-doc.org/) – pulling on the nomenclature and introducing additional standards where appropriate.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/Kcuet5oJAehtlQ0bZhrA.2"}

### Directives

Directives are multi-line containers that include a type, arguments, options, and content. Examples include callout panels, figures, and equations. At its simplest, you can use directives using the following markup:

````text
```{note}
Here is a note!
```
````

The directive above is of type `note`, and doesn’t take any arguments and we didn’t provide any options. In addition to the directive name and the directive content, directives allow two other configuration points:

1) **directive arguments** - a list of words that come just after the `{directive_type}`

````text
```{directivename} arg1 arg2
My directive content.
```
````

2) **directive options** - a collection of key/value pairs that come just below `{directive_type}`

````text
```{directivename}
:key1: metadata1
:key2: metadata2

My directive content.
```
````

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/WpCB3pWods694yWRDXod.2"}

### Roles

Roles are inline extension points for things like abbreviations, references, citations, or interactive widgets. The syntax of a role is:

```text
My inline role: {abc}`my-role`.
```

Both roles and directives enclose the type information in braces (i.e. `{type}`). Roles enclose all inputs inside of the `` `backticks` ``. Some roles treat the input differently, for example, an abbreviation role, `{abbr}`, will parse the abbreviation title from inside of parentheses `` {abbr}`MyST (Markedly Structured Text)` ``.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/KctIE4pPkAGEYsTcLRkL.2"}

````{important}
**More Coming Soon! 🚧**

We are actively working on the documentation. Please check back soon or send us an email asking about this page: [support@curvenote.com](mailto:support@curvenote.com)

````

