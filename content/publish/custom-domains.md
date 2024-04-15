---
title: Custom Domains
description: ''
subject: How To
venue: MyST Websites
tags: []
---

You can use Curvenote to host any custom domain that you own, for example a personal blog, lab-website, or journal. Note that custom domains are a feature of the Curvenote Pro plan (see [plans](https://curvenote.com/pricing)).

## Update DNS

🛠️ Navigate to your domain’s DNS configuration, and add the following `CNAME` record:

```{list-table}
:header-rows: 1
:name: YoZ2KCweNO
* - Host name
  - Type
  - TTL
  - Data
* - subdomain.example.com
  - CNAME
  - 1 hour
  - ssh.curve.space
```

:::{note}
If you visit <https://ssh.curve.space> you will see a custom landing page that points back to this documentation, this is not what will be shown on your site!
:::

🛠️ Add this domain to your site configuration under the `domains:` list. You can also keep the original curve.space domains in there if you wish.

```yaml
site:
  domains:
    - your.curve.space
    - subdomain.example.com
```

Once you have completed that step, send [support@curvenote.com](mailto:support@curvenote.com) an email with the domain and we will ensure it is setup on our side. This will be automated in the future! 🤖

🛠️ Email [support@curvenote.com](mailto:support@curvenote.com) and include:

- domain name (e.g. `subdomain.example.com`)
- Curvenote username or team name that owns this domain (e.g. `rowanc1`)

🛠️ Redeploy your site using `curvenote deploy`

You will not be able to complete this step if the domain is not configured by us! Once successful, you will see the domain(s) that you are deploying to in the list, and check that your domain is now visible at your custom subdomain.

## Naked Domains

At this time Curvenote does not support naked domains (e.g. `example.com`), instead you can redirect your naked domain to a `www` subdomain and then point that to `ssh.curve.space` using the `CNAME` method above. For Google Domains, you can see their [documentation here](https://support.google.com/a/answer/2518373?hl=en).
