---
title: Reusing Blocks
description: ''
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: '2022-03-12T04:52:05.298Z'
name: reusing-blocks
oxa: oxa:m59m7JQmWVyPjlASj9v3/93FoBDnslDe5zX30YhHW
tags: []
---

When a notebook is added to Curvenote, each of the cells are considered blocks and have a unique oxa link. These links correspond to a specific version number of the block and allow you to reuse your content throughout Curvenote. All copies of a block are linked so you can easily view, edit, and access all previous versions of the block from any copy. Reusing Jupyter cells is a convenient and simple way to integrate your static or _interactive_ code outputs directly into your writing, use prewritten code as a template for new projects, and more!

To copy a link to the current saved version of a block you can either use keyboard shortcuts or the Curvenote menus. You can also copy a link to a specific version of a cell using the Block Details Panel.

**To copy a link via keyboard shortcuts**\:

- Select a block.
  - When your block is in Draft Mode you will need to either click on the block selection tab or hit `ESC` until you have selected the block, not the content within it.
  - Selecting a block will slightly darken the blue of the block selection tab.
- Use the appropriate **copy** keyboard shortcut: `CTRL-C`, `⌘-C`

**To copy a link via the Curvenote menus:**

- Open the $\mathbf{\vdots}$ **Options** menu for the block.
  - Select **Copy Link**.

**To copy a link to a specific version of cell:**

- Select a block.
- Expand the Block Details Panel.
- Open the version $\mathbf{\vdots}$ **Options** menu.
  - Select **Copy Link.**

When you have copied the link a black box will appear in the bottom left of your screen saying your link is copied!

```{figure} images/m59m7JQmWVyPjlASj9v3-t9dXtlwVXKLTa2veZl9I-v1.gif
:name: icLR2JsuRp
:align: center
:width: 70%
```

To import a block you must be in Draft Mode (if not, click **EDIT** in the app bar at the top of the page). Blocks can also be imported using either the paste keyboard shortcut or the Curvenote menus.

**To import a block via keyboard shortcuts**\:

- Select the block **above** where you want to import your block.
  - When your block is in Draft Mode you will need to either click on the block selection tab or hit `ESC` until you have selected the block, not the content within it.
  - Selecting a block will slightly darken the blue of the block selection tab.
- Use the appropriate **paste** keyboard shortcut: `CTRL-V`, `⌘-V`

**To import a block via the Curvenote menus:**

- Select the block you want to add a block above or below.
- Open the $\mathbf{\vdots}$ **More Options** menu to the right of the ➕ corresponding to the location you want to import the block.
  - Select **Import Block**.
- Paste the oxa link in the pop-up window.
  - Click **INSERT BLOCK**

```{figure} images/m59m7JQmWVyPjlASj9v3-7CcYz8tQ6zEhRb67dUEw-v1.gif
:name: xsrcEYh25q
:align: center
:width: 70%
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/lMTj9KZqAB6tSrKlYXpB.1"}

## Interactive Outputs

Most interactive output cells from Jupyter will remain interactive when viewed on Curvenote. Plots and displays created using libraries and packages such as [Altair](https://altair-viz.github.io/), [Bokeh](https://bokeh.org/), [Bokeh-Holoviews](https://holoviews.org/index.html), [Bokeh-Panel](https://panel.holoviz.org/index.html), [Leaflet](https://leafletjs.com/), [Matplotlib](https://matplotlib.org/stable/index.html), [Pandas](https://pandas.pydata.org/pandas-docs/stable/index.html#), [Plotly](https://plotly.com/python/), [Seaborn](http://seaborn.pydata.org/index.html) maintain a local state and therefore you can continue to interact with them outside of Jupyter. Curvenote cannot currently run code cells, thus features such as [ipywidgets](https://ipywidgets.readthedocs.io/en/latest/) are not interactive on Curvenote.

```{figure} images/m59m7JQmWVyPjlASj9v3-xuXH7Ccnnc6LC0afMtPn-v1.gif
:name: jV2whkz2Eq
:align: center
:width: 100%
```

Learn more and explore examples of interactive plotting on Curvenote ➡️ [Example Notebooks](https://curvenote.com/@curvenote/example-notebooks)

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/dlGsxOPCflXgJWexUSod.1"}

## Reuse Code as a Template

Often you may want to reuse or start from code you or someone else has already written. Curvenote makes this process easy!

- To reuse content {u}`you` have already written that is saved on Curvenote:
  - Simply import the cells you want to use following the instructions above. The cells are linked to communicate changes across all copies.
- To use content you or someone else has written as a template for a new notebook, and remove the communication of changes between cells:
  - You will need to import and unlink the cell. Unlinking the imported cell from the original copy, will leave the current content within the cell but remove the previous versions. Versioning will restart when you save your notebook. Learn more [Unlinking Notebooks](oxa:m59m7JQmWVyPjlASj9v3/NdljohZBrFlaf0p1xeAs 'Unlinking Notebooks')
- To use content someone else has written that is not saved on Curvenote:
  - Add their notebook to Curvenote then import! Learn more [Add & Link Notebooks](oxa:m59m7JQmWVyPjlASj9v3/SiW5BdJkvLNs1kVQxnx0 'Add & Link Notebooks')
  - Learn more about how Curvenote works with notebooks available on [Binder](https://mybinder.org/) [Curvenote & Binder](oxa:m59m7JQmWVyPjlASj9v3/zb0bOrpIpkWMjuF3oAOK 'Curvenote & Binder')

```{warning}
Cells shared publicly on Curvenote have an oxa link that can be copied by anyone. To make edits and version these cells, you will need to unlink the cells from their original project. This is equivalent to copying the content of their cell into a new cell in your notebook.

```
