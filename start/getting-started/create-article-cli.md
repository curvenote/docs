# Write Your First Article

**Goal:** Create and edit your first article in Curvenote using the CLI.  



## 1. Create a New Article

From inside your project folder, run:

```bash
curvenote create article my-first-article
```

This will:

- Create a new Markdown file in your `content/` directory.
- Add default frontmatter (metadata) like `title` and `date`.
- Link the article into your site navigation if your `curvenote.yml` is set up.

Example folder after running the command:

```
content/
├── index.md
└── my-first-article.md
```



## 2. Open and Edit Your Article

Open the new file in your preferred text editor:

```bash
code content/my-first-article.md
```

You can write in **Markdown**, **MyST**, or embed Jupyter code blocks if your project supports it.

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

```{figure} assets/fig1.png
:alt: Example figure
:width: 60%
```
Figure caption goes here.


## 3. Preview Locally

See your changes instantly by running:

```bash
curvenote preview
```

This opens a local preview of your site in your browser so you can check formatting, figures, and links.



## 4. Organize Your Articles

Best practices for keeping articles manageable:

- Use short, descriptive file names.
- Group related content into folders (e.g., `methods/`, `results/`).
- Keep figures, datasets, and large media files in an `assets/` folder.



## Next Steps

Once your article looks good, you can:

1. [Publish & Share →](./publish-article.md) 
2. [Add Figures, Images, and Media →](../authoring/add-figures-media.md) 
3. [Link Data and Code →](../authoring/link-data-code.md) 

---

**Tip:** Curvenote supports reusable content blocks, so you can keep figures, citations, or sections consistent across multiple articles.
