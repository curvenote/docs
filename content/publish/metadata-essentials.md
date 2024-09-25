---
title: Metadata Essentials
description: Providing the correct metadata as part your submission ensures that your work appears correctly and is critically important for the editorial workflow.
---

Providing the correct metadata as part your submission ensures that your work appears correctly and is critically important for the editorial workflow.

For submissions to scientific journals or conferences, it is worth investing time in adding as much relevant information to metadata as possible, especially around Authors, Affiliations, Funding information and other key scholarly metadata, as this converts directly to the metadata registered with the global scholarly services responsible for DOI creation, indexing, citation and research metrics and archival.

For submission to other services, metadata requirements may vary or indeed be restrictive, in either case the `curvenote check <venue>` function will help you determine what is appropriate.

In the rest of this section, we'll review the more common and important metadata fields that you should be adding to your submission.

Curvenote builds on MyST Markdown which uses the term `frontmatter` to describe information added to MyST Markdown both at a project and page level. For an up to date and full explanation of the available frontmatter fields please refer to the [MyST Markdown reference docs](https://mystmd.org/guide/frontmatter).

## Project frontmatter

This is set in the `curvenote.yml` or `myst.yml` configuration file under the `project:` section.

A minimal project configuration might include the following fields:

```{code-block} yaml
:caption: A `curvenote.yml` (or `myst.yml`) project section containing a set of metadata fields. Note there may well be additional fields in the project concerned with building the document or it's exports. We focus on metadata related fields here.
project:
  id: 421903cc-b0b0-499e-8637-e72a8ce568b7
  title: 'coolastro: a Python library for very cool astrophysics'
  description: |
    Coolastro is a cutting-edge Python library designed specifically for the astrophysics
    community, bringing a fresh and innovative approach to the study of celestial mechanics.
  short_title: 'coolastro: a Python library'
  authors:
    - name: 'John Adam Lazenble'
      affiliations:
        - id: institution-a
          name: Institution A
          corresponding: true
          email: jal@planet-one.com
  license: CC-BY-4.0
  github: https://github.com/lazenble/coolastro
  doi: 10.56343/lazenble.32432.12
  keywords:
    - astrodynamics
    - orbital mechanics
    - orbit propagation
    - orbit visualization
    - two-body problem
  banner: banner.png
  thumbnail: thumbnail.png
```

title
: This should be the full title of your submission. It can include special characters, math and can be valid MyST Markdown.

short_title
: In the web based version of your work this will be used in navigation and tables of contents. In a PDF build this may be used as a running header depending on the Venue's template.

description
: The intended us is for metadata on web based versions of your published work, how it is used will depend on the venue.

keywords
: A set of keywords describing your work, as typically included in any scientific paper.

authors
: The authors list brings together all a rich set of metadata for [Authors](https://mystmd.org/guide/frontmatter#authors) including Affiliations, CRediT Roles, RoRs, ORCIDs. Repeated affiliations can be grouped between authors and collaborators.

contributors
: Other contributors besides authors may be listed [elsewhere in the frontmatter using the same author object](https://mystmd.org/guide/frontmatter#other-contributors).

license
: Attaching an appropriate license to your work is recommended to your work prior to submission. Whether this is appropriate, will be honored or included as part of your final publication will submission will depend on the Venue's policies. Licenses can be specified for [the work or for code and content separately](https://mystmd.org/guide/frontmatter#licenses).

github
: Identify the a github repository relevant to your work, this may be the source or your submission or a it's software repository.

doi
: If your work has an existing DOI, when you should add it here. This field is more relevant for Venues such as Lab Groups, Research Hubs, Science Blogs or Private Sites. Journal and Conference publications are likely to create a new DOI at publication time, meaning this field will likely be ignored.

banner
: An image that will be used for the background of the header section on the web based version of your published article. If you don't provide one the Venue may autogenerate a random one or leave this as blank. Not all Venue's require or allow a banner image.

thumbnail
: A thumbnail image that will be used in the Article listings on the Venue's website. If this is omitted one will be generated from the first figure or image included in your submission.
