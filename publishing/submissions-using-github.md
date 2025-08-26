---
title: Managing Submissions using GitHub
short_title: Submissions using GitHub
description: A comprehensive guide for setting up submission repositories for conferences, proceedings, or lab groups using GitHub Actions and Curvenote
---

# Managing Submissions using GitHub

This guide is designed for editorial teams at journals, lab group websites, or personal sites who are managing a focused collection of articles, such as conference proceedings, consortium articles, or lab-group papers.

## Overview

By the end of this guide, you will understand how to set up a GitHub repository to accept submissions, conduct open peer-review, make publication decisions, and publish content through Curvenote.

## Before You Start

**Prerequisites:**
- **Technical Skills**: Basic understanding of GitHub operations (pull requests, issues, GitHub actions, permission management)
- **Git Knowledge**: Understanding of Git for commits, merges, and branches
- **Access**: Editorial team members should have appropriate access to the GitHub repository and Curvenote Site with Editor or Admin role
- **Starting Point**: A local MyST Project prepared using the [Submitting Your Work](authoring/submitting-your-work.md) guide

**Required Setup:**
- A Curvenote site to host your content (contact [Curvenote Support](mailto:support@curvenote.com) to create a site for your community)

## 1. Repository Setup

The repository on GitHub will serve as the central hub for submissions, reviews, and publications. The repository is organized with a directory dedicated to submissions, such as an `articles` folder. This repository may include a template example that authors can copy. The `README.md` should have brief guidelines for the submissions process to help authors with the expected format of the papers submitted, for example, as LaTeX or MyST Markdown.

**Getting Started:**
1. **Clone the Template Repository**: Use our [Template Repository](https://github.com/curvenote-examples/proceedings-submissions) which includes basic instructions for authors and a GitHub action that runs on every pull request
2. **Fork the Repository**: Start by forking the template repository to host all submissions, reviews, and accepted papers
3. **Add Team Members**: Add members of your editorial team as collaborators in the repository (you do not need to add prospective authors as they will create pull-requests to add their submissions)

## 2. Repository Structure

The template repository includes the following key components:

**README.md**: Outlines the purpose of the repository, submission instructions, and the review process. It acts as the first point of information for potential contributors and reviewers.

**Templates**: Located in the `articles` folder, these templates demonstrate to authors how to create submissions. They include placeholders for all required elements such as the title, authors, abstract, sections, and supporting materials.

**GitHub Action**: Curvenote utilizes GitHub Actions to automate initial checks and generate previews of submissions. The actions automatically generate a preview of the manuscript as it would appear in publication, and these are linked within the pull request comments for easy access by reviewers.

## 3. GitHub Actions Configuration

Curvenote's GitHub Actions provide automated workflow management for your submission process:

**Automated Features:**
- **Initial Checks**: Validation of submission format and requirements
- **Preview Generation**: Automatic creation of publication-ready previews
- **Pull Request Integration**: Seamless integration with GitHub's review process
- **Status Updates**: Real-time feedback on submission status

**Configuration Options:**
- **Monorepo Support**: Handle multiple submissions in a single repository
- **Custom Validation**: Enforce specific submission requirements and formats
- **Preview Labels**: Control when previews are generated based on pull request labels
- **Submission Workflow**: Automate the transition from review to publication

## 4. Editorial Workflow

The GitHub-based editorial workflow streamlines the review and publication process:

**Submission Process:**
1. **Author Fork**: Authors fork the repository and create feature branches
2. **Pull Request**: Authors submit pull requests with their manuscripts
3. **Automated Checks**: GitHub Actions run validation and generate previews
4. **Review Process**: Reviewers access previews and provide feedback via GitHub
5. **Iteration**: Authors update their submissions based on feedback
6. **Approval**: Once approved, submissions are merged and published

**Review Management:**
- **Preview Access**: Reviewers can view live previews of submissions
- **Comment Integration**: All feedback is tracked within GitHub pull requests
- **Version Control**: Complete history of changes and iterations
- **Collaboration**: Multiple reviewers can work simultaneously

## 5. Publication Process

Once submissions are approved and merged, the publication process is automated:

**Automated Publication:**
- **Content Building**: Curvenote automatically builds the final publication
- **Site Updates**: Changes are immediately reflected on your Curvenote site
- **Version Management**: All versions are tracked and accessible
- **Distribution**: Published content is available through your configured channels

**Quality Assurance:**
- **Format Validation**: Ensures all submissions meet publication standards
- **Link Verification**: Checks all internal and external links
- **Content Review**: Final validation before publication
- **Error Handling**: Graceful handling of any publication issues

## 6. Best Practices

Follow these best practices for effective submission management:

**Repository Management:**
- **Clear Documentation**: Provide comprehensive submission guidelines
- **Template Usage**: Use consistent templates for all submissions
- **Version Control**: Maintain clean Git history and meaningful commit messages
- **Access Control**: Manage permissions appropriately for different user roles

**Workflow Optimization:**
- **Automated Validation**: Leverage GitHub Actions for consistent quality checks
- **Preview Testing**: Test preview generation before going live
- **Feedback Integration**: Use GitHub's review features effectively
- **Performance Monitoring**: Track workflow efficiency and identify bottlenecks

## 7. Troubleshooting

Common issues and solutions for GitHub-based submissions:

**Setup Issues:**
- **Repository Access**: Ensure all team members have appropriate permissions
- **Action Configuration**: Verify GitHub Actions are properly configured
- **Token Management**: Check that API tokens are valid and have correct permissions
- **Template Issues**: Ensure templates are up-to-date and functional

**Workflow Issues:**
- **Preview Failures**: Check action logs for build or configuration errors
- **Validation Errors**: Review submission requirements and format specifications
- **Permission Problems**: Verify user access and repository settings
- **Integration Issues**: Test GitHub Actions in isolation before full deployment

## 8. Advanced Configuration

For more complex submission workflows, consider these advanced features:

**Custom Validation:**
- **Format Enforcement**: Custom rules for submission structure and content
- **Quality Checks**: Automated validation of figures, references, and metadata
- **Integration Testing**: Comprehensive testing of all submission components
- **Performance Optimization**: Efficient handling of large numbers of submissions

**Workflow Customization:**
- **Multi-stage Review**: Complex review processes with multiple approval stages
- **Conditional Publication**: Publication rules based on submission characteristics
- **Integration APIs**: Connect with external systems and databases
- **Analytics**: Track submission metrics and workflow performance

## Next Steps

- [GitHub Actions for Publishing →](./github-actions.md)
- [Deploying from GitHub →](./deploying-myst-from-github.md)
- [Integrated Previews →](./integrated-previews.md)
- [GitHub Integration Reference →](../integrations/github.md)
