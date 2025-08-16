---
title: Write Your First Article
short_title: Write Article
---

# Write Your First Article

## Quick Start
Create and edit your first article in Curvenote using the CLI

Writing articles in Curvenote is straightforward and flexible. You can use Markdown, Jupyter notebooks, or other formats to create rich, interactive content.

## Create a new article

To create a new article, simply add a new Markdown file to your project's content/ directory using your preferred text editor or IDE.

For example, create a file called `my-first-article.md`:
```
content/
├── index.md
└── my-first-article.md
```

Each article should start with YAML frontmatter containing at least a title field. For example:

```yaml
---
title: My First Article
date: 2025-08-15
---
```

Once created, you can add the new article to your site navigation by editing `curvenote.yml` and linking to the file.

💡 **Tip**: If your project is already linked to a Curvenote site, you can use `curvenote push` to sync changes for review or `curvenote submit` to send it to a collection.

## Open and edit your article

Open the new file in your preferred text editor (for example, VS Code, Sublime Text, or another editor you use).

If you use Visual Studio Code, you can open the file directly from your terminal:
```bash
code content/my-first-article.md
```

You can write in **MyST Markdown** or use **Jupyter Notebooks**.

## Preview locally

See your changes instantly by running:

```bash
curvenote start
```

This opens a local preview of your site in your browser so you can check formatting, figures, and links.

## Organize your articles

For best practices on organizing content, see [Organize Articles and Sections](../authoring/organize-content.md)

## Next steps

- [Publish & Share →](./publish-article.md) 
- [Add Figures, Images, and Media →](../editor/figures-and-images.md) 
- [Link Data and Code →](../editor/add-and-link-notebooks.md)


