---
title: Writing with Markdown, MyST, or Jupyter
short_title: Writing Formats
---

# Writing with Markdown, MyST, or Jupyter

## Overview
Choose the right writing format for your content: standard Markdown for simple documents, MyST Markdown for scientific papers, or Jupyter notebooks for computational work

Curvenote supports multiple writing formats to match your content needs. Use standard Markdown for basic documents, MyST Markdown for publication-quality scientific papers with citations and cross-references, or Jupyter notebooks for interactive computational content with code and outputs.

## Before You Start

Make sure you have:
- A Curvenote project to write in
- Understanding of your content type and requirements
- Access to the Curvenote editor interface
- Content you want to create or convert

## 1. Choose Your Writing Format

### Standard Markdown
**Best for**: Basic documents, simple formatting, quick notes, documentation

**Features**:
- Simple syntax, easy to learn
- Basic formatting (headings, lists, links, code blocks)
- Fast writing and editing
- Universal compatibility

**Example use cases**:
- README files
- Simple documentation
- Quick notes and drafts
- Basic articles

### MyST Markdown
**Best for**: Scientific papers, publications, academic content, citations

**Features**:
- All standard Markdown features
- Academic citations and references
- Cross-references and automatic numbering
- Math equations and complex formatting
- Publication-quality output

**Example use cases**:
- Research papers
- Academic articles
- Technical documentation
- Books and reports

### Jupyter Notebooks
**Best for**: Computational work, data analysis, interactive content, reproducible research

**Features**:
- Code execution and interactive outputs
- Rich visualizations and plots
- Reproducible computational workflows
- Integration with scientific libraries

**Example use cases**:
- Data analysis reports
- Computational research papers
- Interactive tutorials
- Scientific workflows

### Mixed Approach
Combine formats within a single project for maximum flexibility.

## 2. Quick Format Comparison

| Feature | Standard Markdown | MyST Markdown | Jupyter Notebooks |
|---------|------------------|---------------|-------------------|
| **Learning Curve** | Easy | Medium | Medium-Hard |
| **Citations** | Manual | Automatic | Automatic |
| **Code Execution** | No | No | Yes |
| **Interactive Outputs** | No | No | Yes |
| **Cross-references** | Manual | Automatic | Automatic |
| **Math Equations** | Basic | Advanced | Advanced |
| **Publication Ready** | Basic | Yes | Yes |

## 3. Decision Tree

**Start here** → What type of content are you creating?

- **Simple document or note?** → [Standard Markdown](#standard-markdown)
- **Academic paper with citations?** → [MyST Markdown](#myst-markdown)
- **Computational work with code?** → [Jupyter Notebooks](#jupyter-notebooks)

## 4. Standard Markdown Basics

**Headings**: `# H1`, `## H2`, `### H3` for document structure

**Text formatting**: `**bold**`, `*italic*`, `` `code` `` for emphasis

**Lists**: `- bullet` or `1. numbered` for organized content

**Links**: `[text](url)` for external references

**Code blocks**: ` ```language` for syntax-highlighted code

## 5. MyST Markdown Features

**Citations**: `@cite-key` or `@10.5281/zenodo.123456` for references

**Cross-references**: `@fig:label` or `@tbl:label` for figure/table links

**Math equations**: `$inline$` or `$$block$$` for mathematical content

**Directives**: `:::{note}` for callouts, `:::{figure}` for captioned images

**Footnotes**: `[^1]` and `[^1]: definition` for additional notes

:::{seealso} Detailed MyST Guide
For comprehensive MyST Markdown documentation, see [MyST Markdown Guide](./myst-markdown.md).
:::

## 6. Jupyter Notebooks Overview

**Code cells**: Write and execute Python, R, or other languages

**Markdown cells**: Add explanations and documentation

**Output cells**: Display results, plots, and interactive visualizations

**Cell types**: Code, Markdown, and Output cells work together

**Interactive outputs**: Plotly, Altair, Bokeh, Matplotlib remain interactive

:::{seealso} Comprehensive Jupyter Guide
For detailed Jupyter notebook workflows and scientific paper creation, see [Writing with Jupyter Notebooks](./jupyter-notebooks.md).
:::

## 7. Getting Started with Each Format

### Standard Markdown
1. Create a new `.md` file in your project
2. Start writing with basic markdown syntax
3. Use the Curvenote editor for live preview

### MyST Markdown
1. Create a new `.md` file in your project
2. Add frontmatter with title and metadata
3. Use MyST directives for advanced features
4. Add citations and cross-references

### Jupyter Notebooks
1. Create a new `.ipynb` file or import existing notebook
2. Structure with Markdown cells for narrative
3. Add code cells for computational work
4. Include interactive visualizations

## Next Steps

**For Standard Markdown**: Start writing! No additional setup needed.

**For MyST Markdown**: 
- [Add Citations and References →](./citations.md)
- [Add Figures and Images →](./figures-and-images.md)
- [Learn MyST Directives →](./myst-markdown.md)

**For Jupyter Notebooks**:
- [Writing Scientific Papers with Jupyter →](./jupyter-notebooks.md)
- [Interactive Outputs →](../Computational/interactive-outputs-in-jupyter.md)
- [Reproducible Figures →](../Computational/reproducible-figures.md)

---

💡 **Tip:** Start with standard Markdown for simple content, then upgrade to MyST Markdown when you need citations, cross-references, or publication-quality formatting. Use Jupyter notebooks when your content includes code execution or interactive outputs.

⚡ **Important: Writing Format Best Practices**

- **Choose wisely**: Match format to content type and complexity
- **Consistent formatting**: Use consistent heading levels and structure
- **Citation management**: Keep BibTeX files organized and up-to-date
- **Cross-references**: Use labels consistently for reliable linking
- **Code documentation**: Always document code cells in Jupyter notebooks
