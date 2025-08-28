---
title: Install Curvenote
short_title: Install
---

# Install Curvenote

## Quick Start
Install the Curvenote CLI tool and authenticate with your account to start creating and publishing content

The Curvenote CLI provides command-line access to all Curvenote features, allowing you to create projects, manage content, and publish sites directly from your terminal.

## Before You Start

Make sure you have:
- Node.js v18 or later installed on your system
- A terminal or command prompt accessible
- A Curvenote account (optional for installation, required for publishing)
- Administrator access if installing globally

## 1. Install the CLI

Open your terminal and run the installation command:

```bash
npm install -g curvenote
```

**What you'll see:**
```
+ curvenote@1.2.3
added 1 package in 2.3s
```

## 2. Verify Installation

Confirm the CLI is properly installed:

```bash
curvenote --version
```

**What you'll see:**
```
1.2.3
```

## 3. Authenticate (Optional)

Log in to your Curvenote account:

```bash
curvenote login
```

**What you'll see:**
- Browser opens to Curvenote sign-in page
- Sign in with your credentials
- Return to terminal when complete
- Confirmation message: `Logged in as your-username`

## Next Steps

- [Create Your First Project →](./2-first-project.md)
- [Learn CLI Commands →](../cli/commands.md)
- [Set Up Authentication →](../cli/authentication.md)

---

💡 **Tip:** The Curvenote CLI is open source and available on GitHub. You can contribute or report issues directly to the project.

⚡ **Important: Troubleshooting**

- **"command not found"**: Restart your terminal after installation
- **Permission errors**: Use `sudo npm install -g curvenote` (macOS/Linux)
- **Node.js required**: [Download Node.js](https://nodejs.org/) if not installed
- **Version conflicts**: Update Node.js to v18 or later
