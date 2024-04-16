---
title: Preparing for Submission
subject: How to
venue: Curvenote Publishing
---

```{tip} Outline
In this guide you will learn about:

* How to meet (and check in advance) the requirements of the venue you are submitting to
* **Essential** additional steps for a Computational Articles or Notebook based Reports
* As well as tips for making the most of the frontmatter, metadata and styling that will be attached  to your submission.

The starting point for this guide is a local MyST Project complete with content and frontmatter that builds to a website without issues.

If you are working on a real submission, this guide will take you through the process of preparing your submission.

If you are here to learn you can use any MyST project or use the [myst-quickstart](https://github.com/executablebooks/mystmd-quickstart).
```

## Pre-requisites

If you have not already done so:

- [Install the Curvenote CLI](installing.md) and setup your [API Token](authentication.md)
- Prepare a local folder containing your MyST submission OR clone the [quickstart project](https://github.com/executablebooks/mystmd-quickstart)
- and `cd` into that folder

(the-venue)=

## Venues

A _"Venue"_ may refer to a journal, conference website, research group or private site hosted on the Curvenote platform.

Each Venue has it's own different rules on:

- Whether submissions are open to the public or closed and can only be made by inviation or by a publishing team
- Which submission _"Kinds"_ can be accepted. e.g. _Abstract_, _Research Article_, _Letter_ or conceivably anything
- automated checks that are run on each submission, specific to the Kind which can include checks on structure, integrity, manuscript content, plagarism and so on
- Whether a Venue, or one of it's _"Collections"_, is currently open to submissions

In this guide, we'll assume the venue is a scientific journal that accepts submissions of a kind _Article_.

If you are working on a real submission, check the submission instructions from the venue for the correct _Venue Name_, _Collection_ and _Submission Kind_ to target.

If you are just here to learn or practice, you can submit to the venue `cn-testing` using the default collection and kind.

## Getting Started

The first step in preparing your submission is to check your MyST project for errors and warnings on one hand and against the specific requirements of the Venue on the other.

### Check your build

Check that your work builds as expected by running `curvenote start` and opening the resulting link in your web browser.

```{figure} images/curvenote-start-warnings.png
The result of running `curvenote start` showing the link to the web based preview of the work and various outpu logs and in this case warnings. Errors and warnings such as those shown for broken cross references  should be addressed before making a submission.
```

You should check that no errors appear on in the terminal after running `curvenote start`. Errors and warnings can point to problems with your work that should be addressed before submission.

Builds errors and warnings can often relate to the metadata included or missing from your submission, in which case the section below on [](#metadata-essentials) may be of help otherwise refer to the MyST Markdown docs at https://mystmd.org

### Check your work against a venue's requirements

Curvenote runs a set of automated checks on any submission. This speeds up the submission process for both authors and the venue, and reduces the chances of rejection. Checks are set by the Venue and help you ensure your manuscript will meet their submission requirements before you make your actual submission.

You can run the checks for a given Venue and Submission Kind at any time using the `curvenote check <venue>` command. For example, running:

```bash
% curvenote check scipy
```

Results in the following report in your terminal:

```{figure} images/curvenote-check-scipy.png
The result of running `curvenote check <venue>` on a local folder containin a MyST project. The **Corresponding Author** check fails and red signifies that a _required_ check has failed, while **ORCID** and **CRediT Roles** check flag missing _optional_ metadata. The content of the manuscript also contains a DOI which has been validated.
```

In this case there is one issue that must addressed before submitting and two optional issues that addressing could improve your submission and get closer to the venue's recommeded submission guidelines.

Documentation on each automated check is provided at https://checks.curvenote.com/.

## Metadata Essentials

Providing the correct metadata as part your submission ensures that your work appears correctly and is critically important for the editorial workflow.

For submissions to scientific journals or conferences, it is worth investing time in adding as much relevant information to metadata as possible, expecially around Authors, Affiliations, Funding information and other key scholoarly metadata, as this converts directly to the metadata registered with the global scholarly services responsible for DOI creation, indexing, citation and research metrics and archival.

For submission to other services, metadata requirements may vary or indeed be restrictive, in either case the `curvenote check <venue>` function will help you determine what is appropriate.

In the rest of this section, we'll review the more common and important metadata fields that you should be adding to your submission.

Curvenote builds on MyST Markdown which uses the term `frontmatter` to describe information added to MyST Markdown both at a project and page level. For an up to date and full explanation of the available frontmatter fields please refer to the [MyST Markdown reference docs](https://mystmd.org/guide/frontmatter).

### Project frontmatter

This is set in the `curvenote.yml` or `myst.yml` configuration file under the `project:` section.

A minimal project configuration might include the following fields:

```{code-block} yaml
:caption: A `curvenote.yml` (or `myst.yml`) project section containing a set of metadata fields. Note there may well be additional fields in the project concerned with builsing the document or it's exports. We focus on metadata related fields here.
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
: In the web based version of your work this will be used in navigation and tablees of contents. In a PDF build this may be used as a running header depending on the Venue's template.

description
: The intended us is for metadata on web based versions of your pubsliedh work, how it is used will depend on the venue.

keywords
: A set of keywords describing your work, as typically included in any scientific paper.

authors
: The authors list brings together all a rich set of metadata for [Authors](https://mystmd.org/guide/frontmatter#authors) including Affiliations, CRediT Roles, RoRs, ORCIDs. Repeated affiliations can be grouped between authors and collaborators.

contributors
: Other contributors besides authors may be listed [elsewhere in the frontmatter using the same author object](https://mystmd.org/guide/frontmatter#other-contributors).

license
: Attacing an appropraite license to your work is recommeded to your work prior to submission. Whether this is appropraite, will be honored or included as part of your final publicaiton will submission will depend on the Venue's policies. Licenses can be specified for [the work or for code and content separately](https://mystmd.org/guide/frontmatter#licenses).

github
: Identify the a github repository relevant to your work, this may be the soure or your submission or a it's software repository.

doi
: If your work has an existing DOI, when you should add it here. This field is more relevant for Venues such as Lab Groups, Research Hubs, Science Blogs or Private Sites. Journal and Conference publications are likely to create a new DOI at publication time, meaning this field wil likely be ignored.

banner
: An image that will be used for the background of the header section on the web based version of your published article. If you don't provide one the Venue may autogenerate a random one or leave this as blank. Not all Venue's require or allow a banner image.

thumbnail
: A thumbnail image that will be used in the Article listings on the Venue's website. If this is omitted one will be generated from the first figure or image included in your submission.

```{tip}
Add a marked up image here
```

## Computational Environment

- binderhub and rees - an initial test

- frontmatter

  - jupyter: true
  - export: meca
  - requirements
  - resources

- testing on my computer

- testing in the Venue's environment
