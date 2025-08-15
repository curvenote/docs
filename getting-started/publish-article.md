---
title: Publish & Share Your Article
short_title: Publish & Share
---


# Publish & Share

**Goal:** Publish your article or site so it’s live on the web.  

---

## Before You Publish
Check that your project has:
- At least one article with content.
- A valid `curvenote.yml` configuration file.
- All required assets (figures, datasets, notebooks) included.

If you’re not sure your site is configured, see [Set Up a Site](set-up-site.md)

---

## Choose How You Want to Publish

**Publish directly to the web (public)**  

This puts your project live on the `.curve.space` domain you set in `site.domains`

```bash
curvenote deploy
```

**Submit to a site (for review or staged publishing)**

Send your project to a site (e.g., a lab site or journal). Only site admins can make it public.
```bash
curvenote submit <site>
```

If you have admin rights and want to publish from the CLI:
```bash
curvenote submission publish <site>
```
## See the Result

- **Deploy:** The CLI will show your live `.curve.space` URL.
- **Submit:** Your submission appears in the site’s admin area.  
  If published, the site will provide the public URL.

## Update Content
- If you deployed: Run `curvenote deploy` again to replace the live version.
- If you submitted: Run `curvenote submit <site>` to create a new submission version, then publish (via admin UI or `curvenote submission publish <site>`).

## Next Steps

- [Add Figures, Images, and Media →](add-figures-media.md)  
- [Link Data and Code →](link-data-code.md)  
- [Export to PDF/Typst →](export-pdf.md)

---

**Tip:** Published content is “living” in Curvenote — you can make edits anytime, and your audience will always see the latest version.
