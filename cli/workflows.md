---
title: CLI Workflows and Development
short_title: Workflows
---

# CLI Workflows and Development

## Overview
Learn common Curvenote CLI workflows for local development, content management, and deployment processes

The Curvenote CLI supports various workflows for different use cases. Whether you're developing locally, collaborating with teams, or deploying to production, these workflows help you work efficiently and maintain consistency.

## Before You Start

Make sure you have:
- Curvenote CLI installed and configured
- Authentication set up (for private content)
- Basic understanding of command line operations
- A project to work with

## 1. Local Development Workflow

Develop and preview content locally:

**Initialize project:**
```shell
curvenote init my-project
cd my-project
```

**Start local development:**
```shell
curvenote start
```

**Make changes** to your content files

**Preview automatically** - changes appear in browser

**Stop development:**
```shell
# Press Ctrl+C to stop server
```

## 2. Content Management Workflow

Manage and organize your content:

**Create new content:**
```shell
# Add new markdown files to content/
touch content/new-article.md
```

**Update table of contents:**
```shell
curvenote build --write-toc
```

**Pull latest changes:**
```shell
curvenote pull
```

**Check for issues:**
```shell
curvenote build --strict
```

## 3. Deployment Workflow

Deploy your site to production:

**Test locally first:**
```shell
curvenote start
# Check everything looks correct
```

**Build for deployment:**
```shell
curvenote build --clean
```

**Deploy to web:**
```shell
curvenote deploy
```

**Verify deployment:**
Visit your site URL to confirm changes

## 4. Collaborative Workflow

Work with team members:

**Clone shared project:**
```shell
curvenote clone https://curvenote.com/@team/project
```

**Pull latest changes:**
```shell
curvenote pull
```

**Make your changes** locally

**Test changes:**
```shell
curvenote start
```

**Deploy updates:**
```shell
curvenote deploy
```

## 5. CI/CD Workflow

Automate deployment with GitHub Actions:

**Set up GitHub repository** with your project

**Add GitHub Action:**
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: curvenote/action-deploy@v1
        env:
          CURVENOTE_TOKEN: ${{ secrets.CURVENOTE_TOKEN }}
```

**Push changes** to trigger automatic deployment

## 6. Export Workflow

Export content to different formats:

**Export to PDF:**
```shell
curvenote export pdf
```

**Export to Word:**
```shell
curvenote export word
```

**Export to LaTeX:**
```shell
curvenote export latex
```

**Export MECA archive:**
```shell
curvenote export meca
```

## 7. Troubleshooting Workflow

Resolve common issues:

**Clean build cache:**
```shell
curvenote start --clean
```

**Force reinstall dependencies:**
```shell
curvenote start --force
```

**Check for errors:**
```shell
curvenote build --strict
```

**Verify configuration:**
```shell
curvenote build --check-links
```

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Configure Your Project →](./configuration.md)
- [Set Up Authentication →](./authentication.md)

---

💡 **Tip:** Use `curvenote start` frequently during development to catch issues early. The live reload feature makes it easy to see changes immediately.

⚡ **Important: Workflow Best Practices**

- **Test locally first**: Always use `curvenote start` before deploying
- **Use version control**: Commit your changes regularly
- **Clean builds**: Use `--clean` flag when troubleshooting
- **Check links**: Use `--check-links` before final deployment
- **Backup regularly**: Keep copies of working configurations
