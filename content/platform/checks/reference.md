---
title: Check types reference
description: The standard check catalog shipped with Curvenote.
---

# Check types reference

Curvenote checks are split between two packages:

- **`@curvenote/check-definitions`** — declarative definitions
  (id, title, description, tags, severity).
- **`@curvenote/check-implementations`** — the executable
  validators that produce results.

A check's full identity is its definition plus its implementation.
The runner combines them at execution time — see
[`runChecks`](https://github.com/curvenote/curvenote/blob/main/packages/curvenote-cli/src/check/runner.ts).

## Categories

Checks are organized into categories by their first tag. The
standard categories are:

### Metadata

Validate project-level metadata required for citation, DOI minting,
and discovery.

- **Has a title** — `project.title` is set and non-empty.
- **Has at least one author** — `project.authors` contains a name.
- **Has a license** — `project.license` is a recognized SPDX
  identifier (e.g. `CC-BY-4.0`).
- **Has an abstract** — `project.description` or a frontmatter
  abstract is set.
- **Has keywords** — `project.keywords` is non-empty *(optional)*.
- **Authors have ORCIDs** — each author has an `orcid` field
  *(optional, recommended for journal submission)*.
- **Authors have affiliations** — each author has at least one
  affiliation *(optional)*.

### Links

Validate that links resolve.

- **No broken internal links** — every internal link target exists.
- **No broken cross-references** — every `:ref:` and `[](#anchor)`
  resolves.
- **External links resolve** — every external URL returns 2xx
  *(optional, slow)*.

### Citations

- **All citations resolved** — every `[@key]` resolves to a
  bibliography entry.
- **No unused references** — every entry in the bibliography is
  cited at least once *(optional)*.
- **Citations have DOIs** — every cited reference has a DOI
  *(optional)*.

### Figures

- **Figures have alt text** — every figure has an `alt` attribute
  for accessibility.
- **Figures have captions** — every figure has a caption.
- **Figure files exist** — every figure src resolves.

### Notebooks

- **Notebooks executed cleanly** — no error outputs.
- **Notebook kernels declared** — every notebook has a kernelspec.

### Structure

- **TOC files exist** — every file referenced in `myst.yml` toc
  exists on disk.
- **No orphaned files** — every markdown/notebook file is reachable
  from the toc *(optional)*.

## Reading a result

A check result has the shape:

```ts
{
  id: 'metadata.has-license',
  title: 'Has a license',
  status: 'pass' | 'fail' | 'error',
  optional: false,
  message?: string,        // short human-readable message
  file?: string,           // file path the failure is in
  position?: { start: { line, column } },
  category: 'metadata',
  description: '...',
}
```

The runner produces one result per check (or per failure, for
checks that report multiple findings).

## Overriding check behavior in a journal

When a check runs as part of a journal submission, the journal can
override per-check metadata: change the category, description,
severity, or set `optional: true`. This lets a venue tighten or
relax the standard set without forking the whole package. See
[Submission workflow](/platform/journals/submission-workflow).

## Source

- Definitions: [`packages/check-definitions/`](https://github.com/curvenote/curvenote/tree/main/packages/check-definitions)
- Implementations: [`packages/check-implementations/`](https://github.com/curvenote/curvenote/tree/main/packages/check-implementations)
- Runner: [`packages/curvenote-cli/src/check/runner.ts`](https://github.com/curvenote/curvenote/blob/main/packages/curvenote-cli/src/check/runner.ts)

## Next

- [Writing custom checks](./custom.md) — add your own.
- [Running checks](./running.md) — invoke the runner.
