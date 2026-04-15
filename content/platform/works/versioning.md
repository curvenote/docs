---
title: Versioning a work
description: The work version lifecycle and how to push versions.
---

# Versioning a work

A work accumulates **versions** over time. Each version is an
immutable snapshot of the project's content at the moment it was
pushed. Versions are individually addressable, individually
citable, and can be assigned independent DOIs.

## When to push a version

Push a version when you want a citable, frozen reference to the
current state of the work. Common moments:

- Sharing a draft with collaborators or co-authors.
- Submitting to a journal or venue.
- Tagging a release for an external audience.
- After incorporating reviewer feedback.
- Cross-referencing the work in a citation.

Do *not* push a version on every commit. Versions are intended to
be meaningful checkpoints, not a parallel commit history.

## Pushing from the CLI

```bash
curvenote works push
```

Which runs the following pipeline
([`packages/curvenote-cli/src/works/push.ts`](https://github.com/curvenote/curvenote/blob/main/packages/curvenote-cli/src/works/push.ts)):

1. **Authenticate** — requires `curvenote token set` first.
2. **Resolve the work key** — reads `project.id` from `myst.yml`.
   If missing, prompts for one and writes it back to the config.
3. **Clean rebuild** — runs `myst build` from scratch.
4. **Upload to CDN** — uploads the build artifacts and gets back a
   `cdnKey`.
5. **Create the work or new version** — if no work exists for the
   key yet, creates a new work; otherwise creates a new version on
   the existing work.

On success you'll see:

```text
📄 Public work created for key abc123!
```

The local log file `curvenote.push.json` records the work id and
version id from the response.

## Public vs. private push

By default, pushed versions inherit the work's visibility. Use
`--public` on the first push if you want the work to be public from
day one:

```bash
curvenote works push --public
```

A work's first version sets its initial visibility; subsequent
versions follow the work.

## Pushing from the Platform

From the dashboard, open the work, click **Versions**, and click
**Push new version**. The platform runs the same pipeline as the
CLI, against the latest commit on the tracked branch.

## Inspecting versions

```bash
curvenote works list
```

Lists works under your account, with version count and last push
date. Click a work in the dashboard to see the full version timeline.

## Cross-referencing versions

Each version has a stable URL of the form:

```text
https://curvenote.com/oxa:<work-id>/<version-id>
```

Use this in citations and external references when you want to
guarantee the reader sees exactly the bytes you saw.

## What a version contains

A version is a sealed unit:

- The full rendered build at the time of push.
- A snapshot of the project's metadata (authors, title, license,
  abstract, keywords).
- The bibliography, figures, and notebooks as they were.
- The check report from the build.

It does **not** contain the underlying Git history. Versions are
build artifacts, not commits — you can push three commits to your
repo and then push one version that bundles all three.

## Deleting a version

Versions are designed to be permanent and citable. The platform
does not expose a delete button. If you have a legitimate need to
remove a version (e.g. accidentally published private data), open
a support ticket.

## Next

- [DOIs and archival](./dois.md) — mint a DOI on a version.
- [Submission workflow](/platform/journals/submission-workflow) —
  submit a version to a journal.
- [`curvenote works push` reference](/cli/commands/works)
