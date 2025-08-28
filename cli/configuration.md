---
title: Configure Curvenote Projects
short_title: Configuration
---

# Configure Curvenote Projects

## Overview
Configure your Curvenote projects using YAML configuration files to customize site settings, project metadata, and deployment options

Curvenote uses YAML configuration files (`curvenote.yml` or `myst.yml`) to define project settings, site configuration, and deployment options. These files control everything from site appearance to export formats and domain settings.

## Before You Start

Make sure you have:
- A Curvenote project initialized
- Access to edit YAML configuration files
- Understanding of your project requirements
- Basic knowledge of YAML syntax

## 1. Understand Configuration Files

Learn about the main configuration files:

**curvenote.yml**: Main project configuration file

**myst.yml**: Alternative configuration file (same format)

**Project settings**: Metadata, authors, keywords, exports

**Site settings**: Domains, navigation, branding, themes

**Build settings**: Templates, plugins, custom directives

## 2. Configure Project Metadata

Set up basic project information:

```yaml
version: 1
project:
  id: your-project-id
  title: Your Project Title
  description: Brief project description
  keywords: [keyword1, keyword2, keyword3]
  authors:
    - name: Author Name
      email: author@example.com
      orcid: 0000-0000-0000-0000
      affiliations:
        - Institution Name
  github: https://github.com/username/repo
  copyright: Copyright 2024
```

## 3. Configure Site Settings

Set up your website configuration:

```yaml
site:
  title: Your Site Title
  domains:
    - your-site.curve.space
    - your-custom-domain.com
  logo: public/logo.svg
  logo_text: Your Brand
  nav:
    - title: Home
      url: /
    - title: About
      url: /about
  actions:
    - title: Contact
      url: /contact
  twitter: your-handle
  analytics_google: G-XXXXXXXXXX
```

## 4. Set Up Table of Contents

Configure your site's navigation structure:

```yaml
toc:
  - file: index.md
  - title: Getting Started
    children:
      - file: getting-started/install.md
      - file: getting-started/first-project.md
  - title: Documentation
    children:
      - file: docs/guide.md
      - file: docs/reference.md
```

## 5. Configure Export Options

Set up export formats and templates:

```yaml
project:
  exports:
    - format: pdf
      template: journal
    - format: word
      template: report
    - format: latex
      template: article
    - format: meca
  requirements:
    - requirements.txt
    - environment.yml
  resources:
    - data/**/*
    - figures/**/*
```

## 6. Set Up Computational Environment

Configure Jupyter and computational settings:

```yaml
project:
  jupyter: true
  requirements:
    - requirements.txt
    - apt.txt
  resources:
    - src/**/*
    - data/**/*
    - models/**/*
  exports:
    - format: meca
```

## 7. Customize Build Settings

Configure build and rendering options:

```yaml
project:
  plugins:
    - directives.mjs
    - custom-plugin.js
  abbreviations:
    CLI: Command Line Interface
    API: Application Programming Interface
  toc:
    name: true
    numbered: true
  references:
    bibliography: references.bib
    style: apa
```

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Set Up Authentication →](./authentication.md)
- [Deploy Your Site →](./deployment.md)

---

💡 **Tip:** Use YAML validation tools to check your configuration syntax. Most code editors provide YAML syntax highlighting and validation.

⚡ **Important: Configuration Best Practices**

- **Version control**: Always commit your configuration files to git
- **Backup configs**: Keep copies of working configurations
- **Test locally**: Use `curvenote start` to test configuration changes
- **Incremental changes**: Make small changes and test frequently
- **Document customizations**: Comment your configuration for team members
