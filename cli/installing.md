---
title: Install Curvenote CLI
short_title: Install CLI
---

# Install Curvenote CLI

## Overview
Install the Curvenote CLI globally using npm to access command line tools for creating and managing scientific content

The Curvenote CLI is distributed through npm and requires Node.js. Once installed, you can create projects, build content, and deploy sites directly from your terminal.

## Before You Start

Make sure you have:
- Node.js version 14 or higher installed
- npm (comes with Node.js)
- Access to a terminal or command prompt
- Stable internet connection for download

## 1. Check Node.js Installation

Verify Node.js is installed and up to date:

```shell
node --version
npm --version
```

**Required versions:**
- Node.js: 14.0.0 or higher
- npm: 6.0.0 or higher

## 2. Install Curvenote CLI

Install the CLI globally:

```shell
npm install -g curvenote
```

**What happens:**
- Downloads and installs Curvenote CLI
- Adds `curvenote` command to your PATH
- Installs all required dependencies

## 3. Verify Installation

Test that the CLI is working:

```shell
curvenote --version
```

**Expected output:**
```
curvenote v2.x.x
```

**Get help:**
```shell
curvenote --help
```

## 4. Update Curvenote CLI

Keep your CLI up to date:

```shell
npm update -g curvenote
```

**When to update:**
- New features are released
- Bug fixes are available
- Security updates are published

## 5. Troubleshoot Installation

**If installation fails:**

**Permission errors:**
```shell
sudo npm install -g curvenote
```

**Clear npm cache:**
```shell
npm cache clean --force
```

**Reinstall completely:**
```shell
npm uninstall -g curvenote
npm install -g curvenote
```

## Next Steps

- [Set Up Authentication →](./authentication.md)
- [Learn Basic Commands →](./commands.md)
- [Create Your First Project →](../Getting Started/create-project.md)

---

💡 **Tip:** Use `npm list -g curvenote` to check your current version and `npm outdated -g` to see if updates are available.

⚡ **Important: Installation Best Practices**

- **Use global installation**: The `-g` flag makes curvenote available system-wide
- **Keep Node.js updated**: Ensure you have the latest LTS version
- **Check permissions**: Use `sudo` if you encounter permission errors
- **Verify installation**: Always test with `curvenote --version` after installation
- **Regular updates**: Update the CLI regularly for new features and security patches
