---
title: GitHub Actions for Publishing
github: https://github.com/curvenote/actions
---

Curvenote provides GitHub actions to connect your GitHub repository to a Curvenote Site and run your [editorial workflow from pull requests](./submissions-using-github.md). The actions are available on GitHub ([curvenote/actions](https://github.com/curvenote/actions)).

:::{tip} Prerequisites
:class: dropdown
Site
: You must have an active Curvenote site to use this action. To publish to our free hosting service, see [](./tutorial-deploy-local.md).

Access
: A Curvenote API token is required. See [secret management](#secret-management) below.
:::

## Example Workflow

```{code-block} yaml
:filename: .github/workflows/publish.yml
:caption: A repository that runs actions on pull requests for a folder of submissions.
name: curvenote
on:
  pull_request:
    branches: ['main']
permissions:
  contents: read
  pull-requests: write
jobs:
  publish:
    uses: curvenote/actions/.github/workflows/publish.yml@v1
    with:
      monorepo: true
      id-pattern-regex: '^<MYJOURNAL-COLLECTION>-(?:[a-zA-Z0-9-_]{3,15})$'
      enforce-single-folder: true
      preview-label: paper
      submit-label: true
      venue: '<VENUE>'
      collection: '<COLLECTION>'
      kind: '<SUBMISSION-KIND>'
      path: papers/*
    secrets:
      CURVENOTE: ${{ secrets.CURVENOTE_TOKEN }}
      GITHUB: ${{ secrets.GITHUB_TOKEN }}
```

When set up for a `monorepo` (i.e. there is more than one submission in the GitHub repository), then the publish job will create an action workflow with 4 steps: (1) a **strategy**, which determines what actions should be run; (2) a **preview** which will post the submission to Curvenote as a draft or part of an ongoing submission; (3) a local **check** job that validates each submission against the venues criteria; and (4) a summary job that posts information back to the GitHub pull request.

:::{figure} ./images/github-action-overview.png
:::

### Action Options

Curvenote’s integrated previews are highly customizable. You can configure your workflow to generate different types of previews based on your project's needs:

- **Branch Previews**: Every commit on a branch generates a unique preview, allowing for easy tracking of changes in real-time.
- **Pull Request**: When a pull request is opened, a **draft** preview can be generated. This draft can be reviewed, commented on, and iterated upon without affecting the main branch.

By configuring the action, you can control the scope and depth of previews, ensuring that only necessary builds are triggered, reducing build times while still providing instant feedback on content changes.

`monorepo` (boolean)
: When `true` indicates that this repository contains multiple projects that should be published. For example, if you have multiple articles, or tutorials that should be previewed and submitted when there are changes in the repository.

`id-pattern-regex` (string - regex)
: A regular expression that all IDs must follow, by default this matches a UUID.

    This can be used to enforce that all project IDs follow a specific pattern, such as,
    the conference name + year.

    The ID must also satisfy alphanumeric characters, dashes, and underscores.

`enforce-single-folder` (boolean)
: When `true`, an error will be raised if a pull-request is touching multiple
different folders. This can either be `true` or a label string.
Multiple labels can be added with comma-separated values.

    If labels are used to control this property, the pull request will only fail in
    PRs with these labels.

    This can be used in conjunction with the `preview-label`, for example, if they
    are both `paper` then the PRs with those labels will be required to only make changes
    in a single folder and will not be previewed if that condition fails.
    However, you can add additional preview labels, e.g. `all-papers`, which will build
    previews for all papers, as the single folder condition is not enforced for that label.

`preview-label` (string)
: A pull-request label that indicates the preview and checks should be run.
Multiple labels can be added with comma-separated values.

    If no label is supplied, the preview will run on all PRs.

`submit-label` (string)
: A pull-request label that indicates the branch should be turned into a submission.
This will notify all curators of the Curvenote site.

    The submission identifiers will be written directly to the repository in a commit,
    and the submission will be available to be merged on the Curvenote platform.

    A submission will not happen unless both the `enforce-single-folder` and `preview-label`
    conditions are satisfied.

`venue` (string)
: The site or venue that this project is being submitted to.

`collection` (string)
: The venue's collection that this project is being submitted to.

`kind` (string)
: The kind of the submission, that must be a kind included in the `collection` being submitted to.

`path` (string - glob pattern)
: The root directory path(s) where the Curvenote CLI will be invoked. If `multiple` paths are being used, separate the `path` string with ','. The paths can also be glob-like patterns (but only one `*`), for example:

    ```yaml
    path: my/project
    path: my/paper, my/poster
    path: papers/*, posters/*
    ```

    The default path is the root of the repository.

`ref` (string)
: The branch, tag or SHA to checkout. When checking out the repository that triggered a workflow, this defaults to the reference or SHA for that event.

(secret-management)=

### Secret Management

A Curvenote API token is required. This can be added as a secret within your [GitHub Repository or Environment](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).

An API Token can be generated for any user account at [curvenote.com](https://curvenote.com/profile?settings=true&tab=profile-api&subtab=general), the user account used must be on the Team a associated with your site and have sufficient rights.
