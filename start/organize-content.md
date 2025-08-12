# Create Your First Project

**Goal:** Create and organize your first Curvenote project so you can start writing and publishing content.  



## 1. What’s a Project in Curvenote?

A **project** is the home for your articles, figures, datasets, and other content.  
It also stores your site configuration so you can publish to the web.

Projects contain:

- **Content folder** (`content/`) for articles, sections, and figures.
- **Configuration file** (`curvenote.yml`) for site and article settings.
- **Assets folder** for images, datasets, and other media.



## 2. Create a New Project

From your terminal:

```bash
curvenote init my-first-project
```

You’ll be prompted to:

1. **Name your project**  
   Example: `My Lab Website` or `My Article`
2. **Add an optional description**  
3. Confirm your configuration.

This creates a folder with the following structure:

```
my-first-project/
├── content/
│   └── index.md
├── curvenote.yml
└── README.md
```


## 3. Navigate and Explore

Move into your new project folder:

```bash
cd my-first-project
```

Open `content/index.md` in your editor — this is your first article.  
You can rename it, add more `.md` or `.myst.md` files, and create subfolders for sections.



## 4. Organize Your Content

Best practices:

- **One article per file** for clarity.
- Group related articles into folders (e.g., `/methods`, `/results`).
- Keep images and figures in an `/assets` folder.
- Use clear, short file names (avoid spaces).

Example:

```
content/
├── introduction.md
├── methods/
│   ├── data-collection.md
│   └── analysis.md
├── results/
│   ├── experiment-1.md
│   └── experiment-2.md
└── assets/
    ├── fig1.png
    └── dataset.csv
```



## 5. Check Your Setup

You can preview your content locally by running:

```bash
curvenote preview
```

This launches a local development server where you can see your project as it will appear online.




## Next Steps

Now that you have a project:

1. [Write Your First Article →](../how-to/create-article-cli.md)  
2. [Publish & Share →](../how-to/publish-article.md)  
3. [Set Up a Site →](../getting-started/set-up-site.md)

---

**Tip:** You can connect your project to GitHub for version control. See [Connect to GitHub](../integrations/github.md).
```