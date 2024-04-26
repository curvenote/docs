---
title: Managing Submissions using GitHub
subtitle: A guide for setting up submission repositories for conferences, proceedings or lab-groups
description: A tutorial on managing an editorial workflow using GitHub Actions and Curvenote.
---

This guide is designed for editorial teams at journals, lab group websites,
or personal sites who are managing a focused collection of articles, such as
conference proceedings, consortium articles, or lab-group papers.

:::{tip} Objective
By the end of this guide you will understand how to setup a GitHub repository
to accept submissions, conduct open peer-review, make publication decisions,
and publish content through Curvenote.

The recommended starting point for this guide is a local MyST Project that
you have already prepared using the [](./preparing-for-submission.md) guide.
:::

:::{tip} Prerequisites
:class: dropdown
Technical Skills
: Basic understanding of GitHub operations such as pull requests, issues, GitHub actions and permission management.
: Understanding of Git, for commits, merges, and branches.

Access
: Editorial team members should have appropriate access to the GitHub repository
: and the Curvenote site with an Editor or Admin role.
:::

## Overview of Editorial Process

The editorial process we describe in this guide involves a single, centralized GitHub repository where all operations — submission, review, revision, and acceptance — are managed.
This approach leverages the collaborative aspects of GitHub for peer-review and can offer full transparency of the editorial decisions, and represents a relatively simple editorial workflow. Below is a general overview of the editorial process, which can be tailored to specific venues and editorial teams.

Submission
: Authors submit their papers by forking the repository, creating a new branch and adding their manuscript or {term}`compendium` into a folder (e.g. `papers`). They the author opens a pull request (PR) to merge their branch into the main branch of the repository. The PR serves as the primary hub for discussion and review of the paper.

Check and Preview
: Upon submission, automated {term}`checks` are run via a GitHub Action. These verify that the {term}`submission` meets basic requirements such as adherence to templates and inclusion of necessary scholarly metadata such as author names, affiliations, abstracts, and inclusion of DOIs in references. A {term}`preview` of the work is created and accessible through a GitHub comment.

Editorial Workflow
: An editor is generally assigned to the submission after initial checks. This editor is responsible for overseeing the review process. They assess the paper's scope and topic to ensure it fits the publication's criteria and, if so, moves it forward in the review process.

Reviewer Recruitment
: The assigned editor recruits reviewers who are experts in the subject matter of the paper. These reviewers are tasked with evaluating the submission's quality, novelty, and accuracy. These reviewers are `@tagged` in the GitHub pull request, which facilitates all notifications and communication between the authors and the reviewers.

Review Process
: Reviewers access the {term}`preview` of the {term}`submission` and provide their feedback directly on the pull request through GitHub comments. This feedback can include both general comments and specific, inline suggestions for changes. The review process is transparent, with discussions visible publicly, which encourages thorough and constructive critiques.

Author Revisions
: Based on the feedback from reviewers, the author may make revisions to the submission. This often involves updating the pull request with new commits that reflect the changes suggested by the reviewers. The process of review and revision can cycle multiple times depending on the paper's initial quality and the extent of required revisions.

Final Decision
: Once the reviewers and the assigned editor(s) are satisfied with the revisions, the editor makes a decision on the paper. If accepted, the final version of the paper is merged into the main branch. The PR's merge signifies formal acceptance of the paper.

Publication
: After acceptance, the {term}`submission` is accessible in Curvenote and can be assigned a DOI and including the new publication on the journal's website or announcing through other channels.

This workflow is inspired by the Journal of Open Source Software (JOSS) and SciPy Proceedings, and is designed foster a community-oriented approach where the _process_ is as open as the _content_.

## Repository Setup

The repository on GitHub will serve as the central hub for submissions, reviews, and publications. The repository is organized contains a directory dedicated to submissions, such as a `articles` folder. This repository may include a template example that authors can copy. The `README.md` should have brief guidelines for the submissions process to help authors with the expected format of the papers submitted, for example, as LaTeX or MyST Markdown.

To get started, you can clone the [Template Repository][template], which includes some basic instructions for authors as well as a GitHub action that will run on every pull request that is tagged appropriately. To get setup, start by forking the [Template Repository][template]. This repository will host all submissions, reviews, and accepted papers. Add members of your editorial team as collaborators in the repository, you do not need to add prospective authors as they will create pull-requests to add their submissions.

:::{note} Create a Curvenote Site
To move further in the guide, you will need a Curvenote site to host your content.
Contact [Curvenote Support][support] to create a site for your community.
:::

## Repository and Action Overview

To help you visualize and implement this setup, you can refer to our [Template Repository][template]. This repository includes:

- **README.md**: Outlines the purpose of the repository, submission instructions, and the review process. It acts as the first point of information for potential contributors and reviewers.
- **Templates**: Located in the `articles` folder, these templates demonstrate to authors how to create a submissions. It includes placeholders for all required elements such as the title, authors, abstract, sections, and supporting materials.
- **GitHub Action**: Curvenote utilizes GitHub Actions to automate initial checks and generate previews of submissions. The actions automatically generate a preview of the manuscript as it would appear in publication, and these are linked within the pull request comments for easy access by reviewers.

:::{figure} ./images/github-preview-comment.png
:class: framed
:label: fig:github-preview-comment
With the appropriate tag added to a PR, the checks and
:::

[template]: https://github.com/curvenote-examples/proceedings-submissions
[support]: mailto:support@curvenote.com
