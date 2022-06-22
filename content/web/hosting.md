---
title: Hosting on curve.space
description: ""
date: 2022-05-26T17:23:31.362Z
name: hosting
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/6xTpl07Az7VN9tdldJAt
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/PyDULH3a8HFB5GyVuj10.2"}

Curvenote provides a free domain for your sites, called curve.space, so that you can easily share your work with the world. There are two sub-domain patterns available that allow you to deploy multiple sites at the same time:

- `username.curve.space`; or
- `username-project.curve.space`

You can deploy and integrate together projects across multiple sites.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/8IcIHNGe4Rg0hJRRGbZv.1"}

## Configuration

Domains can be added to your `site.domains` list in your `curvenote.yml`:

```yaml
version: 1
site:
  domains:
    - your.curve.space
    - your-project.curve.space
```

When you call `curvenote deploy` each of these domains will have the latest changes. You can also put [Custom Domains](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 "Custom Domains") in here, although that requires more work to setup initially.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/uB4SVLB8htUPquRn4up0.1"}

## Team Domains

A team behaves the same way as a user, and can deploy sites to:

- `team.curve.space`; or
- `team-project.curve.space`

The security for deploying these is controlled by anyone that can create a project.

