---
title: GitHub Integration
short_title: GitHub
description: Complete guide to integrating Curvenote with GitHub for version control, collaboration, and automated deployment
---

# GitHub Integration

Curvenote provides comprehensive GitHub integration for version control, collaboration, and automated deployment of your scientific content.

## Overview

GitHub integration enables you to:
- **Version control** your Curvenote projects with Git
- **Collaborate** with others through pull requests and reviews
- **Automate deployment** using GitHub Actions
- **Host computational environments** for reproducible research
- **Manage editorial workflows** from submission to publication

## Quick Reference

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **GitHub Actions** | Automated deployment and previews | [GitHub Actions →](../github-actions.md) |
| **Deployment** | Deploy to curve.space from GitHub | [Deploying from GitHub →](../deploying-myst-from-github.md) |
| **Editorial Workflow** | Pull request-based publishing | [Submissions using GitHub →](../submissions-using-github.md) |
| **CLI Integration** | Command-line GitHub workflows | [CLI Workflows →](../cli/workflows.md) |
| **Content Linking** | Link to GitHub repositories | [Link Data & Code →](../authoring/link-data-code.md) |
| **Computational** | Host environments on GitHub | [Live Compute →](../Computational/live-compute.md) |

## Core Integration Features

### 1. Version Control & Collaboration

**Git Repository Setup:**
```bash
# Initialize Git repository
git init

# Add Curvenote project files
git add .

# Commit changes
git commit -m "Initial Curvenote project"

# Connect to GitHub
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

**Collaborative Workflow:**
- **Fork repositories** for independent work
- **Create branches** for feature development
- **Submit pull requests** for review and merging
- **Use GitHub Issues** for tracking tasks and bugs

### 2. GitHub Actions for Automation

**Deployment Workflow:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Curvenote
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: curvenote/actions/.github/workflows/publish.yml@v1
        with:
          token: ${{ secrets.CURVENOTE_TOKEN }}
          github: ${{ secrets.GITHUB_TOKEN }}
```

**Available Actions:**
- **`curvenote/actions/.github/workflows/publish.yml`** - Deploy and preview
- **`curvenote/actions/.github/workflows/check.yml`** - Validation and testing
- **`curvenote/actions/.github/workflows/export.yml`** - Export to various formats

### 3. Editorial Workflow Integration

**Pull Request Process:**
1. **Fork repository** to your GitHub account
2. **Create feature branch** for your article
3. **Submit pull request** with your changes
4. **Automated checks** run validation and previews
5. **Review process** with inline comments and suggestions
6. **Merge and publish** when approved

**Automated Features:**
- **Preview generation** - Live preview accessible via GitHub comment
- **Validation checks** - Format, links, and content validation
- **Status updates** - Real-time feedback on pull request status
- **Integration comments** - Automatic posting of build results

### 4. Content Linking

**Link to GitHub Repositories:**
```markdown
[GitHub Repository](https://github.com/username/project-name)

{download}`Download Code <https://github.com/username/project-name/archive/main.zip>`

{code-cell}
---
tags: [hide-input]
---
!git clone https://github.com/username/project-name.git
```

**Supported Link Types:**
- **Repository links** - Direct links to GitHub repos
- **File links** - Links to specific files or notebooks
- **Release links** - Links to tagged releases
- **Issue links** - Links to GitHub issues and discussions

### 5. Computational Environment Hosting

**BinderHub Integration:**
```yaml
# environment.yml for GitHub-hosted environments
name: computational-research
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
  - pandas>=1.5.0
  - numpy>=1.21.0
  - matplotlib>=3.5.0
  - jupyterlab>=3.5.0
  - pip
  - pip:
    - jupyterlab-myst>=0.2.0
    - myst-nb>=0.17.0
```

**Environment Setup:**
- **Public repositories** - Automatically available on mybinder.org
- **Private repositories** - Use Curvenote's private BinderHub
- **Environment files** - `environment.yml`, `requirements.txt`, `apt.txt`
- **Repository structure** - Standard Jupyter project layout

## Configuration

### Repository Setup

**Required Files:**
```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── curvenote.yml
├── environment.yml (optional)
├── requirements.txt (optional)
└── README.md
```

**GitHub Secrets:**
- **`CURVENOTE_TOKEN`** - Curvenote API token for deployment
- **`GITHUB_TOKEN`** - GitHub token for repository access

### Curvenote Configuration

**`curvenote.yml` with GitHub settings:**
```yaml
version: 1
project:
  title: "Your Project"
  description: "GitHub-integrated Curvenote project"
  
  # GitHub integration settings
  github:
    repository: "username/repo-name"
    branch: "main"
    workflow: "deploy.yml"
    
  # Deployment settings
  deployment:
    platform: "curve.space"
    domain: "your-site.curve.space"
    auto_deploy: true
```

## Best Practices

### Repository Organization

**Recommended Structure:**
```
project/
├── articles/           # Individual articles
├── notebooks/          # Jupyter notebooks
├── data/              # Data files (use Git LFS for large files)
├── environments/      # Environment configurations
├── docs/              # Documentation
└── .github/           # GitHub workflows and templates
```

**File Management:**
- **Use Git LFS** for large data files (>100MB)
- **Keep environments reproducible** with exact version pins
- **Document setup** in README files
- **Use meaningful commit messages** for better collaboration

### Security Considerations

**Token Management:**
- **Never commit tokens** to repositories
- **Use GitHub Secrets** for sensitive data
- **Rotate tokens regularly** for security
- **Limit token permissions** to minimum required

**Repository Security:**
- **Enable branch protection** for main branches
- **Require pull request reviews** before merging
- **Use signed commits** for verification
- **Regular security updates** for dependencies

### Performance Optimization

**Build Optimization:**
- **Cache dependencies** in GitHub Actions
- **Use shallow clones** for faster checkouts
- **Optimize image sizes** for computational environments
- **Parallel workflows** for independent tasks

**Repository Optimization:**
- **Clean Git history** with regular maintenance
- **Archive old branches** to reduce repository size
- **Use .gitignore** to exclude unnecessary files
- **Monitor repository size** and performance

## Troubleshooting

### Common Issues

**Deployment Failures:**
```bash
# Check GitHub Actions logs
# Verify token permissions
# Ensure repository access

# Common solutions:
# 1. Regenerate CURVENOTE_TOKEN
# 2. Check branch protection rules
# 3. Verify workflow file syntax
# 4. Ensure all required files exist
```

**Authentication Issues:**
- **Token expired** - Generate new token in Curvenote settings
- **Insufficient permissions** - Check token scope and repository access
- **Repository not found** - Verify repository URL and access rights

**Build Failures:**
- **Missing dependencies** - Check environment files
- **Syntax errors** - Validate YAML and markdown files
- **Resource limits** - Optimize computational requirements

### Getting Help

**Support Resources:**
- **GitHub Actions logs** - Detailed error information
- **Curvenote documentation** - Comprehensive guides
- **GitHub community** - Community support and examples
- **Curvenote support** - Direct technical assistance

**Debugging Steps:**
1. **Check GitHub Actions** for detailed error logs
2. **Verify configuration** files and settings
3. **Test locally** with Curvenote CLI
4. **Review recent changes** that might have caused issues
5. **Check dependencies** and environment compatibility

## Next Steps

- [Set up GitHub Actions →](../github-actions.md)
- [Deploy from GitHub →](../deploying-myst-from-github.md)
- [Use GitHub for submissions →](../submissions-using-github.md)
- [Configure CLI workflows →](../cli/workflows.md)
- [Link to GitHub repositories →](../authoring/link-data-code.md)
- [Host computational environments →](../Computational/live-compute.md)
- [Learn about best practices →](../Computational/best-practices.md)
