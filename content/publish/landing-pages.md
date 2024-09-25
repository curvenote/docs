---
title: Landing pages
description: ''
tags: []
---

The landing pages of your site define what happens on the main page as well as other supporting information. For example, a journal might include submission instructions, policies, and editorial staff; for a lab-group this might be the research that your lab group does, links to the people that are a part of your lab. Your landing pages include all of the content that are not {term}`works <work>` (articles, blogs, notebooks, seminars, etc.) submitted to your {term}`venue`.

The landing pages also define the look and feel for your entire site, and you can use the frontmatter of your landing pages to can define `logo`, `favicon`, and `dark_logo` etc. for your site.

```yaml
---
site:
  logo: my_logo.png
  logo_dark: my_dark_logo.png
  favicon: favicon.ico
---
```

:::{figure} ./images/scipy-branding.png
:label: fig:scipy-branding
The logo and favicon for [SciPy Proceedings](https://proceedings.scipy.org)
:::

:::{warning} Journal & Lab Group Customers
For those who are using the Journal and Lab Group hosting products from Curvenote, portion of this guide may require Curvenote to align your branding manually. We are working to automate this.
:::

## Hero unit

TODO: https://github.com/myst-ext/myst-ext-curvenote-web
