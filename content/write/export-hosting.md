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

You can deploy and integrate together projects across multiple sites.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/q9BSBxYXiUrncXgW9mDT.1"}

## Setting up a Curvenote Project

You can configure the domains your project will deploy to through the Curvenote site settings in your Project Settings. These configuration options will be synced when you `pull` or `clone` your project.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-Bs3wl8asleRr4Dwa8twF-v1.png
:name: HAEx4wWvHe
:align: center
:width: 70%

Curvenote Site Configuration for setting subdomains.
```

Once you have configured your project domains, you can save your article and click the publish button in the top right navigation. This will take a few seconds to publish the site, and then you can share your work using a blazing fast site with all of your content on it!

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-SroaOP628AAjDT0dKeIg-v1.png
:name: FRzrc9CrZT
:align: center
:width: 70%

Publish your Curvenote project in a single click.
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/8IcIHNGe4Rg0hJRRGbZv.2"}

## Configuration

When working through the command-line, domains can be added to your `site.domains` list in your `curvenote.yml`\:

```yaml
version: 1
site:
  domains:
    - your.curve.space
    - your-project.curve.space
```

When you call `curvenote deploy` each of these domains will have the latest changes. You can also put [Custom Domains](oxa:Eh6WvY9NT46Ds4lE3OqJ/Qn9rzCukuPlbwhKl8qA0 'Custom Domains') in here, although that requires more work to setup initially.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/uB4SVLB8htUPquRn4up0.1"}

## Team Domains

A team behaves the same way as a user, and can deploy sites to:

- `team.curve.space`; or
- `team-project.curve.space`

The security for deploying these is controlled by anyone that can create a project.
