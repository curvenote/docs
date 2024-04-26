---
title: Curvenote Directives & Roles
short_title: Directives & Roles
tags:
  - writing
keywords: []
---

The Curvenote CLI ships with a number of additional MyST Markdown directives and roles bundled, these extensions allow you to interact with and add content from Curvenote's APIs to your Curvenote Site or Journal, and are documented below.

```{tip} Adding your own custom directives and roles
:class: dropdown
You can also add your own custom directives to Curvenote by using MyST's plugin mechanism, adding these to your local folder and `curvenote.yml` file as described in [MyST's plugin documentation](https://mystmd.org/guide/plugins).
```

## Directives

### List Articles

Add a listing of articles to any content page on your site by including the `cn:articles` directive. This allows you to list all published articles for a site or an individual collection on your site and control how this is presented via options such as `layout`, `limit` and `pagination`.

For example, a listing for the SciPy 2023 abtracts collection:

```{figure} images/directives-articles-scipy-2023.png
:width: 80%
```

#### Example Usage

````{code}
```{cn:articles}
:venue: my-journal
:collection: 2023
:limit: 10
````

#### Reference

```{myst:directive} cn:articles

```

### List Collections

Publications on Curvenote sites and Journals can be organized into collections of articles. These are very flexible and can include different publication kinds, can represent year's, issues, special editions and can be nested.

Use the `cn:collection` directive to add a listing of the collections available on a site, for example as used on the [SciPy Conference site](https://proceedings.scipy.org).

```{figure} images/directives-collections-scipy.png
:width: 80%
```

#### Example Usage

````{code}
```{cn:collections}
:venue: my-journal
:exclude: archive
````

#### Reference

```{myst:directive} cn:collections

```
