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

Open the new file in your preferred text editor (for example, VS Code, Sublime Text, or another editor you use).

If you use Visual Studio Code, you can open the file directly from your terminal:
```bash
code content/my-first-article.md
```
You can write in **MyST Markdown** or use **Jupyter Notebooks**.


## 3. Preview Locally

See your changes instantly by running:

```bash
curvenote start
```

This opens a local preview of your site in your browser so you can check formatting, figures, and links.


## 4. Organize Your Articles

For best practices on organizing content, see [Organize Articles and Sections](.organize-content.md)


## Next Steps

Once your article looks good, you can:

1. [Publish & Share →](./publish-article.md) 
2. [Add Figures, Images, and Media →](../authoring/add-figures-media.md) 
3. [Link Data and Code →](../authoring/link-data-code.md) 


