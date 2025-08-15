---
title: Install & Authenticate the Curvenote CLI
short_title: Install CLI
---

# Install & Authenticate the Curvenote CLI


**Goal:** 
Install the Curvenote command-line tool, log in, and ensure you're ready to create and publish content.  


## Before You Start

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

You’ll need an API token if working with private projects or publishing to a site.

1. In your Curvenote Personal Settings, generate a new API token.
2. In your terminal, run:
```bash
curvenote token set
```
3. Paste the API tocken when prompted.

For more options, see the full [Authentication Reference](../cli/authentication.md).

## 3. Verify Your Setup
Run:
```bash
curvenote token check
```
If it returns your username, your CLI is ready.

## Next Steps

1. [Create Your First Project](create-project.md)  
2. [Write Your First Article from the CLI](create-article-cli.md)  
3. [Set Up a Site for Publishing](create-a-site.md)  
4. [Push, Submit, and Publish Content](push-submit-publish.md)

💡 **Tip:** The Curvenote CLI is open source—[view it on GitHub](https://github.com/curvenote/curvenote). 
:::
