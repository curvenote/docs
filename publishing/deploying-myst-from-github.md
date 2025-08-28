---
title: Deploying to curve.space from GitHub
short_title: Deploying from GitHub
description: Complete guide to deploying Curvenote sites to curve.space using GitHub Actions for automated publishing
---

# Deploying to curve.space from GitHub

Curvenote provides a deployment action in the GitHub Marketplace, allowing you to easily add automated deployment to your repository. This guide takes you through the steps of using GitHub to version your website and collaborate with others, while also using GitHub Actions to deploy your website.

## Overview

By the end of this guide, you will understand how to set up automated deployment from GitHub to curve.space, including workflow configuration, secret management, and best practices for continuous deployment.

## Before You Start

**Prerequisites:**
- **Curvenote Project**: An initialized Curvenote project in a local folder
- **GitHub Repository**: The local folder must also be a GitHub repository
- **Basic Git Knowledge**: Understanding of Git operations and GitHub workflows

**Setup Requirements:**
- To initialize your Curvenote project, see [Start with a local folder](./tutorial-deploy-local.md)
- To initialize your Git repository, see GitHub's guides on [git init](https://github.com/git-guides/git-init), [creating a repo](https://docs.github.com/en/get-started/quickstart/create-a-repo), and [managing remotes](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)

## 1. Repository Configuration

After working with a Curvenote website locally, a number of files and folders will be created within your local folder alongside your content. Some of these should be committed to `git`, while others should be ignored.

**Files to Commit:**
- **`curvenote.yml` files**: Commit all configuration files (root and subfolder configurations)
- **Content files**: All your articles, notebooks, and media files
- **Documentation**: README files and project documentation

**Files to Ignore:**
- **`_build/` folder**: Add to `.gitignore` - used only for caching local build assets
- **Temporary files**: Any temporary or generated files
- **Environment files**: Local environment configurations

## 2. GitHub Actions Setup

Curvenote provides a deployment action in the GitHub Marketplace for automated deployment to your repository.

**Action Overview:**
The Curvenote Deploy action automatically builds and deploys your site to curve.space whenever you push changes to your main branch.

**Adding the Workflow:**
1. **Create Workflow File**: Create `.github/workflows/deploy.yml` in your repository
2. **Configure Workflow**: Add the following YAML configuration:

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

**Workflow Triggers:**
- **Push to main**: Automatically deploys when changes are pushed to the main branch
- **Manual triggers**: Can be configured for manual deployment when needed
- **Pull request previews**: Optional preview deployments for pull requests

## 3. API Token Configuration

A Curvenote API token is required for the deployment action to authenticate with Curvenote services.

**Token Generation:**
1. **Access Curvenote**: Go to [curvenote.com](https://curvenote.com/profile?settings=true&tab=profile-api&subtab=general)
2. **Generate Token**: Create a new API token for your user account
3. **Set Permissions**: Ensure the user account has appropriate team access and rights

**GitHub Secrets Setup:**
1. **Repository Secrets**: Navigate to your repository settings and add a new repository secret
2. **Secret Name**: Use `CURVENOTE_TOKEN` as the secret name
3. **Secret Value**: Set the value to your API token string
4. **Environment Variables**: The workflow references the secret using `${{ secrets.CURVENOTE_TOKEN }}`

**Security Best Practices:**
- **Separate Tokens**: Use different tokens for different environments
- **Token Rotation**: Regularly rotate API tokens for security
- **Minimal Permissions**: Use tokens with the minimum required permissions
- **Access Monitoring**: Monitor token usage and revoke unused tokens

## 4. Deployment Process

Once configured, the deployment process is fully automated:

**Automatic Deployment:**
1. **Push Changes**: Commit and push your changes to the main branch
2. **Action Trigger**: GitHub Actions automatically detects the push
3. **Build Process**: Curvenote builds your site with the latest changes
4. **Deployment**: The built site is deployed to curve.space
5. **Status Update**: Success or failure status is reported back to GitHub

**Deployment Status:**
- **Success ✅**: Content was built and site deployed correctly
- **Failure ❌**: Check the action logs for detailed error information
- **Pending ⏳**: Deployment is in progress

**Monitoring Deployments:**
- **Actions Tab**: View deployment status in the Actions tab on your repository
- **Logs**: Click on the action to see detailed build and deployment logs
- **Notifications**: Set up notifications for deployment status updates

## 5. Advanced Configuration

For more complex deployment scenarios, consider these advanced features:

**Linked Projects:**
If your website project includes other linked projects on [curvenote.com](https://curvenote.com), you can automatically include the latest changes from those projects on deployment:

```yaml
steps:
  - uses: actions/curvenote-deploy@v1
    with:
      pull: true
```

**Environment-specific Deployments:**
- **Development**: Deploy to development environments for testing
- **Staging**: Pre-production validation and review
- **Production**: Final deployment to live sites

**Conditional Deployment:**
- **File-based Triggers**: Deploy only when specific files change
- **Branch-specific Behavior**: Different deployment strategies for different branches
- **User-based Permissions**: Control who can trigger deployments

## 6. Development Workflows

In many cases, you'll want to push working changes to Git without triggering a deployment of your site. Here are several strategies:

**Branch-based Development:**
- **Feature Branches**: Create branches for feature development
- **Pull Requests**: Review changes via pull requests into the main branch
- **Selective Merging**: Only merge when ready to deploy

**Development Branch Strategy:**
- **Long-lived Dev Branch**: Create a `dev` or `develop` branch for team collaboration
- **Feature Integration**: Regularly integrate feature branches into dev
- **Production Deployment**: Merge dev into main when ready for production

**Alternative Deployment Branches:**
- **Release Branch**: Deploy from a separate `release` branch instead of main
- **Custom Triggers**: Modify the workflow to deploy from different branches

```yaml
on:
  push:
    branches:
      - release
```

## 7. Troubleshooting

Common deployment issues and their solutions:

**Authentication Issues:**
- **Token Validation**: Verify that your API token is valid and not expired
- **Permission Checks**: Ensure the token has the required permissions
- **Repository Access**: Confirm the token can access the target repository
- **Team Membership**: Verify the user account is part of the required team

**Build Failures:**
- **Configuration Errors**: Check `curvenote.yml` syntax and configuration
- **Dependency Issues**: Verify all required dependencies are available
- **Content Errors**: Check for syntax errors in markdown or notebook files
- **Resource Limits**: Check for resource constraints or rate limiting

**Deployment Issues:**
- **Network Connectivity**: Ensure stable network connectivity for external services
- **Service Availability**: Check if Curvenote services are available
- **Quota Limits**: Verify you haven't exceeded deployment quotas
- **Domain Configuration**: Check domain and DNS settings

## 8. Best Practices

Follow these best practices for effective deployment management:

**Repository Management:**
- **Clean Commits**: Use meaningful commit messages and clean Git history
- **Branch Protection**: Enable branch protection for main branches
- **Code Review**: Require pull request reviews before merging
- **Version Control**: Use semantic versioning for releases

**Deployment Strategy:**
- **Automated Testing**: Implement automated testing before deployment
- **Rollback Plans**: Have strategies for quickly rolling back failed deployments
- **Monitoring**: Set up monitoring and alerting for deployment status
- **Documentation**: Keep deployment documentation current

**Security Considerations:**
- **Secret Management**: Never expose secrets in logs or outputs
- **Access Control**: Limit access to deployment configuration and secrets
- **Token Security**: Rotate tokens regularly and monitor usage
- **Environment Isolation**: Use different tokens for different environments

## Next Steps

- [GitHub Actions for Publishing →](./github-actions.md)
- [Managing Submissions using GitHub →](./submissions-using-github.md)
- [Integrated Previews →](./integrated-previews.md)
- [GitHub Integration Reference →](../integrations/github.md)
