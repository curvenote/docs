---
title: How to Set Up a Publishing Site in Curvenote
short_title: Create a Site
---



# Create a Site

**Goal**
Create a publishing destination for your articles, lab notebooks, or group collections.
:::

## Quick Checklist

- Have a Curvenote account & CLI installed
- Access to create a site (web admin)
- Configure your project (curvenote.yml)
- Organize local content (if using Git/GitHub)
- Add metadata to each file
- Submit content to a site & collection
- Push changes for internal review (optional)
- Run checks before publishing (optional)
- Publish (admin only)

## Workflow at a Glance

```mermaid
flowchart TD
  A[1. Create Site (web admin)] --> B[2. Set Landing Page]
  B --> C[3. Organize Content (optional)]
  C --> D[4. Add Metadata]
  D --> E[5. Submit Content]
  E --> F[6. Push Changes (optional)]
  F --> G[7. Run Checks (optional)]
  G --> H[8. Publish (admin only)]
  H --> I[Site Live!]
  
  style A fill:#e1f5fe
  style I fill:#c8e6c9
```

 ## Before You Begin
:::{important} Make sure you have:

- A Curvenote account and Curvenote CLI installed
- Access to an existing site (or permission to create one via the web admin interface)
- A configured project (curvenote.yml) if publishing from GitHub or locally
:::


### 1. Create a Site (via Web Admin)

Currently, new sites must be created through the web admin interface.

- Choose a title and subdomain (e.g., `my-lab.curve.space`)
- Set the site visibility (public or private)
- Define the organization or group that owns the site

_Coming Soon: Site creation directly from the CLI._

### 2. Set a Landing Page or Featured Work

Once the site exists, an admin can define a “landing page” — the main entry point for visitors.

- Recommended: Set this via the web admin interface
- CLI support available for some workflows

### 3. Organize Your Content (Optional, CLI or Git-based Workflows)

If you are managing content locally (e.g., in GitHub), organize your files into logical directories:

- **Full Research Articles:** `articles/`
- **Figures/Methods:** `components/`
- **Landing page:** `index.md`

For sites with community submissions, content organization happens after submission.

### 4. Add Metadata 

Each content file should have frontmatter with key details:

```yaml
---
title: 'An Advanced Microscopy Study'
authors:
  - name: Dr. Lee
kind: article
---
```

Metadata enables automated checks, collection assignment, and proper formatting. See (metadata.md) for more details.

### 5. Submit Content to a Site and Collection

From your local project, run:

```bash
curvenote submit <site>
```

You’ll be prompted to:

- Select an existing site
- Choose a collection (e.g., "Lab Articles")

This prepares your content for publishing and notifies site administrators.

### 6. Push Changes (Optional: Internal Review)

```bash
curvenote push
```

This allows collaborators to preview your work, but does not make it publicly visible.

### 7. Run Checks (Optional but Recommended)
Run structural and metadata checks to catch errors before publishing:

```bash
curvenote check <site>
```

Include the site (venue) ID so the check runs in the correct publishing context. This ensures the content is validated against the specific site’s configuration and collections.

> 💡 **Tip:** For step-by-step instructions on running a structural check and resolving any issues, see [Integrity Checks](https://curvenote.com/docs/publish/integrity-checks)

### 8. Publish Content (Admin Action)

Publishing makes submitted content live on the site:

```bash
curvenote submission publish <site>
```

Only site admins can publish. Once published:

- Content appears on the site
- DOI, metadata, and links are activated

## After Publishing

- Share links to your articles or site homepage
- Update and re-publish (each update is tracked)
- Embed individual figures, notebooks, or methods in other sites and tools.

## Related Guides

- [Install & Authenticate the Curvenote CLI](install-cli)
- [Add Metadata to Your Content](/metadata)
- [Push, Submit, and Publish Content](publish-article)
- [Run Integrity Checks](https://curvenote.com/docs/publish/integrity-checks)
- [Manage Collections in a Site](https://curvenote.com/docs/publish/collections)
