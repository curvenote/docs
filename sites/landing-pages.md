---
title: Landing pages
description: ''
---

The landing pages of your site define what happens on the main page as well as other supporting information. For example, a journal might include submission instructions, policies, and editorial staff; for a lab-group this might be the research that your lab group does, links to the people that are a part of your lab. Your landing pages include all of the content that are not {term}`works <work>` (articles, blogs, notebooks, seminars, etc.) submitted to your {term}`Site`.

The landing pages also define the look and feel for your entire site, and you can use the frontmatter of your landing pages to can define `logo`, `favicon`, and `dark_logo` etc. for your site. [{scienceicon}`curvenote`](https://curvenote.com)

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

:::{warning} Alpha Feature
This feature is in alpha and may change in the future.
:::

<!--

+++ { "class": "col-screen" }

:::{hero} Welcome to QIIME 2™
:tagline: a microbiome multi-omics bioinformatics and data science platform
:cta-url: https://develop.qiime2.org
:cta-title: Start Developing
:cta-url-2: https://library.qiime2.org
:cta-title-2: Discover Extensions
:background-color: #fff
:background-image: ./images/banner-example.png
:text-color: #000
:padding: 64px 24px
:::

+++ { "part": "footer" }

[{scienceicon}`website`](https://qiime2.org)
[{scienceicon}`twitter`](https://x.com/qiime2)
[{scienceicon}`github`](https://github.com/qiime2)
[{scienceicon}`discourse`](https://forum.qiime2.org)

:::{footer}
:logo: qiime2.svg
:logo-dark: qiime2.svg
:logo-title: qiime2
:logo-url: https://curvenote.com
:tagline: a microbiome multi-omics bioinformatics and data science platform
:background-color: #666
:text-color: #eee

[{scienceicon}`website`](https://qiime2.org)
[{scienceicon}`twitter`](https://x.com/qiime2)
[{scienceicon}`github`](https://github.com/qiime2)
[{scienceicon}`discourse`](https://forum.qiime2.org)

- - [Learn](https://docs.qiime2.org)
  - [Discover](https://library.qiime2.org)
  - [Extend](https://develop.qiime2.org)
  - [Interact](https://view.qiime2.org)
  - [Get Help](https://forum.qiime2.org)
- - [Contributors](https://github.com/orgs/qiime2/people)
  - [The Caporaso Lab](https://cap-lab.bio/)
  - [Northern Arizona University](https://nau.edu/)

:::

-->
