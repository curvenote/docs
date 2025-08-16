---
title: Publish & Share Your Article
short_title: Publish & Share
---


# Publish & Share

**Goal:** Publish your article or site so it’s live on the web.  



## 1. Make Sure Your Project Is Ready

Before publishing, confirm that your project has:

- At least one article with content.
- A valid `curvenote.yml` configuration file.
- Any required assets (figures, datasets, notebooks) included in the project.

If you’re not sure your site is configured, see:  
[Set Up a Site →](../getting-started/set-up-site.md)



## 2. Publish from the CLI

Run the publish command from your project folder:

```bash
curvenote publish
```

You’ll see output confirming which articles or collections are being published and the URL where your content will appear.



## 3. View Your Live Site

Once publishing finishes, the CLI will display a URL to your live site.  
Open it in your browser to verify:

- Formatting and layout look correct.
- Figures, tables, and media load properly.
- Links and citations work as expected.



## 4. Update Published Content

If you make changes to your articles, simply run:

```bash
curvenote publish
```

Curvenote will update the existing content without requiring you to start over.



## Next Steps

- [Add Figures, Images, and Media →](../authoring/add-figures-media.md)  
- [Link Data and Code →](../authoring/link-data-code.md)  
- [Export to PDF/Typst →](../tutorials/export-pdf.md)

---

**Tip:** Published content is “living” in Curvenote — you can make edits anytime, and your audience will always see the latest version.