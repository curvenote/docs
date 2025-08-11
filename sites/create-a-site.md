---
title: How to Set Up a Publishing Site in Curvenote
short_title: Create a Site
---

:::{tip} Objective
Get started creating a publishing destination for your articles, lab notebooks, or group collections.
:::

## Steps to Set Up a Site

:::{important} Before you start
Make sure you have:

- A Curvenote account and access to the [Curvenote CLI](../cli/index.md)
- Access to an existing site (or create one via the web admin interface)
- A configured project (`curvenote.yml` file) if publishing from GitHub or locally
  :::

### 1. Create a Site (via Web Admin)

Creating a new site must currently be done through the web admin interface.

- Choose a title and subdomain (e.g., `my-lab.curve.space`)
- Set the site visibility (public or private)
- Define the organization or group that owns the site

_Coming Soon: CLI-based site creation is planned to make this easier for new users._

### 2. Set a Landing Page or Featured Work

Once the site exists, site administrators can set a "landing page" or featured work. This may be configured via:

- The web admin interface (recommended)
- CLI tools (if supported)

The landing page gives visitors an entry point to your site’s most important content.

### 3. Organize Your Content (Optional, CLI or Git-based Workflows)

If you are managing content locally (e.g., in GitHub), organize your files into logical directories:

- **Articles:** `articles/`
- **Figures/Methods:** `components/`
- **Landing page:** `index.md`

For sites that accept community contributions or external submissions, this structure will be handled post-submission.

### 4. Add Metadata and Content Types (Kinds)

Ensure that each content file includes a frontmatter block with relevant metadata:

```yaml
---
title: 'An Advanced Microscopy Study'
authors:
  - name: Dr. Lee
kind: article
---
```

This metadata supports automated checks, collection assignment, and proper formatting.

### 5. Submit Content to a Site and Collection

Use the CLI to associate your content with a site and collection:

```bash
curvenote submit
```

You’ll be prompted to:

- Select an existing site
- Choose a collection (e.g., "Lab Articles")

This prepares your content for publishing and notifies site administrators.

### 6. Push Changes to the Server (Optional)

To sync your draft content to the server for internal review:

```bash
curvenote push
```

This allows collaborators to preview your work, but does not make it publicly visible.

### 7. Run Structural Checks (Optional)

To verify your content is valid before publishing:

```bash
curvenote check
```

This will run structural and metadata checks and highlight any issues.

> 💡 **Tip:** For more details on how to run a structural check, visit this page (link)

### 8. Publish Content (Admin Action)

Publishing makes submitted content live on the site:

```bash
curvenote submission publish
```

Only site admins can publish submitted content. Once published:

- Content appears on the site
- DOI, metadata, and links are activated

## What Happens Next?

Once published, you can:

- Share links to your articles or site homepage
- Make updates and re-publish (each update is versioned)
- Embed content elsewhere (figures, notebooks, methods)
