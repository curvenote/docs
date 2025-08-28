---
title: Organize Content into Sections
short_title: Organize Content
---

# Organize Content into Sections

## Overview
Structure your Curvenote project with folders, navigation groups, and table of contents to create a well-organized content hierarchy

Curvenote provides multiple ways to organize your content, from simple folder structures to complex navigation hierarchies. Proper organization helps readers navigate your content and makes it easier to manage large projects with multiple articles, notebooks, and resources.

## Before You Start

Make sure you have:
- A Curvenote project with content you want to organize
- A clear understanding of your content structure and hierarchy
- Access to your project's configuration files
- Content that can be logically grouped into sections

## 1. Organize with Folder Structure

Create a logical folder hierarchy for your content:

### Basic Folder Organization
Organize your content using folders in your project structure:

```
content/
├── index.md                    # Main landing page
├── introduction.md             # Introduction section
├── methods/
│   ├── data-collection.md      # Data collection methods
│   ├── analysis.md             # Analysis methods
│   └── validation.md           # Validation methods
├── results/
│   ├── experiment-1.md         # First experiment results
│   ├── experiment-2.md         # Second experiment results
│   └── comparison.md           # Results comparison
├── discussion/
│   ├── implications.md         # Research implications
│   └── future-work.md          # Future research directions
└── assets/
    ├── figures/                # Image files
    ├── data/                   # Dataset files
    └── code/                   # Code files
```

### Folder Best Practices
- **Use descriptive names**: Clear, meaningful folder names
- **Keep it shallow**: Avoid deeply nested folders (max 3-4 levels)
- **Group related content**: Put similar content together
- **Separate assets**: Keep images, data, and code in dedicated folders

## 2. Configure Table of Contents

Set up navigation structure using `_toc.yml` files:

### Basic Table of Contents
Create a `_toc.yml` file in your content directory:

```yaml
# Table of contents
# Learn more at https://jupyterbook.org/customize/toc.html

format: jb-book
root: index
chapters:
  - file: introduction
  - file: methods/data-collection
  - file: methods/analysis
  - file: methods/validation
  - file: results/experiment-1
  - file: results/experiment-2
  - file: results/comparison
  - file: discussion/implications
  - file: discussion/future-work
```

### Advanced Table of Contents
Create nested sections with subsections:

```yaml
# Table of contents
format: jb-book
root: index
chapters:
  - file: introduction
  - title: Methods
    sections:
      - file: methods/data-collection
      - file: methods/analysis
      - file: methods/validation
  - title: Results
    sections:
      - file: results/experiment-1
      - file: results/experiment-2
      - file: results/comparison
  - title: Discussion
    sections:
      - file: discussion/implications
      - file: discussion/future-work
```

## 3. Use Navigation Groups

Organize content using Curvenote's navigation panel:

### Create Navigation Groups
1. **Access your project** in the Curvenote editor
2. **Click the + button** at the bottom of the navigation panel
3. **Select "Create Group"** to add a new navigation group
4. **Name your group** with a descriptive title
5. **Drag content** into the group to organize it

### Group Organization
- **Research Sections**: Group by research phases (methods, results, discussion)
- **Content Types**: Separate articles, notebooks, and resources
- **Topics**: Group by subject matter or themes
- **Timeline**: Organize by publication date or research timeline

### Navigation Best Practices
- **Keep groups small**: 5-7 items per group maximum
- **Use clear names**: Group titles should be descriptive
- **Logical order**: Arrange content in a logical sequence
- **Consistent structure**: Use similar organization across projects

## 4. Structure Individual Documents

Organize content within individual articles and notebooks:

### Document Structure
Use consistent heading hierarchy in your documents:

```markdown
# Main Title

## Introduction
Brief overview of the section

### Background
Context and previous work

### Objectives
What this section aims to achieve

## Methods
Description of the approach

### Data Collection
How data was gathered

### Analysis
How data was processed

## Results
Findings and outcomes

### Key Findings
Main results summary

### Statistical Analysis
Detailed statistical results

## Discussion
Interpretation and implications

### Implications
What the results mean

### Limitations
Study limitations and constraints

## Conclusion
Summary and next steps
```

### Heading Best Practices
- **Use consistent hierarchy**: H1 → H2 → H3 → H4
- **Descriptive titles**: Clear, specific section names
- **Logical flow**: Information flows naturally between sections
- **Balanced sections**: Similar depth across major sections

## 5. Manage Multiple Projects

Organize content across multiple projects in a single site:

### Project Structure
When working with multiple projects, organize them clearly:

```yaml
site:
  nav:
    - title: Home
      url: /
    - title: Research
      children:
        - title: Current Projects
          url: /research/current
        - title: Publications
          url: /research/publications
        - title: Data
          url: /research/data
    - title: Teaching
      children:
        - title: Courses
          url: /teaching/courses
        - title: Materials
          url: /teaching/materials
    - title: About
      url: /about
```

### Project Organization
- **Separate concerns**: Keep different types of content separate
- **Clear navigation**: Make it easy to find specific content
- **Consistent structure**: Use similar organization across projects
- **Logical grouping**: Group related projects together

## 6. Optimize for Different Content Types

Organize based on your content type:

### Research Articles
```
content/
├── abstract.md
├── introduction.md
├── methods/
├── results/
├── discussion.md
├── conclusion.md
└── references.md
```

### Course Materials
```
content/
├── syllabus.md
├── lectures/
│   ├── week-1/
│   ├── week-2/
│   └── week-3/
├── assignments/
├── resources/
└── schedule.md
```

### Lab Website
```
content/
├── index.md
├── research/
│   ├── projects/
│   ├── publications/
│   └── data/
├── team/
├── news/
└── contact.md
```

## Next Steps

- [Reuse Content Blocks →](./reuse-blocks.md)
- [Manage Version History →](./version-history.md)
- [Set Up Site Navigation →](../site-design/navigation.md)

---

💡 **Tip:** Start with a simple folder structure and refine it as your project grows. You can always reorganize content later as your needs evolve.

⚡ **Important: Organization Best Practices**

- **Plan ahead**: Think about your content structure before creating files
- **Be consistent**: Use similar organization patterns across your projects
- **Keep it simple**: Don't over-organize - simple structures are easier to maintain
- **Document structure**: Include README files to explain your organization
- **Regular review**: Periodically review and update your organization as content grows
