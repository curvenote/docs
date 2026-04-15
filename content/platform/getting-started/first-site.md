---
title: Publish your first site
description: From a fresh repo to a public Curvenote site.
---

# Publish your first site

This page walks the full happy path: sign in, connect a repository,
verify the build, customize the site, and version a first work.
Allow ten minutes the first time.

For the equivalent terminal walkthrough, see
[CLI tutorial](/cli/tutorial). The two paths are interchangeable —
the Platform pipeline runs the same MyST build the CLI runs.

## 1. Sign in

Go to your Curvenote deployment and sign in with the SCM account
that owns the repository you'll publish from. See
[Sign in and link accounts](./sign-in.md) for the provider list.

If you don't have a repository yet, sign in with anything — you
can fork a starter template in the next step.

## 2. Connect a repository

From the dashboard, click **Connect a repository** and follow the
[Connect a repository](./connect-repo.md) flow. If you fork a
starter, Curvenote handles steps 2 and 3 for you in one click.

When the first build finishes, Curvenote opens the preview URL.
Verify that:

- The landing page renders and matches your local preview.
- The navigation reflects your `myst.yml` `toc`.
- The footer shows the commit SHA you just pushed.

If any of those are off, see
[Troubleshooting on Connect a repository](./connect-repo.md#troubleshooting).

## 3. Customize the site

Open `myst.yml` in your repo and edit the `site` block:

```yaml
site:
  template: book-theme
  title: My First Curvenote Site
  options:
    logo: public/logo.svg
    favicon: public/favicon.ico
  nav:
    - title: Home
      url: /
    - title: About
      url: /about
```

Commit and push. The site rebuilds automatically and the new
branding appears at the preview URL.

For the full set of options see [Themes and branding](/platform/sites/themes)
and the [Configuration reference](/cli/config).

## 4. Run checks locally (optional)

Before your next push, run the same checks the platform runs, on
your machine:

```bash
npm install -g curvenote
curvenote check
```

The output groups results by category (metadata, links, license,
accessibility, …). Fix anything red, push, and the platform check
status turns green. See [Running checks](/platform/checks/running).

## 5. Version your first work

The site is live, but the *work* doesn't have a citable version yet.
From the dashboard, open the work, click **Versions**, and click
**Push new version**. Curvenote freezes the current state of the
repo into an immutable, individually addressable version.

The CLI equivalent:

```bash
curvenote works push
```

Which will:

- Use the project's `id` (key) from `myst.yml` — generates one if
  missing.
- Run a clean rebuild.
- Upload the build to the CDN.
- Create a new work, or a new version of an existing work.

See [Versioning a work](/platform/works/versioning) for the full
lifecycle, and [DOIs and archival](/platform/works/dois) for how to
mint a DOI on a version.

## 6. (Optional) Connect a custom domain

If you want the site to live at your own domain instead of a
Curvenote subdomain, see
[Custom domains](/platform/sites/domains).

## You're done

From here:

- Add content to your repo. Push. The site rebuilds.
- Cut a new version when you want a citable snapshot.
- Submit the work to a [journal](/platform/journals/) when you're
  ready for editorial review.
- If you maintain the journal, see
  [Setting up a journal](/platform/journals/setup).

## See also

- [Sites → Build and deploy](/platform/sites/deploy)
- [Works and versions → Concepts](/platform/works/concepts)
- [Checks → Running checks](/platform/checks/running)
- [CLI tutorial](/cli/tutorial) — the same flow, terminal-driven.
