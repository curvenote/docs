---
title: Reuse Text, Figures, and Blocks
short_title: Reuse Blocks
---

# Reuse Text, Figures, and Blocks

## Overview
Reuse content blocks, figures, and text across multiple Curvenote projects using the block system and oxa links

Curvenote's block system allows you to create reusable content components that can be shared across articles, notebooks, and projects. All copies of a block are linked, meaning changes propagate to all instances, making it easy to maintain consistency and update content across multiple documents.

## Before You Start

Make sure you have:
- A Curvenote project with content you want to reuse
- Access to the Curvenote editor interface
- Content blocks that you want to share or reuse
- Understanding of the block system and oxa links

## 1. Understand the Block System

Blocks are modular content units (text, figures, images, code outputs) that can be reused across projects. All copies are linked, so changes propagate to all instances automatically.

## 2. Copy Block Links

**Keyboard method**: Select block → `CTRL-C` (Windows/Linux) or `⌘-C` (Mac)

**Menu method**: Select block → ⋮ Options → Copy Link

**For specific versions**: Select block → Block Details Panel → version ⋮ Options → Copy Link

## 3. Import Blocks into Documents

**Keyboard method**: Enter Draft Mode → Select block → `CTRL-V` (Windows/Linux) or `⌘-V` (Mac)

**Menu method**: Enter Draft Mode → Select block → ⋮ More Options → Import Block → Paste link → INSERT BLOCK

## 4. Reuse Jupyter Outputs as Figures

Copy oxa link from Jupyter output cell → Import into article → Format as figure if needed

**Interactive outputs**: Plotly, Altair, Bokeh, Matplotlib, Pandas remain interactive when imported

**Update outputs**: Edit code in Jupyter → Run cell → Save notebook → Changes propagate to all instances

## 5. Reuse Code as Templates

Copy oxa link → Import into new notebook/article → Make modifications as needed

**For independent templates**: Import block → ⋮ Options → Unlink Block (versioning restarts, no propagation)

**Best practices**: Document code, use descriptive names, organize by function

## 6. Manage Block Versions

Select block → Block Details Panel → Browse versions → Preview by clicking → USE VERSION or CLEAR PREVIEW

**Version management**: All instances updated automatically, track changes, rollback capability, team collaboration

## 7. Organize Reusable Content

**Block Settings**: Select block → ⋮ Options → Block Settings → Add title, description, tags, thumbnail

**Organization**: Create templates, use tags, document purpose, regular maintenance

**Sharing**: Public blocks, team libraries, documentation, version control

## Next Steps

- [Manage Version History →](./version-history.md)
- [Add Interactive Figures →](./interactive-figures.md)
- [Organize Your Content →](./organize-content.md)

---

💡 **Tip:** Use descriptive titles and tags for your blocks to make them easier to find and reuse later. A well-organized block library saves time and ensures consistency across projects.

⚡ **Important: Block Reuse Best Practices**

- **Link when possible**: Keep blocks linked for automatic updates and consistency
- **Unlink for templates**: Use unlinked copies when you want independent versions
- **Version management**: Regularly review and update your reusable blocks
- **Documentation**: Always document the purpose and usage of shared blocks
- **Organization**: Use tags and titles to keep your block library organized
