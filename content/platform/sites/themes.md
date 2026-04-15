---
title: Themes and branding
description: Pick a theme and brand a Curvenote site.
---

# Themes and branding

A Curvenote site is rendered by a **template** (the technical name
for a theme). The default is `book-theme`, which gives you a
navigation sidebar, breadcrumbs, search, and a content area suited
to long-form scientific writing.

## Setting the template

```yaml
site:
  template: book-theme
```

Other templates are available for journals and venues; see the
[template registry](https://github.com/curvenote/templates) for the
current list. Any [MyST template](https://mystmd.org) works —
Curvenote uses the same template system.

## Logo, favicon, social cards

Put brand assets in `public/` and reference them from
`site.options`:

```yaml
site:
  options:
    logo: public/logo.svg
    logo_text: My Site
    favicon: public/favicon.ico
```

- **`logo`** appears in the header. SVG is preferred; PNG works.
- **`logo_text`** is a fallback text label rendered next to (or
  instead of) the logo.
- **`favicon`** is the browser tab icon.

For social previews (Open Graph / Twitter cards), Curvenote
auto-generates a card per page from the page's frontmatter title
and description. To override, set a custom image in the page
frontmatter.

## Theme options

`site.options` is template-specific. The full set for `book-theme`
includes:

```yaml
site:
  options:
    logo: public/logo.svg
    logo_text: My Site
    favicon: public/favicon.ico
    twitter: handle
    hide_authors: true
    analytics_google: G-XXXXXXX
    analytics_plausible: example.com
```

Theme options are documented in the template's own README; see the
[`book-theme` repo](https://github.com/jupyter-book/book-theme).

## Top navigation and actions

The header is split between **nav** (left, links) and **actions**
(right, buttons):

```yaml
site:
  nav:
    - title: Articles
      url: /articles
    - title: About
      url: /about
  actions:
    - title: Submit
      url: https://example.com/submit
```

Nav links can point to any path in the site or to an external URL.

## Custom CSS and components

For brand work that goes beyond options — custom typography, custom
components, page-level overrides — you have two options:

1. **Theme options** that the template already exposes (preferred).
2. **A custom plugin** that adds directives or transforms. See
   [Extend / Custom MyST directives](/extend/directives).

For full custom layouts, fork a template from
[curvenote/templates](https://github.com/curvenote/templates) and
set `site.template` to point at your fork.

## Next

- [Custom domains](./domains.md) — serve the branded site from your
  own domain.
- [Build and deploy](./deploy.md) — how the platform builds and
  publishes.
