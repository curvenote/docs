---
title: Curvenote CLI
description: The open source Curvenote command line, built on MyST.
---

# Curvenote CLI

The Curvenote CLI (`curvenote`) is an open source command line tool
built on top of [MyST](https://mystmd.org). It builds sites locally,
pushes versioned works, runs checks, and submits to journals — the
same primitives the [Platform](/platform) uses, scriptable from your
terminal or CI.

## Sections

- **[Install](./install.md)** — prerequisites and installation.
- **[Tutorial](./tutorial.md)** — from a fresh repo to a published
  work, end to end.
- **[Configuration](./config.md)** — the `curvenote.yml` and
  `myst.yml` files explained.
- **[CI/CD recipes](./ci.md)** — GitHub Actions, GitLab CI, and
  preview deploys.
- **[Command reference](./commands/index.md)** — every command and
  flag, generated from source.

## Built on MyST

All authoring uses standard [MyST markdown](https://mystmd.org).
Curvenote layers on a small set of plugins (custom directives,
checks, and publish actions) on top of the base MyST CLI — anything
you can do in MyST you can do in Curvenote.
