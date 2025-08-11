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
: Editorial team members should have appropriate access to the GitHub repository and the Curvenote Site with an Editor or Admin role.
:::

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

[template]: https://github.com/curvenote-examples/proceedings-submissions
[support]: mailto:support@curvenote.com
