---
title: Export Curvenote Content
short_title: Export
---

# Export Curvenote Content

## Overview
Export your Curvenote projects to various formats including PDF, Word, LaTeX, and MECA archives for sharing and publication

Export your Curvenote content to different formats for sharing, publication, or archival purposes. The CLI supports multiple export formats with customizable templates and options.

## Before You Start

Make sure you have:
- Curvenote CLI installed and working
- A project with content to export
- Content tested locally with `curvenote start`
- Understanding of your target format requirements

## 1. Understand Export Formats

Learn about available export options:

**PDF**: Professional documents with LaTeX templates

**Word**: Microsoft Word documents (.docx)

**LaTeX**: Source files for LaTeX compilation

**MECA**: Reproducible research archives

**Markdown**: Plain markdown files

**HTML**: Static website files

## 2. Export to PDF

Create professional PDF documents:

**Basic PDF export:**
```shell
curvenote export pdf
```

**Export with specific template:**
```shell
curvenote export pdf --template journal
```

**Export with custom options:**
```shell
curvenote export pdf --template article --output my-paper.pdf
```

**Available templates:**
- journal, article, report, thesis, book

## 3. Export to Word

Create Microsoft Word documents:

**Basic Word export:**
```shell
curvenote export word
```

**Export with template:**
```shell
curvenote export word --template report
```

**Export specific file:**
```shell
curvenote export word content/article.md
```

**Word templates:**
- report, article, letter, memo

## 4. Export to LaTeX

Generate LaTeX source files:

**Basic LaTeX export:**
```shell
curvenote export latex
```

**Export with template:**
```shell
curvenote export latex --template article
```

**Export with custom options:**
```shell
curvenote export latex --template journal --output paper.tex
```

**LaTeX templates:**
- article, journal, report, book, thesis

## 5. Export MECA Archives

Create reproducible research archives:

**Export MECA archive:**
```shell
curvenote export meca
```

**Include computational environment:**
```yaml
project:
  jupyter: true
  requirements:
    - requirements.txt
  resources:
    - data/**/*
    - src/**/*
  exports:
    - format: meca
```

**MECA includes:**
- All source files
- Computational environment
- Data and resources
- Metadata and citations

## 6. Configure Export Settings

Customize export options in your configuration:

**Set up export formats:**
```yaml
project:
  exports:
    - format: pdf
      template: journal
    - format: word
      template: report
    - format: latex
      template: article
    - format: meca
```

**Configure templates:**
```yaml
project:
  exports:
    - format: pdf
      template: journal
      options:
        geometry: margin=1in
        fontsize: 11pt
```

## 7. Manage Export Output

Organize and find your exports:

**Default export location:**
```
_build/exports/
```

**List export files:**
```shell
ls _build/exports/
```

**Custom output directory:**
```shell
curvenote export pdf --output ./exports/
```

**Export specific content:**
```shell
curvenote export pdf content/chapter1.md
```

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Configure Your Project →](./configuration.md)
- [Deploy Your Site →](./deployment.md)

---

💡 **Tip:** Use the `--template` option to match your target publication format. Different templates provide different styling and formatting options.

⚡ **Important: Export Best Practices**

- **Test locally first**: Use `curvenote start` to preview content
- **Check templates**: Verify template compatibility with your content
- **Include metadata**: Ensure proper author and citation information
- **Test exports**: Verify exported files open correctly
- **Backup exports**: Keep copies of important exported files
