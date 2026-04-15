---
title: What is a work
description: The citable unit in Curvenote and its relationship to sites and versions.
---

# What is a work

A **work** is the citable unit in Curvenote. It's whatever you want
to attach a stable identity, a version history, and (optionally) a
DOI to: an article, a thesis, a notebook, a dataset, a report.

A work is conceptually distinct from a site, even though both are
backed by the same Git repository.

## Work vs. site vs. version

| Concept | What it is | Lifetime |
| --- | --- | --- |
| **Site** | The rendered web presence. URLs, theme, navigation. | Continuously updated. Tracks the latest commit on the tracked branch. |
| **Work** | The citable thing. Has a stable ID, an author list, a license, a DOI. | Permanent. Lives forever once created. |
| **Version** | An immutable snapshot of a work at a point in time. | Permanent. Each version is individually citable. |

A single repository typically produces *one site* and *one work*.
The site changes constantly; the work accumulates versions.

## The work key

Every work has a stable identifier called the **work key**. It
lives in `myst.yml` as `project.id`:

```yaml
project:
  id: 7558cd75-224b-4ada-8915-810cd39c63a5
  title: My Article
```

The key is generated automatically the first time you push a
version (`curvenote works push`). After that, every push uses the
same key and adds a new version to the same work.

:::{warning} Don't change the work key by hand
Changing `project.id` after the first push detaches the repo from
its work history and creates a new (empty) work. If you really need
to re-key, talk to support first.
:::

## Public vs. private works

Works default to private — visible only to the owning user or
organization. Pushing with `--public` (or flipping the toggle in
the dashboard) makes the work and all its versions visible to
anyone with the URL.

From the CLI:

```bash
curvenote works push --public
```

A private work can become public; a public work cannot become
private without removing the published versions.

## Listing works

From the CLI:

```bash
curvenote works list
```

From the dashboard, use the **Works** tab on your account or org.

## How a work relates to a journal

A work can be **submitted** to a journal (venue) for editorial
review. The submission references a specific version of the work
— versioning happens before submission, not after. See
[Journals → Submission workflow](/platform/journals/submission-workflow).

## Next

- [Versioning a work](./versioning.md) — the version lifecycle.
- [DOIs and archival](./dois.md) — minting a DOI on a version.
