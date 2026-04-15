---
title: Connect a repository
description: Link a Git repository to Curvenote as a site and a work.
---

# Connect a repository

Connecting a repository is the central act of using Curvenote. Once
connected, every push to your tracked branch triggers a build, runs
checks, and updates the preview site. The same connection registers
the repository as a [work](/platform/works/concepts) so it can be
versioned and (optionally) submitted to a [journal](/platform/journals/).

## What gets connected

A single connected repository produces three things in Curvenote:

1. A **site** — the rendered HTML build, served at a Curvenote
   subdomain or your own [custom domain](/platform/sites/domains).
2. A **work** — the citable unit, with its own stable identity and a
   sequence of immutable versions.
3. A **build pipeline** — webhook-triggered, runs the
   [check suite](/platform/checks/running) on every push.

## Prerequisites

Before you connect:

- You're [signed in](./sign-in.md) with an SCM provider that has
  read access to the repo.
- The repo has a `myst.yml` (or a `curvenote.yml`) at the root. If
  it doesn't, Curvenote can [start from a template](#start-from-a-template).
- The branch you want to track exists (defaults to `main`).

## Connect from the Platform UI

1. From the dashboard, click **Connect a repository**.
2. Pick the SCM (currently GitHub) and authorize the Curvenote app
   on the org or account that owns the repo. You only need to do
   this once per org.
3. Pick the repository from the list. Curvenote inspects the
   default branch and confirms it found a `myst.yml`.
4. Confirm the **site slug** (defaults to the repo name) and the
   **tracked branch** (defaults to `main`).
5. Click **Connect**. Curvenote runs the first build and opens the
   preview URL when it's ready.

From this point on, every push to the tracked branch rebuilds the
site and runs checks.

## Start from a template

If you're starting from scratch, fork a template instead of writing
a `myst.yml` by hand:

1. On the Connect screen, click **Use a starter**.
2. Pick a template (article, thesis, journal submission, lab notebook).
3. Curvenote forks the template into your account, opens the new
   repo on the SCM, and connects it in one step.

The equivalent on the CLI is:

```bash
curvenote init --github https://github.com/<org>/<template>
```

See the [CLI tutorial](/cli/tutorial) for the full walkthrough.

## What happens on every push

Once connected, the pipeline on every push to the tracked branch is:

1. **Webhook fires** — the SCM notifies Curvenote of the new commit.
2. **Build runs** — Curvenote executes the same MyST build that
   `curvenote start` would run locally.
3. **Checks run** — the [check suite](/platform/checks/running)
   reports pass/fail per category.
4. **Preview updates** — the site reflects the new build at the
   preview URL.
5. **Status reported** — a check status is posted back to the SCM
   on the commit (green / red).

If checks fail, the build still produces a preview, but the SCM
check is red so reviewers can see it in the PR.

## Branches and previews

By default Curvenote tracks one branch (usually `main`). Pushing to
other branches does not rebuild the production site. To preview a
branch before merging, open a pull request — Curvenote builds an
ephemeral preview per PR and posts the URL as a check status.

For more advanced setups (release branches, dev branches, gated
deploys) see [Build and deploy](/platform/sites/deploy).

## Disconnecting

To disconnect a repository, open **Site settings → Source** and click
**Disconnect**. The site, work history, and DOIs are preserved —
only the link to the SCM is removed. You can reconnect to the same
repo (or a different one) later.

## Troubleshooting

- **"No `myst.yml` found"** — add one to the repo root, or use a
  template starter. Minimum viable: a `version: 1` line and a
  `project:` block with at least a `title`.
- **"Webhook delivery failed"** — check that the Curvenote SCM app
  still has access to the org. Re-authorizing fixes this.
- **Build green, preview empty** — your `myst.yml` `toc` may be
  empty. Add a top-level `file:` entry.

## Next

- [Publish your first site](./first-site.md) — walk the full
  end-to-end flow.
- [Site structure](/platform/sites/structure) — understand what
  goes in `myst.yml`.
- [Versioning a work](/platform/works/versioning) — once your site
  is live, cut your first version.
