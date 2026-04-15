---
title: Running checks
description: How Curvenote runs validation checks against a work.
---

# Running checks

Checks are validations that run against a work — metadata
completeness, link integrity, license presence, accessibility,
citation hygiene, and so on. They run automatically on every push
to a connected repository and on every version push, and you can
run them locally with the CLI before pushing.

A check has three possible outcomes: **pass**, **fail**, or
**error** (the check itself blew up trying to run). Checks can
also be marked **optional**, in which case a failure surfaces as a
warning rather than a hard fail.

## Running checks locally

```bash
curvenote check
```

The CLI loads the local project, resolves the configured check
set, runs each check against the project AST, and prints a grouped
report:

```text
 Curvenote Checks  ✓✓✓ 🚀

❯ Metadata (4/4 tests passed)
    ✓ Project has a title
    ✓ Project has at least one author
    ✓ Project has a license
    ✓ Project has an abstract
❯ Links (12/13 tests passed, 1 optional)
    ✓ No broken internal links
    ✓ No broken cross-references
    ↓ External link returned 503: https://example.com (slow.md:14)
```

Results are grouped by **category** (the check's first tag). Each
check reports a status icon, a title, an optional message, and an
optional file:line:column where the failure was found.

The runner is implemented in
[`packages/curvenote-cli/src/check/runner.ts`](https://github.com/curvenote/curvenote/blob/main/packages/curvenote-cli/src/check/runner.ts).

## Running checks on the platform

Every push to a connected repository triggers the check suite as
part of the build pipeline. Results appear in three places:

1. **In the SCM** — a check status (✓ or ✗) is posted on the
   commit. On a PR, this becomes the merge gate.
2. **In the dashboard** — the build detail page shows the same
   grouped report you'd get from the CLI.
3. **As an inline annotation** — file:line failures show as inline
   PR comments where supported.

## When checks block a deploy

- Required (non-optional) failures **fail the build** and the SCM
  check is red. The preview still renders so reviewers can see the
  content, but the merge is gated.
- Optional failures surface as warnings. The build is still green.
- Errors (the check itself crashed) are treated as failures.

## Configuring the check set

Which checks run is determined by the project's check definitions.
For a standalone work, the default set runs all checks shipped by
`@curvenote/check-implementations`. For a [journal
submission](/platform/journals/submission-workflow), the journal
overrides the check set with its own configuration — you can
require stricter metadata, add domain-specific checks, or relax
rules that don't apply.

## Skipping a check temporarily

Don't disable checks to make a build green. Either:

- **Fix the underlying issue** (preferred), or
- **Mark the check optional** in the project config so the failure
  is a warning, not a block.

If you genuinely need to bypass a check for a one-off push, talk
to your journal admin (for submissions) or your platform admin
(for sites).

## Next

- [Check types reference](./reference.md) — every check that ships
  with the standard implementations package.
- [Writing custom checks](./custom.md) — author your own checks.
- [`curvenote check` reference](/cli/commands/check)
