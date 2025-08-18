---
title: CLI Commands Reference
short_title: Commands
---

# CLI Commands Reference

## Quick Start
Learn the essential Curvenote CLI commands for creating projects, building content, and deploying websites

The Curvenote CLI provides a comprehensive set of commands for managing scientific content and websites. Use `curvenote --help` to see all available commands and `curvenote <command> --help` for specific command options.

## Before You Start

Make sure you have:
- Curvenote CLI installed and working
- Basic understanding of command line operations
- Authentication set up (for private content)
- A project to work with

## 1. Getting Started Commands

**Initialize new project:**
```shell
curvenote init [project-name]
```

**Clone existing project:**
```shell
curvenote clone [remote-url] [folder]
```

**Get help:**
```shell
curvenote --help
curvenote <command> --help
```

**Check version:**
```shell
curvenote --version
```

## 2. Local Development Commands

**Start local server:**
```shell
curvenote start
```

**Build content locally:**
```shell
curvenote build
```

**Clean build cache:**
```shell
curvenote start --clean
curvenote build --clean
```

**Force reinstall dependencies:**
```shell
curvenote start --force
curvenote build --force
```

## 3. Deployment Commands

**Deploy to web:**
```shell
curvenote deploy
```

**Deploy without prompts:**
```shell
curvenote deploy --yes
```

**Deploy with strict checking:**
```shell
curvenote deploy --strict
```

**Check external links:**
```shell
curvenote deploy --check-links
```

## 4. Content Sync Commands

**Pull content from remote:**
```shell
curvenote pull [path]
```

**Pull without prompts:**
```shell
curvenote pull --yes
```

**Pull specific file:**
```shell
curvenote pull content/article.md
```

## 5. Authentication Commands

**Set API token:**
```shell
curvenote token set
```

**List authenticated accounts:**
```shell
curvenote auth list
```

**Switch between accounts:**
```shell
curvenote token select
```

**Remove authentication:**
```shell
curvenote token delete
```

## 6. Advanced Commands

**Write table of contents:**
```shell
curvenote build --write-toc
```

**Use specific branch:**
```shell
curvenote start --branch main
```

**CI/CD mode:**
```shell
curvenote build --ci
curvenote deploy --ci
```

**Debug mode:**
```shell
curvenote --debug
```

## 7. Common Flags and Options

**Global flags:**
- `--help`: Show command help
- `--version`: Show CLI version
- `--debug`: Enable debug logging

**Build flags:**
- `--clean`: Clean build cache
- `--force`: Force reinstall dependencies
- `--strict`: Stop on errors
- `--check-links`: Verify external links

**Deploy flags:**
- `--yes`: Skip confirmation prompts
- `--ci`: Skip installation for CI/CD

## Next Steps

- [Set Up Authentication →](./authentication.md)
- [Create Your First Project →](../Getting Started/create-project.md)
- [Deploy Your Site →](../quick-start/3-publish.md)

---

💡 **Tip:** Use `curvenote --help` to explore all available commands and `curvenote <command> --help` to see specific options for each command.

⚡ **Important: Command Best Practices**

- **Use help commands**: Always check `--help` for command options
- **Test locally first**: Use `curvenote start` before deploying
- **Use clean builds**: Add `--clean` flag when troubleshooting
- **Check links**: Use `--check-links` before final deployment
- **Use CI mode**: Add `--ci` flag for automated deployments
