---
title: Create Your First Project
short_title: Create Project
---

# Create Your First Project

**Goal:** Create and organize your first Curvenote project so you can start writing and publishing content.  


## 1. What’s a Project in Curvenote?

A **project** is the container for everything you want to publish in Curvenote — including articles, figures, datasets, media, and the configuration that controls how they appear online.

A project can be:
- **A single article** — for example, a preprint, report, or tutorial.
- **A multi-article collection** — such as a lab website, conference proceedings, or journal issue.
- **A research output with multiple parts** — combining text, interactive figures, and linked data/code.

The `curvenote.yml` file defines the project’s metadata, structure, and publishing settings, whether your project is just one file or a large collection.


Projects typically include:

- **Configuration file** (`curvenote.yml`) — **Required.** Defines site settings, article metadata, and publishing options.
- **Content files** — Any `.md`, `.ipynb`, or `.tex` files containing your articles, sections, and figures. These can be organized in any folder structure.
- **Supporting files** — Images, datasets, scripts, or other media used in your articles. These can be stored anywhere in the project.

There is no required folder naming convention; organize files and directories in the way that best suits your workflow.


## 2. Create a New Project

From your terminal:

```bash
curvenote init
```
When you run this command, you’ll be prompted to choose how to initialize the project:

## 1. Import from Curvenote — Pulls content from the legacy web editor at curvenote.com.
*Note: This workflow is not recommended for new projects and may be removed in future versions.*

## 2. Use the content in this folder — Treats the current folder as a Curvenote project using the existing files inside it.

- This option is only available if the folder already contains content (e.g., `.md`, .`ipynb`, .`tex` files) and you are starting from that folder.

For new projects, we recommend starting in a folder where you’ve already added your initial article or content files.

Then, run `curvenote init` from that folder to create the required curvenote.yml configuration file and begin organizing your content.

## 3. Navigate and Explore

Move into your new project folder:

```bash
cd my-first-project
```

Open `/index.md` in your editor — this is your first article.  
You can rename it, add more `.md` or `.myst.md`, `ipynb` or `.tex` files, and organize them in folders that make sense for your project.


## 4. Organize Your Content

Best practices (adapt as needed for your workflow):

- **One article per file** for clarity.
- Group related articles into folders (e.g., `/methods`, `/results`).
- Store images and figures wherever is most convenient — for example, alongside the articles that reference them, or in a dedicated folder like `assets/` or `media/`.
- Use clear, short file names (avoid spaces).

Example:
```arduino
methods/
├── data-collection.md
└── analysis.md
results/
├── experiment-1.md
└── experiment-2.md
assets/
├── shared-logo.png
└── dataset.csv
```

## 5. Check Your Setup

You can preview your content locally by running:

```bash
curvenote start
```

This launches a local development server where you can see your project as it will appear online.

## Next Steps

Now that you have a project:

1. [Write Your First Article](create-article-cli.md)  
2. [Publish & Share](publish-article.md)  
3. [Set Up a Site →](create-a-site.md)

---

💡 **Tip:** You can connect your project to GitHub for version control. See [Connect to GitHub](../integrations/github.md).