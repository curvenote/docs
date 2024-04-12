---
title: Deploying from GitHub
description: >-
  Curvenote provides a deployment action in the GitHub Marketplace, allowing you
  to easily add automated deployment to your repository.
thumbnail: thumbnails/github-action.png
---

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/fg97vLEiR1dtnqgL8oQj.5"}

In this guide, we’ll take you through the steps of using GitHub to version your website and collaborate with others, while also using GitHub Actions to deploy your website.

**In this guide you will learn about:**

- What to commit to your repository on GitHub
- Adding a CI workflow, using the Curvenote Deploy action from the GitHub action marketplace
- How to check the status of your deployment
- Good development practices, to avoid deploying draft content to your site

```{important}
**Before you Start**

This guide assumes that (1) you already have an initialized curvenote project in a local folder, and (2) that this local folder is also a GitHub repository.

1. to initialize your curvenote project see [Start with a local folder](oxa:Eh6WvY9NT46Ds4lE3OqJ/awl1FKZAY7CpiX7GWWXS "Start with a local folder")
2. to initialize your git repository see GitHub’s guides on [git init](https://github.com/git-guides/git-init), [creating a repo](https://docs.github.com/en/get-started/quickstart/create-a-repo) and [managing remotes](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)

```

## What to commit to git

After working with a curvenote website locally, a number of files and folders will be created within your local folder alongside your content. Some of these should be committed to `git`, while others should be ignored.

- add `curvenote.yml` files to `git` - there will be at least one file at the root of your repo and potentially others in content subfolders for more complex configurations
- ignore the `_build/` folder by adding it to your `.gitignore` - this is only used for a caching local build assets when using `curvenote start`

## Deploying from CI using GitHub Actions

Curvenote provides a deployment action in the GitHub Marketplace, allowing you to easily add automated deployment to your repository.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-xAQ7dOyRVASM2PDWJBDg-v1.png
:name: QF7z0XV7wO
:align: center
:width: 80%

Curvenote Deploy action on the [GitHub Marketplace](https://github.com/marketplace/actions/curvenote-deploy)
```

### Add a new GitHub workflow

In your repository create a new file on the following path `.github/wofklows/deploy.yml`. And then copy the following `yml` into that file.

```yaml
name: Curvenote Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to curve.space
        uses: curvenote/action-deploy@v1
        env:
          CURVENOTE_TOKEN: ${{ secrets.CURVENOTE_TOKEN }}
```

This will run on any push to the `main` branch and requires an API token to work.

### Generate a new API token

It is good practice to use separate API tokens for your different environments, making it easy to remove one of needed whilst not affecting others. Generate a new API Token as described in [Authorization](https://curvenote.com/@docs/cli/authorization).

On GitHub, navigate to your repository and follow [this guide from GitHub](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to add a new “Repository Secret”. This secret should be named `CURVENOTE_TOKEN` and the value set to the API token string.

### Commit, push and test

If you have not already, commit your changes and push to `main`. The github action will run automatically and will complete with success ✅ if the content was built and site deployed correctly.

```{figure} images/Eh6WvY9NT46Ds4lE3OqJ-1phwIyExAdZmNQk0O8XM-v1.png
:name: AzfNhoF8ot
:align: center
:width: 100%

You can see the status of your deployments in the Actions tab on your repository in GitHub. On any failure you will need to click on the action and check the logs to debug the issue.
```

### Pulling content from linked projects

If your website project, includes other linked projects on [curvenote.com](Curvenote.com) then you may want to automatically include the latest changes from those projects on deployment.

To do so modify the `.github/workflows/deploy.yml` file to include the following option:

```yaml
steps:
  - uses: actions/curvenote-deploy@v1
    with:
      pull: true
```

+++ {"oxa":"oxa:Eh6WvY9NT46Ds4lE3OqJ/3Io0eVOdUPDPiXq6Feow.2"}

## Development practices

In many cases, you’ll want to be able to push working changes to git without triggering a deployment of your site. There are a few different ways you can achieve this.

### Develop on branches

Most suitable for single developers or small teams, simply create a branch for any changeset you are making and review this via a Pull Request (PR) into the `main` branch. Only merge your PR when you are ready to deploy your changes.

### Create a `dev` branch

Most suitable for teams, creating a long lived `dev` or `develop` branch allows multiple developers to easily collaborate and work on multiple feature branches, while still being able to integrate those changes into `dev` regularly. When a changeset is ready to deploy `dev` should be merged into `main`, usually via a PR for review. To learn more about development practices like this [read about gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Deploy from a different branch

The last two scenarios both deploy from main which is convenient and requires no change to the default workflow setup provided above. We recommend deploying from `main` and using one of those strategies. However, if you do want to deploy from a separate `release` branch, simply modify the `.github/workflows/deploy.yml` and replace `main` with the new branch name e.g. `release`.

```yaml
on:
  push:
    branches:
      - release
```
