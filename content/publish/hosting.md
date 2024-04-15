---
title: Hosting your Website
description: ''
subject: MyST Websites
tags: []
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/PyDULH3a8HFB5GyVuj10.3"}

Curvenote provides a free domain for your sites, on a `*.curve.space` subdomain, so that you can easily share your work. There are two sub-domain patterns available that allow you to deploy multiple sites at the same time:

- `username.curve.space`; or
- `username-project.curve.space`

## Configuration

Domains can be added to your `site.domains` list in your `curvenote.yml`\:

```yaml
version: 1
site:
  domains:
    - your.curve.space
    - your-project.curve.space
```

When you call `curvenote deploy` each of these domains will have the latest changes. You can also put [Custom Domains](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 'Custom Domains') in here, although you will need to contact support@curvenote.com to the configuration for your custom domain.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/uB4SVLB8htUPquRn4up0.1"}

## Team Domains

A team behaves the same way as a user, and can deploy sites to:

- `team.curve.space`; or
- `team-project.curve.space`

The security for deploying these is controlled by anyone that can create a project.

## Deployment

Once your `curvenote.yml` is correctly configured you can deploy from the command line using:

```bash
curvenote deploy
```

and following the prompts.
