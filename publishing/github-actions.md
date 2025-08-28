---
title: GitHub Actions for Publishing
short_title: GitHub Actions
description: Complete guide to setting up and configuring GitHub Actions for automated publishing workflows with Curvenote
---

# GitHub Actions for Publishing

Curvenote provides GitHub actions to connect your GitHub repository to a Curvenote Site and run your [editorial workflow from pull requests](./submissions-using-github.md). The actions are available on GitHub ([curvenote/actions](https://github.com/curvenote/actions)).

## Overview

By the end of this guide, you will understand how to configure GitHub Actions for automated publishing workflows, including preview generation, validation checks, and deployment automation.

## Before You Start

**Prerequisites:**
- **Curvenote Site**: You must have an active Curvenote site to use this action (see [Deploying from GitHub](./deploying-myst-from-github.md) for setup)
- **API Token**: A Curvenote API token is required (see [Secret Management](#secret-management) below)
- **GitHub Repository**: A GitHub repository with your Curvenote project
- **Basic GitHub Knowledge**: Understanding of pull requests, issues, and GitHub Actions

## 1. Basic Workflow Setup

Start with a basic GitHub Actions workflow for your Curvenote project:

```yaml
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

**Workflow Components:**
- **Strategy**: Determines what actions should be run based on repository structure
- **Preview**: Posts the submission to Curvenote as a draft or ongoing submission
- **Check**: Validates each submission against venue criteria
- **Summary**: Posts information back to the GitHub pull request

## 2. Action Configuration Options

Curvenote's integrated previews are highly customizable. You can configure your workflow to generate different types of previews based on your project's needs:

**Preview Types:**
- **Branch Previews**: Every commit on a branch generates a unique preview, allowing for easy tracking of changes in real-time
- **Pull Request**: When a pull request is opened, a **draft** preview can be generated for review and iteration

**Key Configuration Parameters:**

`monorepo` (boolean)
: When `true` indicates that this repository contains multiple projects that should be published. For example, if you have multiple articles, or tutorials that should be previewed and submitted when there are changes in the repository.

`id-pattern-regex` (string - regex)
: A regular expression that all IDs must follow, by default this matches a UUID. This can be used to enforce that all project IDs follow a specific pattern, such as the conference name + year. The ID must also satisfy alphanumeric characters, dashes, and underscores.

`enforce-single-folder` (boolean)
: When `true`, an error will be raised if a pull-request is touching multiple different folders. This can either be `true` or a label string. Multiple labels can be added with comma-separated values. If labels are used to control this property, the pull request will only fail in PRs with these labels.

`preview-label` (string)
: A pull-request label that indicates the preview and checks should be run. Multiple labels can be added with comma-separated values. If no label is supplied, the preview will run on all PRs.

`submit-label` (string)
: A pull-request label that indicates the branch should be turned into a submission. This will notify all curators of the Curvenote site. The submission identifiers will be written directly to the repository in a commit, and the submission will be available to be merged on the Curvenote platform.

## 3. Advanced Workflow Features

For more complex publishing scenarios, consider these advanced features:

**Multi-Environment Support:**
- **Development**: Preview builds for testing and development
- **Staging**: Pre-production validation and review
- **Production**: Final publication and deployment

**Conditional Execution:**
- **File-based Triggers**: Run actions only when specific files change
- **Branch-specific Behavior**: Different configurations for different branches
- **User-based Permissions**: Control who can trigger specific actions

**Integration Options:**
- **External Services**: Connect with other CI/CD tools and services
- **Notification Systems**: Automated alerts for build status and issues
- **Analytics**: Track workflow performance and usage patterns

## 4. Secret Management

A Curvenote API token is required for GitHub Actions to authenticate with Curvenote services.

**Token Generation:**
1. **Access Curvenote**: Go to [curvenote.com](https://curvenote.com/profile?settings=true&tab=profile-api&subtab=general)
2. **Generate Token**: Create a new API token for your user account
3. **Set Permissions**: Ensure the user account has appropriate team access and rights

**GitHub Secrets Setup:**
1. **Repository Secrets**: Add the token as a secret within your [GitHub Repository or Environment](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
2. **Secret Name**: Use `CURVENOTE_TOKEN` as the secret name
3. **Environment Variables**: Reference the secret in your workflow using `${{ secrets.CURVENOTE_TOKEN }}`

**Security Best Practices:**
- **Token Rotation**: Regularly rotate API tokens for security
- **Minimal Permissions**: Use tokens with the minimum required permissions
- **Environment Isolation**: Use different tokens for different environments
- **Access Monitoring**: Monitor token usage and revoke unused tokens

## 5. Workflow Optimization

Optimize your GitHub Actions workflows for better performance and reliability:

**Performance Improvements:**
- **Caching**: Cache dependencies and build artifacts to speed up builds
- **Parallel Execution**: Run independent jobs in parallel when possible
- **Resource Optimization**: Use appropriate runner types and resource limits
- **Build Optimization**: Minimize build time by excluding unnecessary files

**Reliability Enhancements:**
- **Error Handling**: Implement proper error handling and retry logic
- **Timeout Management**: Set appropriate timeouts for long-running jobs
- **Fallback Strategies**: Provide fallback options for failed builds
- **Monitoring**: Track workflow success rates and performance metrics

## 6. Troubleshooting Common Issues

Resolve common GitHub Actions issues with these troubleshooting steps:

**Authentication Issues:**
- **Token Validation**: Verify that your API token is valid and not expired
- **Permission Checks**: Ensure the token has the required permissions
- **Repository Access**: Confirm the token can access the target repository
- **Team Membership**: Verify the user account is part of the required team

**Build Failures:**
- **Configuration Errors**: Check workflow syntax and configuration parameters
- **Dependency Issues**: Verify all required dependencies are available
- **Resource Limits**: Check for resource constraints or rate limiting
- **Network Issues**: Ensure stable network connectivity for external services

**Performance Issues:**
- **Build Time**: Optimize build processes and reduce unnecessary steps
- **Resource Usage**: Monitor resource consumption and optimize accordingly
- **Caching**: Implement effective caching strategies for dependencies
- **Parallelization**: Use parallel execution where possible

## 7. Best Practices

Follow these best practices for effective GitHub Actions implementation:

**Workflow Design:**
- **Modular Structure**: Break complex workflows into smaller, focused jobs
- **Clear Naming**: Use descriptive names for workflows, jobs, and steps
- **Documentation**: Document workflow purpose and configuration options
- **Version Control**: Use specific versions of actions for stability

**Security Considerations:**
- **Secret Management**: Never expose secrets in logs or outputs
- **Permission Minimization**: Use the minimum required permissions
- **Token Security**: Rotate tokens regularly and monitor usage
- **Access Control**: Limit access to workflow configuration and secrets

**Maintenance and Monitoring:**
- **Regular Updates**: Keep actions and dependencies up to date
- **Performance Monitoring**: Track workflow performance and optimize as needed
- **Error Tracking**: Monitor and address recurring issues
- **Documentation Updates**: Keep documentation current with workflow changes

## 8. Integration Examples

Explore these integration examples for common publishing scenarios:

**Conference Proceedings:**
- **Multi-author Support**: Handle submissions from multiple authors
- **Review Workflow**: Automated review assignment and tracking
- **Publication Pipeline**: Streamlined publication process
- **Archive Management**: Long-term storage and accessibility

**Journal Submissions:**
- **Peer Review**: Integrated peer review workflow
- **Editorial Process**: Automated editorial decision tracking
- **Version Control**: Complete submission history and versioning
- **Publication Standards**: Automated compliance checking

**Lab Group Websites:**
- **Collaborative Writing**: Multi-author collaboration workflows
- **Content Management**: Automated content organization and updates
- **Publication Scheduling**: Controlled publication timing
- **Access Control**: Role-based access to different content areas

## Next Steps

- [Managing Submissions using GitHub →](./submissions-using-github.md)
- [Deploying from GitHub →](./deploying-myst-from-github.md)
- [Integrated Previews →](./integrated-previews.md)
- [GitHub Integration Reference →](../integrations/github.md)
