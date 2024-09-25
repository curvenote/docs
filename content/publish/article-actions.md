---
title: Designing your articles
---

## Actions

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
