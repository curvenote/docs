---
title: Navigation and actions
description: ""
date: 2022-05-27T18:05:50.609Z
name: navigation
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/jrOoppptNKmkpA5FmGTU
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/6nz3lElOZyhqLbFRaTDE.1"}


```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-zMkH2pW99k4pjkNGDzXE-v1.png
:name: oJsO3gxHdB
:align: center
:width: 100%
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/MQYAixblESzHq8PyyKTq.2"}

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

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/cISSAvW2CzNLyftrwutt.2"}

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

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/KctIE4pPkAGEYsTcLRkL.2"}

````{important}
**More Coming Soon! 🚧**

We are actively working on the documentation. Please check back soon or send us an email asking about this page: [support@curvenote.com](mailto:support@curvenote.com)

````

