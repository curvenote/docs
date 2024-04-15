---
title: Navigation and Actions
description: >-
  Set the navigation and action links on your Curvenote website, including being
  able to link to static content.
subject: How To
venue: MyST Websites
tags: []
thumbnail: thumbnails/navigation.png
---

You can customize various aspects of your Curvenote site including:

- `actions` - in the top right of the default template, these are visible throughout your site.
- `nav` - links in the navigation top bar that are visible throughout your site.
- `logo` - the logo and logoText, see [Logo & branding](./logo-and-branding.md) for more.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-zMkH2pW99k4pjkNGDzXE-v1.png
:name: oJsO3gxHdB
:align: center
:width: 100%

Parts of a Curvenote site that you can customize using the default template.
```

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

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-ANCBsdK2FJoQ0RPvbfqB-v1.png
:name: TU1n1D5dnc
:align: center
:width: 90%

An example of nested drop-down navigation on the <https://transform.softwareunderground.org/> site.
```

# Actions

Actions are buttons that appear on the right of the navigation bar. By default, a single “Learn More” action is added to new curvenote sites. You can add, customize and remove actions by editing the `actions:` list in the `site:` section of the root `curvenote.yml` file.

```yaml
version: 1
site:
  actions:
    - title: Learn More
      url: https://docs.curvenote.com/web
```

⚒️ To Customize the existing action, simply update the `title:` and `url:` fields in place

```yaml
version: 1
site:
  actions:
    - title: Curvenote on GitHub
      url: https://gihub.com/curvenote
```

⚒️ To add more actions, add additional items to the YAML list, each with their own `title:` and `url:` fields

```yaml
version: 1
site:
  actions:
    - title: GitHub
      url: https://gihub.com/curvenote
    - title: Sign Up
      url: https://curvenote.com/signup
```

🛠️ To remove all actions, set the field to an empty list `actions: []`

```yaml
version: 1
site:
  actions: []
```

# Including Static Files

You can include static files like PDF documents in the `public` folder in the root of your site; these will be deployed with the rest of your site. To include these in the action, put a `static: true`, which will ensure the PDF opens in a new tab and the URL is modified correctly. The `url` should point to your public folder.

```yaml
site:
  actions:
    - title: Download Thesis
      url: public/my_thesis.pdf
      static: true
```

For auto-generated PDF files from your content, you can build these with Curvenote.
