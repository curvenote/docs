---
title: Build and deploy
description: How Curvenote builds and deploys a connected site.
---

# Build and deploy

A Curvenote site deploys automatically every time you push to the
tracked branch of its connected repository. The build pipeline is
the same on the platform and on your laptop — in both cases it's
[MyST](https://mystmd.org) running over the project's `toc`.

## The default flow

1. You push a commit to the tracked branch (default: `main`).
2. The SCM webhook fires.
3. The platform clones the repo and runs `myst build`.
4. The [check suite](/platform/checks/running) runs.
5. If the build succeeds, the new content goes live at the site's
   canonical domain. Check status is reported back to the SCM.

There is no manual "deploy" step. The tracked branch *is* the
production state of the site.

## Pull request previews

When you open a PR against the tracked branch, Curvenote builds an
ephemeral preview for the PR's head commit and posts the URL as a
check on the commit. The preview rebuilds on every push to the PR
branch and is torn down when the PR is closed or merged.

Use PR previews to:

- Review content changes before they go live.
- Catch failing checks in CI before they're on the production site.
- Share a working URL with co-authors for feedback.

## Deploying via GitHub Actions

The platform handles deploys for you, but you can also deploy from
your own CI — useful when you need to run extra steps (data
generation, notebook execution, vendored builds) before publishing.

Use the [Curvenote Deploy action](https://github.com/marketplace/actions/curvenote-deploy):

```yaml
name: Curvenote Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: curvenote/action-deploy@v1
        env:
          CURVENOTE_TOKEN: ${{ secrets.CURVENOTE_TOKEN }}
```

Generate a `CURVENOTE_TOKEN` from
**Personal Settings → API Tokens → Generate New Token**, then add it
as an Actions secret on the repo. See [CI/CD recipes](/cli/ci) for
more variations (GitLab CI, deploys with notebook execution, monorepo
builds, etc.).

## Tracked branch strategies

Two common patterns for keeping production stable:

### PR-only

Never push directly to the tracked branch. All changes go through a
PR. The PR preview is the rehearsal; merging is the deploy.

### Long-lived `dev` branch

Work on a `dev` branch, deploy from `main`. Promote `dev` to `main`
by PR when you're ready. Useful for teams with multiple in-flight
changesets.

### Release branch

Deploy from a `release` branch instead of `main`. Set the tracked
branch in **Site settings → Source**. `main` becomes a staging
branch, `release` is what's live.

## What to commit

- **Commit** `myst.yml` (and any per-folder configs).
- **Commit** `public/` (logo, favicon, OG images).
- **Ignore** `_build/` — it's a local cache.
- **Ignore** `node_modules/` if you have any local dev deps.

A minimal `.gitignore`:

```text
_build/
node_modules/
.curvenote/
```

## Build performance

For large sites:

- Use [`curvenote start`](/cli/commands/site) locally to validate
  before pushing — catches errors faster than CI.
- Avoid committing large rendered figures; let the build produce
  them or load them from object storage.
- For notebook-heavy sites, execute notebooks in a separate CI
  step and commit the executed `.ipynb` files; don't re-execute on
  every deploy.

## Next

- [Works and versions → Versioning a work](/platform/works/versioning)
- [Checks → Running checks](/platform/checks/running)
- [CLI → CI/CD recipes](/cli/ci)
