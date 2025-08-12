
# Install & Authenticate the Curvenote CLI

**Goal:** Install the Curvenote command-line tool, log in, and ensure you're ready to create and publish content.  



## Prerequisites

Before installing the CLI, make sure you have:

- **Node.js v18 or later** (comes with `npm`)
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
After installation, verify the CLI is installed:
```bash
curvenote --version
```
You should see a version number (e.g., `0.1.2`).  
If you see an error, check your Node.js and `npm` setup.

## 2. Authenticate with Curvenote
Run the login command:
```bash
curvenote login
```
1. Your browser will open to the Curvenote sign-in page.

2. Sign in with your Curvenote account.

3. Once you return to the terminal, you should see a confirmation message like:
```
Logged in as <your-username>
```

If you use multiple accounts, you can switch by running:
```bash
curvenote token select
```
## 3. Verify Your Setup
To confirm you’re ready to go:
```bash
curvenote whoami
```

If it returns your username, your CLI is authenticated and ready.


## Next Steps

Now that you’ve installed and authenticated the CLI, you can:

1. [Create Your First Project →](../getting-started/organize-content.md)  
2. [Write Your First Article →](../how-to/create-article-cli.md)  
3. [Publish & Share →](../how-to/publish-article.md)

---

**Tip:** The Curvenote CLI is open source—[view it on GitHub](https://github.com/curvenote/curvenote).
