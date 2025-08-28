---
title: Curvenote CLI Overview
short_title: Overview
---

# Curvenote CLI Overview

## Overview
Install and use the Curvenote command line interface to create, manage, and deploy scientific content and websites

The Curvenote CLI provides modern tooling for technical writing, reproducible science, and creating scientific & technical websites. It enables local content transformations, collaborative writing workflows, and seamless deployment to the web.

## Before You Start

Make sure you have:
- Node.js version 14 or higher installed
- Access to a terminal or command prompt
- Understanding of basic command line operations
- A Curvenote account (for authentication features)

## 1. Install the CLI

Get the Curvenote CLI tool:

```shell
npm install -g curvenote
```

**Verify installation:**
```shell
curvenote --version
```

**Get help:**
```shell
curvenote --help
```

## 2. Understand CLI Capabilities

The Curvenote CLI provides comprehensive tools for:

**Content Creation**: Create and edit scientific & technical websites, including Jupyter Notebooks

**Local Development**: Build and preview content locally with live reload

**Content Sync**: Sync articles and notebooks from Curvenote platform

**Export Options**: Export to PDF, Word, LaTeX, and MyST Markdown formats

**Deployment**: Deploy sites to curve.space or custom domains

## 3. Key CLI Features

**Open Source**: MIT License, available on [GitHub](https://github.com/curvenote/curvenote)

**LaTeX Templates**: 100s of templates for various scientific journals

**Collaborative Workflows**: Bridge gap between technical and non-technical users

**Local Processing**: All content transformations happen locally

**Version Control**: Integrates with Git for collaborative development

## 4. Basic Workflow

**Initialize project**: `curvenote init` to create new projects

**Start development**: `curvenote start` for local preview

**Build content**: `curvenote build` to process content

**Deploy site**: `curvenote deploy` to publish online

**Sync content**: `curvenote pull` to get latest changes

## 5. Integration Options

**GitHub Actions**: Automated deployment and previews

**Jupyter Integration**: Direct notebook support and execution

**MyST Markdown**: Full support for scientific document features

**Custom Domains**: Deploy to your own domain names

**API Access**: Programmatic access to Curvenote features

## Next Steps

- [Install Curvenote CLI →](./installing.md)
- [Set Up Authentication →](./authentication.md)
- [Learn Commands →](./commands.md)

---

💡 **Tip:** Start with `curvenote init` to quickly create a new project and see your content rendered locally. The CLI provides immediate feedback and live previews as you work.

⚡ **Important: CLI Best Practices**

- **Keep CLI updated**: Use `npm update -g curvenote` regularly
- **Use local preview**: Always test with `curvenote start` before deploying
- **Version control**: Commit your `curvenote.yml` configuration files
- **Authentication**: Set up API tokens for private content access
- **Documentation**: Check `curvenote --help` for command options
