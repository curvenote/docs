---
title: Blocks & Cells
description: ''
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: '2022-03-12T04:52:50.776Z'
name: blocks-and-cells
oxa: oxa:m59m7JQmWVyPjlASj9v3/ivAEvDKvkkhID0pZl77T
tags: []
---

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/eYhW85dRjoelYF6BUlKq.1"}

On Curvenote, blocks are distinct sections of content. In [Jupyter](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#structure-of-a-notebook-document), cells are the distinct sections of content that make up a notebook. When notebooks are saved on Curvenote the cells from Jupyter are considered blocks. While there are different types of cells in Jupyter, each cell is version individually and can be reused throughout your content on Curvenote. Learn how to edit, run, save and version blocks/cells below, and how to reuse your blocks/cells in [Reusing Blocks](oxa:m59m7JQmWVyPjlASj9v3/93FoBDnslDe5zX30YhHW 'Reusing Blocks').

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/ke3gcBjVwh9Us5tBWu93.1"}

## Cell Types

There are three types of cells that can exist in notebook from Jupyter. The type of cell is passed between Jupyter and Curvenote as certain restrictions and connections exist depending on the cell type.

### Code Cells

Code cells typically contain lines of code and/or comments that can be run in Jupyter. Code cells can produce an associated Output cell that contain text, a static image, a table, or an interactive plot. Currently Curvenote does not run code, as such Code cells can only be viewed on Curvenote, and only be edited and run in Jupyter.

### Output Cells

Output cells are created when a Code cell is run and can contain text, a static image, a table, or an interactive plot. Output cells are automatically linked to their associated Code cell, but are versioned individually and independently of their Code cell (their version numbers may not match). Output cells can only be changed when their Code cells are run in Jupyter, as such they can only be viewed on Curvenote.

### Markdown Cells

Markdown cells contain rich text features and formatting including HTLM and $\LaTeX$ math. These cells are the most similar to a Curvenote block, which can also use such rich text formatting. Markdown cells can be edited in both Jupyter and Curvenote, and any block added to a notebook, then opened in Jupyter is considered a Markdown cell.

## Curvenote

Cells in Jupyter are blocks in Curvenote. When you access your notebook on Curvenote, you can enter draft mode to edit and save new versions of Markdown cells. You can also add blocks that will be considered Markdown cells when you open your notebook in Jupyter. On Curvenote you can view and use different versions of any type of cell and update the block settings.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/QvIMNhPknV9HOZDmJfVE.1"}

### Add, Edit, Save Markdown Blocks

To make changes to your notebook on Curvenote, you must be in Draft Mode. If you are not in Draft Mode, click **EDIT** in the app bar at the top of the page.

To add/import a block (Markdown cell) to your notebook:

- Select the block you want to add a block above or below.
  - To add a new block, click the corresponding ➕ to where you want to add a new block (above or below).
  - To import a block, open the $\mathbf{\vdots}$ **More Options** menu to the right of the ➕.
    - Select Import Block.
    - Paste the oxa link to the block you want to import. Learn more about importing and reusing blocks/cells [Reusing Blocks](oxa:m59m7JQmWVyPjlASj9v3/93FoBDnslDe5zX30YhHW 'Reusing Blocks').
- Make the desired changes.
- For these changes to be available in Jupyter, save a new version of the notebook by clicking **SAVE VERSION** in the app bar at the top of the page.

---

To edit a block (Markdown cell) in your notebook:

- Open a draft of the block via one of the following:
  - Double click on the block
  - Select the cell and hit ENTER.
  - Open the block $\mathbf{\vdots}$ **Options** menu and select **Edit**.
- Make the desired changes.
- For the changes to be available in Jupyter, you can either save a version of the block or the notebook.
  - To save only a version of the cell:
    - Click **SAVE VERSION** in the block details panel.
    - Open the block $\mathbf{\vdots}$ **Options** menu and select **Save Version.**
  - To save a version of the notebook:
    - Click **SAVE VERSION** in the app bar at the top of the page.

```{figure} images/m59m7JQmWVyPjlASj9v3-TJortLQ3wxGy5T2Tovj7-v1.gif
:name: k62oE6T5d6
:align: center
:width: 70%
```

```{warning}
Any block, independent of cell type, can be removed from your notebook on Curvenote by opening the block $\mathbf{\vdots}$ **Options** menu and selecting **🗑️ Remove.**

```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/yrgj4GvQeWrTWa2aj3Yq.1"}

### Preview and Use Previous Versions

You can preview and switch between different versions of a block/cell on Curvenote, not matter the type of cell. To preview and/or use a different version:

- Select a block.
- Expand the Block Details Panel.
- Select a **Version #**.
  - This version will appear in place of the current version of the block as a preview.
- If you do not want to switch versions:
  - Click **CLEAR PREVIEW** either on the block or in the Block Details Panel.
- If you want to switch to the selected version, either:
  - Click the **USE VERSION #** button at the top of the Block Details Panel
  - Open the version $\mathbf{\vdots}$ **Options** menu and select **Use Version.**

```{figure} images/m59m7JQmWVyPjlASj9v3-AVXtTWOUjmvLopTmCQ8n-v1.gif
:name: cXSbvF2B57
:align: center
:width: 70%
```

```{warning}
If you are using a previous version of a block, the **USE LATEST** button will appear at the top of the Block Details Panel. You can click this button to switch to the latest version.

```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/esJabn3BQeS1GTgxD0Cv.1"}

### Block Settings

Blocks can viewed, edited, and reused on their own. In some instances it’s beneficial to include additional information with a block. The block settings allow you to add or update the URL, tag, and thumbnail. To update the block settings:

- Open the block $\mathbf{\vdots}$ **Options** menu below the version number.
  - Select ⚙️ **Block Settings**.
- Update the URL and tags.
  - To add a tag, hit **ENTER** after you are finished add the tag text. To remove the tag, click the $\mathbf{\times}$ to the right of the text.
  - Click **UPDATE SETTINGS**.
- Drag and drop or click **Browse** to add an image from your computer.

  - Adjust your image.
  - Click **UPLOAD**.

    ```{figure} images/m59m7JQmWVyPjlASj9v3-HJ03JtvrtUj0wozihaM8-v1.gif
    :name: xHYdtotmqZ
    :align: center
    :width: 70%

    ```

```{warning}
The block settings for Markdown cells, when open in Draft Mode on Curvenote, include the option to add or update the block title and description.

```
