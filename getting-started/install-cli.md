---
title: Install & Authenticate the Curvenote CLI
short_title: Install CLI
---

# Install & Authenticate the Curvenote CLI

## Overview
Get the Curvenote CLI installed and authenticated in minutes

The Curvenote CLI lets you create, manage, and publish content from your terminal. Follow these steps to get up and running quickly.

## Before you start

Make sure you have:

**Node.js v18 or later** (comes with `npm`)
- Check your version:
  ```bash
  node --version
  ```
- If needed, [download Node.js](https://nodejs.org/) or install via Conda:
  ```bash
  conda install -c conda-forge nodejs
  ```

## 1. Install the CLI

Open your terminal and run:

```bash
npm install -g curvenote
```

Verify installation:
```bash
curvenote --version
```

You should see a version number. If you see an error, check your Node.js and `npm` setup.

## 2. Authenticate with Curvenote

You'll need an API token if working with private projects or publishing to a site.

1. In your Curvenote Personal Settings, generate a new API token
2. In your terminal, run:
   ```bash
   curvenote token set
   ```
3. Paste the API token when prompted

For more options, see the full [Authentication Reference](../cli/authentication.md).

## 3. Verify your setup

Run:
```bash
curvenote token check
```

If it returns your username, your CLI is ready.

## Next steps

- [Create Your First Project →](create-project.md)  
- [Write Your First Article from the CLI →](create-article-cli.md)  
- [Set Up a Site for Publishing →](create-a-site.md)  
- [Publish & Share Content →](publish-article.md)

💡 **Tip:** The Curvenote CLI is open source—[view it on GitHub](https://github.com/curvenote/curvenote).
