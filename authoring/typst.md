---
title: Write a Scientific Paper using Typst
short_title: Write using Typst
---

# Write a Scientific Paper using Typst

## Overview
Create publication-quality scientific papers using Typst with Curvenote, combining modern typesetting with powerful mathematical notation and collaborative features

Typst is a modern, fast typesetting system designed for scientific and academic writing. It offers LaTeX-like capabilities with improved performance, cleaner syntax, and better error messages. Curvenote provides seamless Typst integration, allowing you to write in MyST Markdown and export to Typst, or work directly with Typst files while maintaining version control and collaboration features.

## Before You Start

Make sure you have:
- A Curvenote project to write your paper in
- Typst compiler installed (typst-cli)
- Understanding of Typst syntax and structure
- Journal template or formatting requirements
- Access to the Curvenote editor interface

## 1. Set Up Your Typst Environment

Install and configure Typst for scientific writing:

### Install Typst Compiler
```bash
# Using Cargo (Rust package manager)
cargo install typst-cli

# For macOS (using Homebrew)
brew install typst

# For Windows (using Chocolatey)
choco install typst

# For Ubuntu/Debian
curl -L https://github.com/typst/typst/releases/latest/download/typst-x86_64-unknown-linux-gnu.tar.gz | tar xz
sudo mv typst /usr/local/bin/
```

### Verify Installation
```bash
# Check Typst installation
typst --version

# Test compilation
typst compile test.typ
```

### Install Fonts (Optional)
```bash
# Install additional fonts for scientific writing
# Typst includes many fonts by default, but you can add more
```

## 2. Structure Your Typst Paper

Organize your paper with standard Typst document structure:

### Basic Document Structure
```typst
#set document(title: "Your Scientific Paper Title", author: "Your Name")
#set page(numbering: "1")

= Abstract
Your abstract goes here. This should provide a brief summary of your research question, methods, and key findings.

= Introduction
Background information, research objectives, and significance of your work.

= Methods
Detailed description of your approach, data sources, and analysis methods.

= Results
Presentation of your findings with tables, figures, and statistical analysis.

= Discussion
Interpretation of results, implications, and future research directions.

= References
#bibliography("references.bib")
```

### Advanced Document Structure
```typst
#import "@preview/book:0.2.1": *

#set document(
  title: "Advanced Scientific Paper Title",
  author: "Author Name",
  date: datetime.today(),
  paper: "a4"
)

#set page(
  numbering: "1",
  margin: (x: 2.5cm, y: 2.5cm)
)

#set text(
  font: "New Computer Modern",
  size: 11pt,
  line-height: 1.4
)

#set par(
  justify: true,
  first-line-indent: 1em
)

= Abstract
Your comprehensive abstract here.

= Introduction
#label("sec:introduction")
Background information and research objectives.

= Methods
#label("sec:methods")

== Data Collection
#label("subsec:data")
Detailed description of data collection procedures.

== Analysis
#label("subsec:analysis")
Analysis methods and statistical approaches.

= Results
#label("sec:results")
Presentation of findings and statistical results.

= Discussion
#label("sec:discussion")
Interpretation and implications of results.

= Conclusion
#label("sec:conclusion")
Summary and future directions.

= References
#bibliography("references.bib", style: "apa")
```

## 3. Write Mathematical Content

Add complex mathematical equations and notation:

### Inline Mathematics
```typst
The quadratic equation $ax^2 + bx + c = 0$ has solutions given by the quadratic formula.

The correlation coefficient $r$ ranges from $-1$ to $+1$, where $r = 0$ indicates no correlation.

The p-value threshold $alpha = 0.05$ is commonly used in statistical testing.
```

### Display Equations
```typst
The quadratic formula is:
$x = (-b +- sqrt(b^2 - 4ac)) / (2a)$

Linear regression model:
$y = mx + b = 2.5x + 1.2$

Gaussian integral:
$integral(-infinity, infinity, e^(-x^2) dx) = sqrt(pi)$
```

### Complex Mathematical Structures
```typst
Linear model:
$f(x) = sum_(i=1)^n w_i x_i + b = bold(w)^T bold(x) + b$

Maxwell's equations:
${
  nabla dot bold(E) = rho / epsilon_0 \
  nabla dot bold(B) = 0 \
  nabla times bold(E) = -del bold(B) / del t \
  nabla times bold(B) = mu_0 bold(J) + mu_0 epsilon_0 del bold(E) / del t
}$

Matrix operations:
$bold(A) = (a_(i,j))_(i=1)^m_(j=1)^n$
```

### Mathematical Environments
```typst
#align(
  y &= mx + b \
  &= 2.5x + 1.2
)

#equation(
  x = (-b +- sqrt(b^2 - 4ac)) / (2a)
) <quadratic>

#theorem(
  name: "Central Limit Theorem",
  body: [
    Let $X_1, X_2, ..., X_n$ be independent and identically distributed random variables with mean $mu$ and variance $sigma^2$. Then:
    $bar(X_n) = (1/n) sum_(i=1)^n X_i$
    converges in distribution to $N(mu, sigma^2/n)$ as $n rightarrow infinity$.
  ]
)
```

## 4. Add Tables and Figures

Create professional tables and include figures:

### Professional Tables
```typst
#table(
  caption: "Summary Statistics by Experimental Group",
  columns: 6,
  align: center,
  [*Group*], [*N*], [*Mean*], [*SD*], [*Min*], [*Max*],
  [Control], [25], [15.2], [2.1], [12.1], [18.9],
  [Treatment A], [25], [18.7], [2.8], [14.3], [22.1],
  [Treatment B], [25], [17.3], [2.5], [13.8], [20.5]
)
```

### Advanced Tables
```typst
#table(
  caption: "Regression Results",
  columns: 6,
  align: center,
  [*Variable*], [*Coefficient*], [*SE*], [*t-value*], [*p-value*], [*95% CI*],
  [Intercept], [2.45], [0.31], [7.90], [<0.001], [[1.84, 3.06]],
  [Age], [0.12], [0.05], [2.40], [0.017], [[0.02, 0.22]],
  [Gender (Male)], [-0.34], [0.15], [-2.27], [0.024], [[-0.64, -0.04]],
  [Education], [0.08], [0.03], [2.67], [0.008], [[0.02, 0.14]],
  [*Note*: $R^2 = 0.23$, $F(3, 196) = 19.45$, $p < 0.001$]
)
```

### Including Figures
```typst
#figure(
  image("figures/results_plot.pdf", width: 80%),
  caption: "Experimental results showing significant differences between groups. Error bars represent standard error of the mean."
) <fig:results>

#figure(
  stack(
    direction: horizontal,
    spacing: 1em,
    figure(
      image("figures/plot_a.pdf", width: 100%),
      caption: "Control group results"
    ),
    figure(
      image("figures/plot_b.pdf", width: 100%),
      caption: "Treatment group results"
    )
  ),
  caption: "Comparison of experimental outcomes between control and treatment groups."
) <fig:comparison>
```

### Custom Figure Functions
```typst
#let scientific-figure(image, caption, label) = {
  figure(
    image,
    caption: caption,
    numbering: "Figure #counter(figure).",
  ) <#label>
}

#scientific-figure(
  image("figures/experiment.pdf", width: 70%),
  "Experimental setup and methodology",
  "fig:experiment"
)
```

## 5. Add Citations and References

Include academic citations using Typst's bibliography system:

### Citation Commands
```typst
= Literature Review

Recent studies have shown significant progress in this field @jones2023, @brown2022.
The work by @smith2023 provides a comprehensive framework for understanding these patterns.

Our approach builds upon the methodology described by @wilson2021, extending it to handle 
larger datasets and more complex experimental conditions.

Multiple studies have demonstrated the effectiveness of this approach @jones2023; @brown2022; @smith2023.
```

### Bibliography Configuration
```typst
#set bibliography(
  style: "apa",
  title: "References",
  numbering: "1."
)

#bibliography("references.bib")
```

### BibTeX File
Create a `references.bib` file:
```bibtex
@article{jones2023,
  title={Recent advances in computational methods for scientific analysis},
  author={Jones, A. and Wilson, B. and Davis, C.},
  journal={Nature},
  year={2023},
  volume={123},
  pages={456--789},
  doi={10.1038/nature12345}
}

@article{brown2022,
  title={Novel approaches to data analysis in experimental sciences},
  author={Brown, C. and Miller, D.},
  journal={Science},
  year={2022},
  volume={456},
  pages={123--456},
  doi={10.1126/science.abc1234}
}

@article{smith2023,
  title={A comprehensive framework for scientific computing},
  author={Smith, J. and Johnson, K.},
  journal={Computational Science},
  year={2023},
  volume={78},
  pages={234--567},
  doi={10.1016/j.compsci.2023.123456}
}

@book{wilson2021,
  title={Advanced Methods in Scientific Research},
  author={Wilson, R.},
  year={2021},
  publisher={Academic Press},
  address={New York}
}
```

## 6. Cross-Reference Content

Link to figures, tables, and sections throughout your paper:

### Cross-References
```typst
= Results

Our analysis produced several key visualizations. The main results are shown in @fig:results, 
and detailed statistics are presented in @tbl:summary_stats.

= Discussion

As shown in @fig:results, the data reveals clear patterns that support our hypothesis.
The statistical analysis presented in @tbl:summary_stats confirms the significance of these findings.

Our methodology, described in @sec:methods, follows established protocols in the field.
```

### Automatic Numbering
```typst
= Methods
#label("sec:methods")

Our computational approach follows the methodology described in @subsec:data.

== Data Collection
#label("subsec:data")
Detailed description of data collection procedures...

== Analysis
#label("subsec:analysis")
Analysis methods build upon the data collection described in @subsec:data.
```

### Custom Reference Functions
```typst
#let ref-fig(label) = "Figure #counter(figure)"
#let ref-tbl(label) = "Table #counter(table)"
#let ref-sec(label) = "Section #counter(heading)"

Our results (@ref-fig("results")) show significant differences between groups.
The statistical analysis (@ref-tbl("summary")) confirms these findings.
```

## 7. Use Journal Templates

Apply specific journal formatting requirements:

### Journal-Specific Templates
```typst
// Nature journal template
#set document(
  title: "Your Paper Title",
  author: "Your Name",
  paper: "a4"
)

#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, first-line-indent: 0pt)

// Science journal template
#set document(
  title: "Your Paper Title",
  author: "Your Name",
  paper: "a4"
)

#set text(font: "Times New Roman", size: 11pt)
#set par(justify: true, first-line-indent: 1em)
```

### Custom Template Setup
```typst
#set document(
  title: "Your Paper Title",
  author: "Your Name",
  date: datetime.today(),
  paper: "a4"
)

#set page(
  numbering: "1",
  margin: (x: 2.5cm, y: 2.5cm)
)

#set text(
  font: "New Computer Modern",
  size: 11pt,
  line-height: 1.4
)

#set par(
  justify: true,
  first-line-indent: 1em
)

#set heading(
  numbering: "1.1",
  font: "New Computer Modern",
  weight: "bold"
)

#set list(
  indent: 1em,
  body-indent: 1em
)

// Journal-specific metadata
#let journal-name = "Journal of Scientific Research"
#let volume-number = "42"
#let issue-number = "3"
#let article-number = "12345"
```

### Template Functions
```typst
#let journal-header() = {
  align(center)[
    #text(weight: "bold", size: 14pt)[#journal-name] \
    #text(size: 12pt)[Volume #volume-number, Issue #issue-number] \
    #text(size: 10pt)[Article #article-number]
  ]
}

#journal-header()
```

## 8. Compile and Export

Build your Typst document and export from Curvenote:

### Local Compilation
```bash
# Basic compilation
typst compile your_paper.typ

# Compile with specific output
typst compile your_paper.typ --output your_paper.pdf

# Watch for changes (development mode)
typst watch your_paper.typ

# Compile with custom fonts
typst compile your_paper.typ --font-path /path/to/fonts
```

### Curvenote Export
```bash
# Export to Typst using Curvenote CLI
curvenote export typst

# Export with specific template
curvenote export typst --template nature

# Export with custom output name
curvenote export typst --output my_paper.typ
```

### Export Configuration
Create `curvenote.yml`:
```yaml
project:
  title: "My Typst Scientific Paper"
  description: "Research paper in Typst format"
  
  # Typst export settings
  export:
    typst:
      template: article
      bibliography: references.bib
      figures: true
      tables: true
      
  # Bibliography settings
  bibliography:
    - references.bib
```

### Advanced Compilation
```bash
# Compile with bibliography
typst compile your_paper.typ
typst compile your_paper.typ

# Compile with custom template
typst compile your_paper.typ --root /path/to/templates

# Generate multiple formats
typst compile your_paper.typ --format pdf
typst compile your_paper.typ --format png
```

## Next Steps

- [Add Citations and References →](./citations.md)
- [Create Interactive Figures →](./figures-and-images.md)
- [Organize Your Content →](./organize-content.md)
- [Export to PDF →](../publishing/export-pdf.md)

---

💡 **Tip:** Start with a basic Typst structure, then add complexity as needed. Use Curvenote's version control to track changes and collaborate with co-authors.

⚡ **Important: Typst Best Practices**

- **Clean syntax**: Use Typst's modern, readable syntax for better maintainability
- **Modular organization**: Break large documents into separate files using imports
- **Version control**: Track changes to your Typst source files
- **Template compliance**: Follow journal-specific formatting requirements
- **Bibliography management**: Keep BibTeX files organized and up-to-date
- **Performance**: Take advantage of Typst's fast compilation times for iterative development
