---
title: Site structure
description: How a Curvenote site is laid out in a repository.
---

# Site structure

A Curvenote site is a Git repository with a `myst.yml` at the root
that declares a `project` (the content) and a `site` (how it's
rendered and navigated). Everything else — markdown files,
notebooks, images, citations — is referenced from there.

## The minimum viable site

```yaml
version: 1
project:
  title: My Site
  toc:
    - file: index.md
site:
  template: book-theme
```

That's enough to build. `index.md` becomes the landing page,
`book-theme` provides the layout, and the site renders at the
Curvenote subdomain Curvenote assigns when you
[connect the repo](/platform/getting-started/connect-repo).

## Layout conventions

Curvenote doesn't enforce a directory layout, but the conventional
shape is:

```text
.
├── myst.yml              # site + project config
├── index.md              # landing page
├── articles/             # long-form content
│   ├── first-paper.md
│   └── second-paper.ipynb
├── figures/              # generated or static figures
├── public/               # logo, favicon, OG images
│   ├── logo.svg
│   └── favicon.ico
├── references.bib        # bibliography
└── .gitignore            # ignore _build/
```

The `_build/` folder is created by local builds and should always
be in `.gitignore` — it's a cache, not source.

## The `project` block

`project` describes the *content*: what files exist, what their
relationships are, and what metadata describes the work as a whole.

```yaml
project:
  id: 7558cd75-224b-4ada-8915-810cd39c63a5  # the work key
  title: My Site
  description: One-line description for social cards.
  keywords: [example, scientific, publishing]
  authors:
    - name: Jane Doe
      orcid: 0000-0002-1234-5678
      affiliations: [University of Example]
  github: https://github.com/example/repo
  copyright: Example Lab 2026
  toc:
    - file: index.md
    - title: Articles
      children:
        - file: articles/first-paper.md
        - file: articles/second-paper.ipynb
```

The `id` is the **work key**. It's generated automatically the first
time you push a version (`curvenote works push`) and binds the
repository to a stable work record on the platform. Don't change it
by hand.

`toc` is the table of contents — it determines the navigation order
and also tells the build which files are part of the project. Files
not in `toc` are not built.

## The `site` block

`site` describes *how the project is rendered*: theme, top-level
navigation, custom domain, actions in the header.

```yaml
site:
  template: book-theme
  title: My Site
  options:
    logo: public/logo.svg
    favicon: public/favicon.ico
    analytics_google: G-XXXXXXX
  nav:
    - title: Articles
      url: /articles
    - title: About
      url: /about
  actions:
    - title: Submit
      url: https://example.com/submit
  domains:
    - docs.example.com
```

- **`template`** picks the theme. `book-theme` is the default.
- **`options`** is theme-specific and is documented per theme; see
  [Themes and branding](./themes.md).
- **`nav`** is the top navigation bar. Each entry is a title and a
  URL.
- **`actions`** is the right-hand action buttons (sign in, submit,
  download).
- **`domains`** is the list of custom domains; see
  [Custom domains](./domains.md).

## Multi-project sites

A single site can compose multiple projects — each with its own
`myst.yml` in a sub-folder — by listing them under `site.projects`:

```yaml
site:
  template: book-theme
  projects:
    - path: docs
      slug: docs
    - path: blog
      slug: blog
```

Use this when sections need to evolve independently (different
authors, different release cadence, different navigation).

## What gets built

The build runs `myst build` over every file in every project's
`toc`. The output is HTML for the web site plus the cached
intermediate AST for things like search and downloads. Files not
referenced from any `toc` are ignored.

To preview the same build locally:

```bash
curvenote start
```

The local server runs on `http://localhost:3000` and rebuilds on
file change.

## Next

- [Themes and branding](./themes.md) — picking a template and
  customizing it.
- [Custom domains](./domains.md) — serving the site from your own
  domain.
- [Build and deploy](./deploy.md) — the platform build pipeline.
