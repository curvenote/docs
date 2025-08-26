---
title: Write a Scientific Paper using LaTeX
short_title: Write using LaTeX
---

# Write a Scientific Paper using LaTeX

## Overview
Create publication-quality scientific papers using LaTeX with Curvenote, combining traditional typesetting with modern collaborative features

LaTeX is the gold standard for scientific and academic writing, offering precise control over formatting, mathematical equations, and publication-ready output. Curvenote provides seamless LaTeX integration, allowing you to write in MyST Markdown and export to LaTeX, or work directly with LaTeX files while maintaining version control and collaboration features.

## Before You Start

Make sure you have:
- A Curvenote project to write your paper in
- LaTeX distribution installed (TeX Live, MiKTeX, or MacTeX)
- Understanding of LaTeX syntax and structure
- Journal template or formatting requirements
- Access to the Curvenote editor interface

## 1. Set Up Your LaTeX Environment

Install and configure LaTeX for scientific writing:

### Install LaTeX Distribution
```bash
# For Ubuntu/Debian
sudo apt-get install texlive-full

# For macOS (using Homebrew)
brew install --cask mactex

# For Windows
# Download and install MiKTeX from https://miktex.org/
```

### Install Required Packages
```bash
# Install additional LaTeX packages
tlmgr install amsmath amssymb geometry hyperref natbib
tlmgr install graphics graphicx subcaption booktabs
tlmgr install algorithm algorithmic listings
```

### Verify Installation
```bash
# Check LaTeX installation
latex --version
pdflatex --version
```

## 2. Structure Your LaTeX Paper

Organize your paper with standard LaTeX document structure:

### Basic Document Structure
```latex
\documentclass[11pt,a4paper]{article}

% Preamble
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{natbib}

% Document metadata
\title{Your Scientific Paper Title}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\begin{abstract}
Your abstract goes here. This should provide a brief summary of your research question, methods, and key findings.
\end{abstract}

\section{Introduction}
Background information, research objectives, and significance of your work.

\section{Methods}
Detailed description of your approach, data sources, and analysis methods.

\section{Results}
Presentation of your findings with tables, figures, and statistical analysis.

\section{Discussion}
Interpretation of results, implications, and future research directions.

\bibliographystyle{plainnat}
\bibliography{references}

\end{document}
```

### Advanced Document Structure
```latex
\documentclass[11pt,a4paper]{article}

% Enhanced preamble
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx,subcaption}
\usepackage{hyperref}
\usepackage{natbib}
\usepackage{geometry}
\usepackage{booktabs}
\usepackage{algorithm}
\usepackage{algorithmic}
\usepackage{listings}

% Page setup
\geometry{margin=1in}
\hypersetup{colorlinks=true,linkcolor=blue,citecolor=blue}

% Custom commands
\newcommand{\todo}[1]{\textcolor{red}{TODO: #1}}
\newcommand{\note}[1]{\textcolor{blue}{Note: #1}}

\begin{document}

\title{Advanced Scientific Paper Title}
\author{Author Name}
\date{\today}

\maketitle

\begin{abstract}
Your comprehensive abstract here.
\end{abstract}

\tableofcontents
\newpage

\section{Introduction}
\label{sec:introduction}

\section{Methods}
\label{sec:methods}

\subsection{Data Collection}
\label{subsec:data}

\subsection{Analysis}
\label{subsec:analysis}

\section{Results}
\label{sec:results}

\section{Discussion}
\label{sec:discussion}

\section{Conclusion}
\label{sec:conclusion}

\bibliographystyle{plainnat}
\bibliography{references}

\end{document}
```

## 3. Write Mathematical Content

Add complex mathematical equations and notation:

### Inline Mathematics
```latex
The quadratic equation $ax^2 + bx + c = 0$ has solutions given by the quadratic formula.

The correlation coefficient $r$ ranges from $-1$ to $+1$, where $r = 0$ indicates no correlation.

The p-value threshold $\alpha = 0.05$ is commonly used in statistical testing.
```

### Display Equations
```latex
\begin{equation}
    x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
    \label{eq:quadratic}
\end{equation}

\begin{align}
    y &= mx + b \\
    &= 2.5x + 1.2
    \label{eq:linear}
\end{align}

\begin{equation}
    \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
    \label{eq:gaussian}
\end{equation}
```

### Complex Mathematical Structures
```latex
\begin{equation}
    \begin{split}
        f(x) &= \sum_{i=1}^{n} w_i x_i + b \\
        &= \mathbf{w}^T \mathbf{x} + b
    \end{split}
    \label{eq:linear_model}
\end{equation}

\begin{align}
    \nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
    \nabla \cdot \mathbf{B} &= 0 \\
    \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
    \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
    \label{eq:maxwell}
\end{align}
```

## 4. Add Tables and Figures

Create professional tables and include figures:

### Professional Tables
```latex
\begin{table}[htbp]
\centering
\caption{Summary Statistics by Experimental Group}
\label{tab:summary_stats}
\begin{tabular}{lccccc}
\toprule
Group & N & Mean & SD & Min & Max \\
\midrule
Control & 25 & 15.2 & 2.1 & 12.1 & 18.9 \\
Treatment A & 25 & 18.7 & 2.8 & 14.3 & 22.1 \\
Treatment B & 25 & 17.3 & 2.5 & 13.8 & 20.5 \\
\bottomrule
\end{tabular}
\end{table}
```

### Advanced Tables
```latex
\begin{table}[htbp]
\centering
\caption{Regression Results}
\label{tab:regression}
\begin{tabular}{lccccc}
\toprule
Variable & Coefficient & SE & t-value & p-value & 95\% CI \\
\midrule
Intercept & 2.45 & 0.31 & 7.90 & <0.001 & [1.84, 3.06] \\
Age & 0.12 & 0.05 & 2.40 & 0.017 & [0.02, 0.22] \\
Gender (Male) & -0.34 & 0.15 & -2.27 & 0.024 & [-0.64, -0.04] \\
Education & 0.08 & 0.03 & 2.67 & 0.008 & [0.02, 0.14] \\
\bottomrule
\multicolumn{6}{l}{\footnotesize $R^2 = 0.23$, $F(3, 196) = 19.45$, $p < 0.001$}
\end{tabular}
\end{table}
```

### Including Figures
```latex
\begin{figure}[htbp]
\centering
\includegraphics[width=0.8\textwidth]{figures/results_plot.pdf}
\caption{Experimental results showing significant differences between groups. Error bars represent standard error of the mean.}
\label{fig:results}
\end{figure}

\begin{figure}[htbp]
\centering
\begin{subfigure}[b]{0.48\textwidth}
    \includegraphics[width=\textwidth]{figures/plot_a.pdf}
    \caption{Control group results}
    \label{fig:control}
\end{subfigure}
\hfill
\begin{subfigure}[b]{0.48\textwidth}
    \includegraphics[width=\textwidth]{figures/plot_b.pdf}
    \caption{Treatment group results}
    \label{fig:treatment}
\end{subfigure}
\caption{Comparison of experimental outcomes between control and treatment groups.}
\label{fig:comparison}
\end{figure}
```

## 5. Add Citations and References

Include academic citations using BibTeX:

### Citation Commands
```latex
\section{Literature Review}

Recent studies have shown significant progress in this field \citep{jones2023, brown2022}. 
The work by \citet{smith2023} provides a comprehensive framework for understanding these patterns.

Our approach builds upon the methodology described by \citet{wilson2021}, extending it to handle 
larger datasets and more complex experimental conditions.

Multiple studies have demonstrated the effectiveness of this approach \citep[see][]{jones2023, brown2022, smith2023}.
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
```latex
\section{Results}

Our analysis produced several key visualizations. The main results are shown in Figure~\ref{fig:results}, 
and detailed statistics are presented in Table~\ref{tab:summary_stats}.

\section{Discussion}

As shown in Figure~\ref{fig:results}, the data reveals clear patterns that support our hypothesis.
The statistical analysis presented in Table~\ref{tab:summary_stats} confirms the significance of these findings.

Our methodology, described in Section~\ref{sec:methods}, follows established protocols in the field.
```

### Automatic Numbering
```latex
\section{Methods}
\label{sec:methods}

Our computational approach follows the methodology described in Section~\ref{subsec:data}.

\subsection{Data Collection}
\label{subsec:data}

Detailed description of data collection procedures...

\subsection{Analysis}
\label{subsec:analysis}

Analysis methods build upon the data collection described in Section~\ref{subsec:data}.
```

## 7. Use Journal Templates

Apply specific journal formatting requirements:

### Journal-Specific Templates
```latex
% For Nature journal
\documentclass[11pt]{article}
\usepackage{nature}

% For Science journal
\documentclass[11pt]{article}
\usepackage{science}

% For IEEE journals
\documentclass[conference]{IEEEtran}

% For ACM journals
\documentclass[acmsmall]{acmart}
```

### Custom Template Setup
```latex
\documentclass[11pt,a4paper]{article}

% Journal-specific packages
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{natbib}

% Journal-specific formatting
\usepackage[margin=1in]{geometry}
\setlength{\parindent}{0pt}
\setlength{\parskip}{6pt}

% Custom commands for journal
\newcommand{\journalname}{Journal of Scientific Research}
\newcommand{\volumenumber}{42}
\newcommand{\issuenumber}{3}
\newcommand{\articlenumber}{12345}

\begin{document}

\title{Your Paper Title}
\author{Your Name}
\date{\today}

\maketitle

% Journal-specific abstract format
\begin{abstract}
Your abstract here.
\end{abstract}

\keywords{keyword1, keyword2, keyword3}

% Rest of your paper...
```

## 8. Compile and Export

Build your LaTeX document and export from Curvenote:

### Local Compilation
```bash
# Basic compilation
pdflatex your_paper.tex

# With bibliography
pdflatex your_paper.tex
bibtex your_paper
pdflatex your_paper.tex
pdflatex your_paper.tex

# With index
pdflatex your_paper.tex
makeindex your_paper
pdflatex your_paper.tex
```

### Curvenote Export
```bash
# Export to LaTeX using Curvenote CLI
curvenote export latex

# Export with specific template
curvenote export latex --template nature

# Export with custom output name
curvenote export latex --output my_paper.tex
```

### Export Configuration
Create `curvenote.yml`:
```yaml
project:
  title: "My LaTeX Scientific Paper"
  description: "Research paper in LaTeX format"
  
  # LaTeX export settings
  export:
    latex:
      template: article
      bibliography: references.bib
      figures: true
      tables: true
      
  # Bibliography settings
  bibliography:
    - references.bib
```

## Next Steps

- [Add Citations and References →](./citations.md)
- [Create Interactive Figures →](./figures-and-images.md)
- [Organize Your Content →](./organize-content.md)
- [Export to LaTeX →](../publishing/export-latex.md)

---

💡 **Tip:** Start with a basic LaTeX structure, then add complexity as needed. Use Curvenote's version control to track changes and collaborate with co-authors.

⚡ **Important: LaTeX Best Practices**

- **Consistent formatting**: Use consistent command naming and structure
- **Modular organization**: Break large documents into separate files
- **Version control**: Track changes to your LaTeX source files
- **Template compliance**: Follow journal-specific formatting requirements
- **Bibliography management**: Keep BibTeX files organized and up-to-date
