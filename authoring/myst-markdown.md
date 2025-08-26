---
title: MyST Markdown Guide
short_title: MyST Markdown
description: Complete guide to writing scientific content using MyST Markdown syntax, directives, and advanced features
---

# MyST Markdown Guide

MyST (Markedly Structured Text) is a powerful extension of Markdown designed specifically for scientific and technical documentation. This guide will teach you how to write rich, structured content using MyST Markdown syntax, from basic formatting to advanced features like citations, cross-references, and interactive elements.

## Overview

By the end of this guide, you will understand how to write scientific content using MyST Markdown, including basic syntax, advanced directives, citations, cross-references, and interactive elements for creating publication-ready documents.

## Before You Start

**Prerequisites:**
- **Basic Markdown Knowledge**: Familiarity with standard Markdown syntax
- **Curvenote Account**: Active Curvenote account for testing and publishing
- **Text Editor**: Any text editor that supports Markdown (VS Code recommended)
- **Basic HTML/CSS**: Understanding of web technologies (helpful but not required)

**Recommended Tools:**
- **VS Code**: With MyST Markdown extensions
- **Curvenote Editor**: For real-time preview and collaboration
- **Git**: For version control of your content

## 1. Basic MyST Markdown Syntax

**Text Formatting:**
MyST Markdown supports all standard Markdown syntax including headings, bold text, italic text, inline code, blockquotes, and lists. Use standard Markdown syntax with hash symbols for headings, asterisks for emphasis, backticks for code, and dashes for lists.

**Paragraphs and Spacing:**
- **Single line break**: Use two spaces at the end of a line
- **Paragraph break**: Use a blank line between paragraphs
- **Hard line break**: Use backslash at the end of a line

**Code Blocks:**
Use triple backticks with language specification for code blocks. For example, use three backticks followed by "python" for Python code, or "bash" for shell commands.

## 2. MyST Directives and Roles

**Directives Overview:**
MyST directives provide powerful functionality for scientific content. They use a specific syntax with triple colons and options. Directives allow you to create notes, warnings, figures, tables, and other structured content.

**Basic Directives:**

**Note Directive:**
Create informational notes using the note directive with triple colons. This displays content in a highlighted note box.

**Warning Directive:**
Display warnings using the warning directive. This shows content in a warning-styled box.

**Important Directive:**
Highlight critical information using the important directive. This displays content in a prominent important box.

**Admonition Directive:**
Create custom admonitions with titles and styling classes. This allows for flexible content highlighting.

**Content Directives:**

**Figure Directive:**
Include figures with captions, alignment, and sizing options. Figures can be referenced throughout your document.

**Table Directive:**
Create structured tables with headers and data. Tables can be given names for cross-referencing.

## 3. Mathematical Content

**Inline Math:**
Use single dollar signs for inline mathematical expressions. This allows you to include mathematical notation within your text.

**Block Math:**
Use double dollar signs for standalone mathematical equations. This creates centered, block-level mathematical content.

**Aligned Equations:**
Create aligned equation systems using LaTeX alignment environments. This is useful for systems of equations or step-by-step derivations.

**Math Directives:**
Use math directives for labeled equations that can be referenced throughout your document.

## 4. Citations and References

**Basic Citations:**
Cite references using curly braces with the cite role. You can cite single references, multiple references, or include page numbers.

**Bibliography Setup:**
Configure your document to use a bibliography file. Add the bibliography path to your document frontmatter and include a bibliography section.

**Reference File:**
Create a BibTeX file with your references. Each reference should have a unique key and include all necessary bibliographic information.

**Citation Styles:**
MyST supports various citation styles including author-year and numeric formats. You can also include custom text with citations.

## 5. Cross-References

**Section References:**
Link to different sections of your document using the ref role. Give sections unique identifiers and reference them throughout your content.

**Figure References:**
Reference figures using their assigned names. This creates automatic links that update if figure numbers change.

**Table References:**
Link to tables using their table names. This provides consistent cross-referencing throughout your document.

**Equation References:**
Reference mathematical equations using their labels. This creates automatic equation numbering and linking.

## 6. Interactive Elements

**Code Execution:**
Include executable code cells that can run and display outputs. This is particularly useful for scientific computing and data analysis.

**Interactive Outputs:**
Create interactive visualizations and plots that readers can interact with. This includes charts, graphs, and other dynamic content.

**Hide/Show Options:**
Control what parts of code cells are displayed. You can hide code, outputs, or entire cells as needed.

## 7. Advanced Formatting

**Custom CSS Classes:**
Apply custom styling to content blocks using CSS classes. This allows for advanced visual customization.

**Raw HTML:**
Include raw HTML when needed for complex formatting or functionality not available in Markdown.

**Include External Content:**
Reference and include content from other files. This supports modular document organization.

**Literal Includes:**
Include code files with syntax highlighting and line number options.

## 8. Document Structure and Metadata

**Frontmatter:**
Configure document metadata including title, author, date, and bibliography settings in the document header.

**Document Options:**
Set various document options for HTML output including MathJax support, table of contents, and navigation depth.

**Table of Contents:**
Generate automatic table of contents with configurable depth and styling.

## Next Steps

- [Writing Markdown, MyST, and Jupyter →](./markdown-myst-jupyter.md)
- [Adding Figures and Images →](./figures-and-images.md)
- [Managing Citations →](./citations.md)
- [Creating Jupyter Notebooks →](./jupyter-notebooks.md)
- [Learn About Curvenote →](../what-is-curvenote.md)
