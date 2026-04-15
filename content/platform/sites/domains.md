---
title: Custom domains
description: Serve a Curvenote site from your own domain.
---

# Custom domains

Every connected site gets a default Curvenote subdomain (e.g.
`my-site.curve.space`). For a production publication you'll usually
want your own domain — `docs.example.com`, `journal.example.org`,
etc. Curvenote terminates TLS, serves through a CDN, and renews
certificates automatically.

## Add a custom domain

1. Open **Site settings → Domains** in the dashboard.
2. Click **Add domain** and enter the FQDN you want to use.
3. Curvenote shows you the DNS record you need to create:
   - For an apex domain: an `ALIAS` / `ANAME` record (or
     provider-specific equivalent).
   - For a subdomain: a `CNAME` record pointing to the Curvenote
     ingress hostname.
4. Add the record at your DNS provider.
5. Click **Verify**. Curvenote checks the record, provisions a
   certificate via Let's Encrypt, and starts serving the site at
   the new domain. This usually takes under a minute once DNS
   propagates.

## Declaring domains in `myst.yml`

Once verified, list the domain in `site.domains` so the build knows
the canonical host:

```yaml
site:
  domains:
    - docs.example.com
```

This is what populates absolute URLs in metadata, sitemap, and
social cards. The first entry in the list is the canonical domain.

## Multiple domains

A site can serve from multiple domains — useful for migrations or
for an alias like `www.example.com` alongside `example.com`. List
them all in `site.domains`. The first is canonical; the rest 301
to it.

## TLS and renewal

Certificates are issued by Let's Encrypt, with auto-renewal. You
don't manage cert files. If a renewal fails (DNS broke, domain
lapsed), Curvenote surfaces a warning in **Site settings → Domains**
and emails the org owner.

## Removing a domain

Open **Site settings → Domains**, click the domain, click **Remove**.
The Curvenote subdomain keeps working. Remove the DNS record at your
provider as well, or visitors hitting the old hostname will see a
DNS error.

## Troubleshooting

- **"Verification failed"** — DNS may not have propagated yet. Wait
  a few minutes and click **Verify** again.
- **TLS errors after a working period** — a renewal failed. Open
  **Site settings → Domains** for the specific error.
- **Apex domain on a provider that only supports CNAME** — use the
  provider's `ALIAS` / `ANAME` flavor (Cloudflare, Route 53, DNSimple,
  Netlify DNS all support this).

## Next

- [Build and deploy](./deploy.md) — what triggers a deploy and how
  builds map to domains.
