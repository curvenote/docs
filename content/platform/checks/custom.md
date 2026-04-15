---
title: Writing custom checks
description: Author and register a custom check.
---

# Writing custom checks

A Curvenote check is a pair: a declarative **definition** in
`@curvenote/check-definitions` and an executable **implementation**
in `@curvenote/check-implementations`. To add a custom check you
author both, package them as a plugin, and load the plugin into
your project's check set.

This page is a high-level orientation. For a full plugin walkthrough
see [Extend → Custom checks](/extend/checks).

## When to write a custom check

- A domain-specific metadata field needs to be present (e.g. "every
  protein has a UniProt ID").
- A house style rule that the standard checks don't cover (e.g.
  "section headings are sentence case").
- A consistency rule across files (e.g. "every figure has a label
  prefixed with `fig:`").
- A journal-specific submission requirement (e.g. "manuscript has
  a structured abstract").

## Anatomy of a check

A **definition** is data:

```ts
// my-checks/definitions.ts
import type { CheckDefinition } from '@curvenote/check-definitions';

export const hasUniprotId: CheckDefinition = {
  id: 'mylab.has-uniprot-id',
  title: 'Every protein has a UniProt ID',
  description: 'Each protein referenced must include a uniprot field.',
  tags: ['mylab', 'metadata'],
  example: '...',
};
```

An **implementation** is a `validate` function that takes a session
and the resolved check, walks the project AST, and returns a
`CheckResult` (or array of results):

```ts
// my-checks/implementations.ts
import type { CheckInterface } from '@curvenote/check-implementations';
import { CheckStatus } from '@curvenote/check-definitions';
import { hasUniprotId } from './definitions.js';

export const hasUniprotIdImpl: CheckInterface = {
  ...hasUniprotId,
  validate(session, check) {
    const proteins = collectProteins(session);
    const missing = proteins.filter((p) => !p.uniprot);
    if (missing.length === 0) {
      return { status: CheckStatus.pass };
    }
    return missing.map((p) => ({
      status: CheckStatus.fail,
      message: `Protein "${p.name}" is missing a UniProt ID`,
      file: p.file,
      position: p.position,
    }));
  },
};
```

The runner combines the definition and the implementation at
execution time — see
[`runChecks`](https://github.com/curvenote/curvenote/blob/main/packages/curvenote-cli/src/check/runner.ts).

## Packaging

Ship a custom check as an npm package that exports both the
definitions array and the implementations array. Then enable it
in your project's check config or your journal's check config.

## Loading custom checks

For a personal project, declare the plugin in `myst.yml`:

```yaml
project:
  plugins:
    - my-checks
```

For a journal, the journal admin loads the plugin in the venue's
settings so all submissions run it.

## Testing

Test checks like any other Node module. Construct a fake session,
call `validate`, assert on the returned status. Curvenote's own
check-implementations package is a good reference; see
[`packages/check-implementations/`](https://github.com/curvenote/curvenote/tree/main/packages/check-implementations).

## Next

- [Extend → Custom checks](/extend/checks) — the full plugin guide.
- [Check types reference](./reference.md) — the standard catalog
  for inspiration.
