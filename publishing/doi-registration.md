---
title: Registering a DOI
---

Curvenote can register DOIs for appropriate content hosted on the Curvenote venues. This can be either under Curvenote's DOI prefix ([10.62329](https://api.crossref.org/prefixes/10.62329)) or if included in your active subscription, under your own prefix.

The registration process is currently manual, to request a DOI get in touch with [Curvenote Support](mailto:doi@curvenote.com).

# Deposit types

Crossref supports multiple deposit types; Curvenote currently supports the following four. For each of these, supported article metadata is pulled from the `curvenote.yml` frontmatter and includes:

- `title`
- `subtitle`
- `doi`
- `date` - used as publication date
- `license` - only the URL is used
- `funding` - MyST funding information is reduced to only award numbers and sources
- `first_page`/`last_page`

Additionally, the following information will be pulled from the `curvenote.yml#project`:

- `abstract`
- `citations` - only citations with DOIs are included

Different deposit types have different required fields. If DOIs are not provided, the user will be able to select new DOIs. If other required fields are not provided, the user will receive an error message.

## Journal

This type is used to register a new journal and/or new journal articles. In addition to the above article metadata for each article, this deposit type requires journal title and DOI, set under `venue` frontmatter in `curvenote.yml`:

- `venue.title` - journal title
- `venue.doi` - journal DOI

You may also specify in the frontmatter:

- `venue.short_title` - journal abbreviation
- `volume.number`
- `issue.number`
- `issue.doi`

## Conference

This type is used to register a conference proceedings. Similar to "journal" deposits, this will attempt to discover multiple articles.

In addition to the above article metadata for each article, this deposit type requires conference title, proceedings title, and proceedings publisher, set in `curvenote.yml`:

- `venue.title` - conference title
- `volume.title` - proceedings title
- `venue.publisher` - proceedings publisher

You may also specify in the frontmatter:

- `venue.short_title` - conference acronym
- `venue.number` - conference number
- `venue.date` - conference date
- `venue.location` - conference location
- `venue.series` - series title
- `venue.issn` - series issn
- `venue.doi` - series doi
- `volume.subject` - proceedings subject
- `editors` - proceedings editors

## Dataset

This type is used to register a database deposit. For this type, each "article" is considered a dataset, where "article frontmatter" is used as dataset frontmatter.

In addition to the individual dataset metadata, this deposit type requires a database title, set under `venue` frontmatter in `curvenote.yml`:

- `venue.title` - database title

You may also specify in the frontmatter:

- `editors` - database contributors (independent from the individual dataset authors)
- `venue.doi` - a related item that each dataset is part of.

## Preprint

This type is used to register any posted content - these are standalone articles not associated with a journal or conference. You cannot register multiple articles with this type. Also, there is no additional metadata required than the article metadata described above.
