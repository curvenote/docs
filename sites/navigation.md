---
title: Navigation
description: >-
  Set the navigation and action links on your Curvenote website, including being
  able to link to static content.
---

You can customize various aspects of your Curvenote site including links in the navigation top bar that are visible throughout your site. For example, in @fig:navigation-links, we see the links of `Home`, `Overview`, `Latest Research`, how to `Submit`, and about the `Team`.

:::{figure} images/navigation-links.png
:name: fig:navigation-links
:width: 100%
Navigation for a Curvenote [landing page](./landing-pages.md), which is defined for the entire site. Showing an example from [Elemental Microscopy](https://www.elementalmicroscopy.com/).
:::

## Navigation

The `site.nav` can include any number of links to pages in your site. The `title` will be shown in the navigation bar, and the `url` is where you will navigate when you click! Please make sure this matches a URL that is accessible on your site.

```yaml
version: 1
site:
  nav:
    - title: My PhD Thesis
      url: /phd
    - title: Nested Menu
      children:
        - title: My Menu Item
          url: /a-link
```

The `nav` is a list of these links, and it can also create nested drop-downs by providing a `children` list for top level navigations. If `children` are provided, the `url` field will not be used as the click will open the drop-down.

```{figure #fig-navigation} images/navigation.png
:align: center
:width: 90%

An example of nested drop-down navigation on the <https://colab.stanford.edu> lab group site.
```

## Including Static Files

You can include static files like PDF documents in the `public` folder in the root of your site; these will be deployed with the rest of your site. To include these in the action, put a `static: true`, which will ensure the PDF opens in a new tab and the URL is modified correctly. The `url` should point to your public folder.

```yaml
site:
  actions:
    - title: Download Thesis
      url: public/my_thesis.pdf
      static: true
```

For auto-generated PDF files from your content, you can build these with Curvenote.

## Footer

TODO: https://github.com/myst-ext/myst-ext-curvenote-web
