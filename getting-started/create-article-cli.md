---
title: Write Your First Article
short_title: Write Article
---


# Write Your First Article

**Goal:** Create and edit your first article in Curvenote using the CLI.  



## 1. Create a New Article

To create a new article, simply add a new Markdown file to your project’s content/ directory using your preferred text editor or IDE.

For example, create a file called `my-first-article.md`:
```bash
content/
├── index.md
└── my-first-article.md
```
Each article should start with YAML frontmatter containing at least a title field. For example:

```bash
---
title: My First Article
date: 2025-08-15
---
```
Once created, you can add the new article to your site navigation by editing `curvenote.yml` and linking to the file.

💡 **Tip**: If your project is already linked to a Curvenote site, you can use curvenote push to sync changes for review or curvenote submit to send it to a collection.


## 2. Open and Edit Your Article

Open the new file in your preferred text editor:

```bash
code content/my-first-article.md
```

You can write in **MyST Markdown** or use **Jupyter Notebooks**.

Example content:

```markdown
---
title: My First Curvenote Article
authors:
  - name: Jane Doe
    orcid: 0000-0001-2345-6789
---

# Introduction

This is my first article written in Curvenote! 🎉

## My First Figure

```{figure} ../assets/fig1.png
:alt: Example figure
:width: 60%
```
Figure caption goes here.


## 3. Preview Locally

See your changes instantly by running:

```bash
curvenote start
```

This opens a local preview of your site in your browser so you can check formatting, figures, and links.



## 4. Organize Your Articles

Best practices for keeping articles manageable:

- Use short, descriptive file names.
- Group related content into folders (e.g., `methods/`, `results/`).
- Store images and figures wherever is most convenient — for example, alongside the articles that reference them, or in a dedicated folder like `assets/` or `media/`.
- Keep figures, datasets, and large media files in an `assets/` folder.


## Next Steps

Once your article looks good, you can:

1. [Publish & Share →](./publish-article.md) 
2. [Add Figures, Images, and Media →](../authoring/add-figures-media.md) 
3. [Link Data and Code →](../authoring/link-data-code.md) 


