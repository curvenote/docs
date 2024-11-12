---
title: Submission Kinds
---

Curvenote articles allow for various levels of interactivity, connectivity, and computational integration. Whether your content is simple text with static visuals or fully networked and interactive, Curvenote offers robust solutions to publish your scientific work in an open, reproducible format. It is possible to include interactivity and computation in publications by simply attaching one or more Jupyter Notebooks and ensuring that the reproducible computational environment is set up correctly.

Out of the box, Curvenote's web-based format enhances the reading experience with **rich links, cross-references, hover popovers**, and vastly improved machine readability for metadata and content. Every article has an **API and index**, allowing figures, sections, tables, and equations to be directly cross-referenced from any other article.

Curvenote's format serves as a foundation for **networked open science publishing**, enabling greater reuse, transparency, and interaction across different works. These articles can contain **interactive graphs**, connect to compute services, and allow authors to include high-quality visualizations that let readers explore the work more deeply, improving both reproducibility and reuse.

:::{figure} ./images/scipy-proceeding-walkthroughs.mp4
:label: fig:scipy-walkthrough
Articles from the [Scipy Proceedings](https://proceedings.scipy.org).
:::

## Supporting a range of article types

Curvenote supports several article {term}`kinds <Submission Kind>` that can be defined for any {term}`venue`. All Curvenote articles are built primarily for the web and are focused on providing a dynamic reading experience with hover popups, and **rich cross-referencing**. In addition to creating PDFs and JATS, each submission kind can have varying degrees of interactivity and computational resources, depending on the needs of your research.

Abstracts and Summaries
: Designed for concise communication, **abstracts** can serve as standalone entries or be part of larger works. These typically contain text and static visualizations but can also include **rich cross-references** and metadata.
: Examples: [Agrogeo 2024 Conference](https://agrogeo24.curve.space)

Research Articles
: Research articles on Curvenote can start from **LaTeX, Word[^word], or MyST Markdown** formats. These articles are will become highly structured and can incorporate **hover references** and **inline citations** to provide deep contextual links between sections, figures, and references. Research articles can remain static or integrate with computational environments and interactive features.
: Examples: [Scipy Proceedings](https://proceedings.scipy.org)

Interactive Articles
: Building on the web-based article format, **interactive articles** allow readers to explore models, results, and datasets through specific widgets and tools embedded within the article. These articles often connect to **external datasets** (which should be DOI-accessible), giving readers a more **hands-on experience** with the research findings. The interactivity remains self-contained within the article itself.
: Examples: [AGU Notebooks Now!](https://agu.curve.space/articles/NN0000)

Computational Articles
: The most dynamic format, **computational articles** extend interactive articles by incorporating **live code execution** and **computational notebooks**. These articles rely on active computational environments to fully explore the content. Authors can include **Jupyter Notebooks**, allowing readers to rerun experiments, adjust parameters, or even extend the research interactively. Despite this, computational articles still degrade gracefully, and a **static form** of the article is always available to readers when computation is unavailable.
: Examples: [Elemental Microscopy](https://elementalmicroscopy.com)

[^word]: Microsoft Word requires higher article processing charges at this time.

:::{figure} ./images/microscopy.mp4
:label: fig:microscopy
Zooming in on a hollow gold nano-sphere directly in an article. (CC-BY-4.0) [@10.69761/TAMJ0615]
:::

<!-- Move to reading -->

## Networked science

Curvenote is helping to drive a new era of **networked scientific publishing**. Each article published on our platform is built with modern web standards and can be linked and referenced dynamically from other articles. This **open, interconnected framework** allows for the seamless sharing of ideas, methods, and results, fostering more collaborative and transparent research.

- **Rich Cross-Referencing**: Create references between elements (figures, equations, tables) within or across articles.
- **Interactive Visualizations**: Embed interactive graphs and visual tools to allow readers to explore your data in real time.
- **Compute Integration**: Articles can connect to live compute services, enabling readers to run code, explore datasets, or modify visualizations.
- **Improved Reproducibility**: By including notebooks, executable code, and access to underlying data, Curvenote articles significantly improve the reproducibility of scientific work.
- **Enhanced Readability**: Every article is presented in a way that maintains full readability as a static web page or downloadable PDF, ensuring access even when live computation isn't available.

As scientific publishing continues to evolve, Curvenote is at the forefront of redefining how work is **communicated**, **built upon**, and **reused**. Our platform offers authors an unprecedented level of flexibility in creating dynamic, interconnected, and reproducible research articles.
