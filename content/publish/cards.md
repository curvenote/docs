---
title: Cards
description: Curvenote bundles many helpful directives and roles that allow you to interact with and add content from Curvenote's APIs to your Curvenote Site or Journal.
---

Curvenote bundles many helpful directives and roles that allow you to interact with and add content from Curvenote's APIs to your Curvenote Site or Journal.

## Person cards

The {myst:directive}`person` directive allows you to have a card for a person, who for example is part of a lab-group.

::::{tip} Example person card
:::{person}
:name: Rowan Cockett
:pronouns: he/him
:position: Co-founder & CEO
:orcid: 0000-0002-7859-8394
:email: rowan@curvenote.com
:github: rowanc1
:image: https://avatars.githubusercontent.com/u/913249?v=4

Rowan is the CEO and founder of Curvenote (https://curvenote.com), where we build tools to free science from static PDF documents such that the scientific community can share more interactive, reproducible, and richly-linked scientific content. Curvenote provides an all-in-one publishing platform for researchers, societies and institutes, with a focus on computational research.
:::
::::

## List articles

Add a listing of articles to any content page on your site by including the {myst:directive}`cn:articles` directive. This allows you to list all published articles for a site or an individual collection on your site and control how this is presented via options such as `layout`, `limit` and `pagination`.

For example, a listing for the SciPy 2023 abtracts collection:

```{figure} images/directives-articles-scipy-2023.png
:width: 80%
```

````{code}
```{cn:articles}
:venue: my-journal
:collection: 2023
:limit: 10
```
````

## List collections

Publications on Curvenote sites and Journals can be organized into {term}`collections <collection>` of articles. These are very flexible and can include different publication kinds, can represent year's, issues, special editions and can be nested.

Use the {myst:directive}`cn:collections` directive to add a listing of the collections available on a site, for example as used on the [SciPy Conference site](https://proceedings.scipy.org).

```{figure} images/directives-collections-scipy.png
:width: 80%
```

````{code}
```{cn:collections}
:venue: my-journal
:exclude: archive
```
````

## Additional directives

You can also add your own custom directives to Curvenote by using MyST's plugin mechanism, adding these to your local folder and `curvenote.yml` file as described in [MyST's plugin documentation](https://mystmd.org/guide/plugins).
