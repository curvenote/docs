---
title: Common Examples
short_title: Examples
---

# Common Examples

## Overview
Copy-paste solutions for adding figures, citations, code blocks, and interactive elements to your Curvenote content

These examples show common patterns for enhancing your content with visual elements, references, and interactive components that make your research more engaging and reproducible.

## Before You Start

Make sure you have:
- A Curvenote project with content files
- Images or figures ready to add
- References in BibTeX format
- Code examples to include

## 1. Add a Figure

Include images and figures in your content:

**File:** `content/my-article.md`

```markdown
---
title: My Research Paper
---

# Introduction

Here's my key finding:

```{figure} images/results.png
:alt: Experimental results showing significant improvement
:width: 60%
:align: center
```

The data shows a 40% improvement in performance.
```

## 2. Add Citations

Include academic references in your work:

**Add to your article:**
```markdown
## Literature Review

Previous work by @smith2023 showed similar patterns.

## References

```{bibliography}
:style: apa
```
```

**Create:** `references.bib`
```bibtex
@article{smith2023,
  title={Recent advances in the field},
  author={Smith, J. and Jones, A.},
  journal={Nature},
  year={2023}
}
```

## 3. Add Code Blocks

Include executable code in your content:

**In your article:**
```markdown
## Methods

Here's the analysis code:

```{code-cell} python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
data = pd.read_csv('experiment.csv')

# Create plot
plt.figure(figsize=(10, 6))
plt.plot(data['time'], data['value'])
plt.title('Experimental Results')
plt.show()
```
```

## 4. Add Interactive Elements

Create interactive visualizations:

**Create interactive figure:**
```markdown
## Interactive Results

```{code-cell} python
import plotly.express as px

fig = px.scatter(data, x='x', y='y', color='category')
fig.show()
```
```

## 5. Add Tables

Include structured data in your content:

**Simple table:**
```markdown
| Experiment | Result | Confidence |
|------------|--------|------------|
| Trial 1    | 85%    | ±2%        |
| Trial 2    | 87%    | ±1%        |
| Trial 3    | 86%    | ±3%        |
```

## 6. Add Navigation

Configure site navigation and actions:

**Edit:** `curvenote.yml`
```yaml
site:
  nav:
    - title: Home
      url: /
    - title: Research
      url: /research
    - title: Publications
      url: /papers
  actions:
    - title: Contact
      url: mailto:you@example.com
```

## Next Steps

- [Learn More MyST Markdown →](../authoring/writing-markdown-myst-jupyter.md)
- [Add Interactive Figures →](../authoring/interactive-figures.md)
- [Organize Your Content →](../authoring/organize-content.md)

---

💡 **Tip:** Start with simple examples and gradually add more complex elements as you become comfortable with the syntax.

⚡ **Important: Content Guidelines**

- **Images**: Use `.png`, `.jpg`, or `.svg` formats for best compatibility
- **Code**: Supports Python, R, Julia, and many other languages
- **Math**: Use `$equation$` for inline math, `$$equation$$` for block equations
- **Links**: `[text](url)` for external links, `[text](page.md)` for internal pages
