---
title: DOIs and archival
description: Mint DOIs on work versions and archive published works.
---

# DOIs and archival

A Curvenote version can be assigned a Digital Object Identifier
(DOI) so it can be cited in the scholarly record. Curvenote
integrates with [Crossref](https://www.crossref.org/) and
[DataCite](https://datacite.org/) for minting; which one is used
depends on your account and (for journal submissions) the venue's
configuration.

## When DOIs are minted

DOIs are minted **per version**, not per work. The work itself can
also have a "concept" DOI that always resolves to the latest
version, but each individual version gets its own DOI as well.

Three common moments to mint:

1. **On version push** — the platform mints automatically when you
   push a version of a work that has DOI minting enabled.
2. **On journal acceptance** — a journal mints a DOI for an accepted
   submission as part of the publishing step.
3. **Manually** — from the work's **Versions** tab, click **Mint DOI**
   on a specific version.

## Required metadata

DOI registries require a minimum set of metadata. Curvenote runs a
[check](/platform/checks/running) before minting and refuses to
proceed if anything is missing:

- **Title** — from `project.title`.
- **Authors** — at least one, with a name. ORCID strongly
  encouraged.
- **License** — e.g. `CC-BY-4.0`. Required for most registries.
- **Publication date** — the version push date is the default.
- **Abstract or description** — short summary.

Missing metadata surfaces in the check report; fix it in `myst.yml`
front-matter and re-push.

## Configuring DOI minting

### For an individual work

Open the work in the dashboard, then **Settings → DOIs**:

- Toggle **Mint on version push**.
- Pick the registrar (Crossref or DataCite) if your account has
  more than one available.
- Set the DOI prefix to use (defaults to your account's prefix).

### For a journal

Journals mint DOIs as part of the
[publishing step](/platform/journals/publishing). Configuration
lives in the journal settings, not on the individual work.

## Looking up a DOI

Each version's DOI is shown on the version detail page. The DOI
resolves to the canonical Curvenote URL for the version, which in
turn renders the build that was sealed at push time.

## Archival and long-term preservation

Minting a DOI is necessary but not sufficient for long-term
preservation. For genuine archival, push the version to a
preservation service (e.g. [Zenodo](https://zenodo.org/) or your
institutional repository) in addition to minting. Some venues do
this automatically as part of publishing; check with the venue or
your institution.

## Updating metadata after minting

Most DOI metadata fields can be updated after minting (Crossref
allows incremental updates). Curvenote pushes updates when you
edit author lists, affiliations, or the abstract on a versioned
work. Some fields — the resource URL, the publication year —
should not change after minting and Curvenote will warn you before
making such an update.

## Next

- [Checks → Running checks](/platform/checks/running) — the metadata
  validation that runs before minting.
- [Journals → Publishing and DOI minting](/platform/journals/publishing)
  — the editorial publishing step.
