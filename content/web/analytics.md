---
title: Analytics
description: ""
date: 2022-05-31T18:30:01.272Z
authors: []
name: analytics
oxa: oxa:Eh6WvY9NT46Ds4lE3OqJ/YgsyF5mf8RgZQm93BEhO
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/1VUWDTqWxgNM3GdYykNl.1"}

There are no tracking cookies added to a curve.space site by default, however, you may want to know more about basic analytics for your domain. There are two analytics tracking codes that curve.space currently supports:

1. [Google Analytics](https://marketingplatform.google.com/about/analytics/); and
2. [Plausible](https://plausible.io/), which is privacy-friendly alternative to Google.

These are set using the `analytics:` part of your site configuration using either a `google:` or a `plausible:` key.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/HQFoCDoAkiHDXcZzOXwU.1"}

## Google Analytics

Use the `site.analytics.google` configuration, with the contents being your **Measurement ID** (G-XXXXXX) or **Tracking ID** (UA-XXXXXX).

```yaml
version: 1
site:
  analytics:
    google: UA-XXXXX # Measurement ID or Tracking ID
```

See [Google Analytics docs](https://developers.google.com/analytics/devguides/collection/gtagjs) for more information on how to find this Measurement ID.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/71CjBa2HhH2jhS2DfOU8.1"}

## Plausible

Use the `site.analytics.plausible` configuration, with the contents being the **domain** you are tracking.

```yaml
version: 1
site:
  analytics:
    plausible: docs.curvenote.com # Domain(s) to track
```

See [Plausible docs](https://plausible.io/docs/plausible-script) for more information on how to find the domain. Note, you only copy in the contents of: `data-domain="COPY_THIS"`, which can be a comma-separated list for multiple domains.

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/LbOcLrB9Ig60HvxJfz5L.1"}

## Testing your integration

Run `curvenote start` and view the page source. The analytics section should be in the `<head>` section of the HTML, you should also start to see real-time tracking in your dashboard.

Deploy your site using `curvenote deploy` to have these be integrated into your live site.

