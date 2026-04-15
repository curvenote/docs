---
title: Quickstart
description: Publish your first Curvenote site in five minutes.
---

# Quickstart

This page walks the shortest path from "empty repo" to "published site".
There are two equivalent paths: the **Platform** path (browser, no
install) and the **CLI** path (terminal, full local control).

::::{tab-set}

:::{tab-item} Platform path
:sync: platform

1. Go to [curvenote.com](https://curvenote.com) and sign in with GitHub,
   GitLab, ORCID, Google, or Okta. See
   [Sign in and link accounts](/platform/getting-started/sign-in).
2. Click **Connect a repository** and pick a repo that contains a
   `myst.yml` (or click *Use a starter* to fork one).
3. Curvenote runs the build for you and gives you a preview URL.
4. Push a commit — the site rebuilds automatically.

:::

:::{tab-item} CLI path
:sync: cli

```bash
npm install -g curvenote
curvenote auth login
curvenote sync init
curvenote start          # local preview at http://localhost:3000
curvenote works push     # push a versioned work
```

Full walkthrough: [CLI tutorial](/cli/tutorial).

:::

::::

## What just happened

- **Sign in** linked your SCM account to a Curvenote identity.
- **Connect** registered the repo as a *site source* and a *work*.
- **Push** created an immutable version of the work that can be cited.

From here, see
[Publish your first site](/platform/getting-started/first-site) for the
full tour.
