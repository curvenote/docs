---
title: Versioning Notebooks
description: ''
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: '2022-03-12T04:55:03.909Z'
name: versioning-notebooks
tags: []
---

Curvenote provides versioning for your notebooks and their individual cells. When you add a notebook to Curvenote the version numbering for the notebook as a whole begins at one (the cells are also versioned individually as blocks, learn more [Blocks & Cells](oxa:m59m7JQmWVyPjlASj9v3/ivAEvDKvkkhID0pZl77T 'Blocks & Cells')). You and your collaborators can then make changes and save new versions of your notebook. You can preview and use previous versions on Curvenote.

## Curvenote

You can access a copy of your notebook directly on Curvenote, which will always display the latest saved version. This link will open the saved version you were using in Jupyter, in Curvenote. On Curvenote you can then edit and save new versions or preview the previous versions of your notebook.

### Save New Version

To make changes to your notebook on Curvenote, requires you to be in Draft Mode, which is indicated by the yellow ✏️ and version number to the right of the notebook title. You may only edit the most recent saved version of your notebook on Curvenote. Curvenote cannot currently run code cells. You can edit Markdown cells on Curvenote, and any new blocks added will be consider Markdown cells when they are opened in Jupyter. Learn more about editing your notebooks in Curvenote ➡️ [Curvenote+Jupyter](oxa:MshxlXndaLsk3WbJ0ZGy/7ydSovyXvbOtuEVfcwYs 'Curvenote+Jupyter')

To save a new version of your notebook on Curvenote:

- Click **SAVE VERSION** in the app bar (left).
  - Saving a new version of your notebook will save a new version of any blocks/cells within your notebook that were also in Draft Mode and had changes.
- You will be redirected out of Draft Mode, and into a view of your newly saved version.

```{figure} images/m59m7JQmWVyPjlASj9v3-4PPpusAuhG9oRiMVAUrK-v1.gif
:name: Ge2OFa6CYv
:align: center
:width: 70%
```

### Preview Previous Versions

In Curvenote you can preview previous versions of your notebook, but you are {u}`not` able to select and use previous versions of your entire notebook, as you were in Jupyter. To view previous versions of your notebook:

- You must be in **View Mode.**
  - If you are in **Draft Mode** you must either click **STOP EDITING** or **SAVE VERSION** to exit.
- Expand the **Block Details Panel**. ◀️
  - The previous versions are listed by number, with their save date and time included.
- Click on the **Version #** you wish to preview.

```{figure} images/m59m7JQmWVyPjlASj9v3-7FvmX96vDLEcsWHtJZ5I-v1.gif
:name: DjsA83e2jn
:align: center
:width: 70%
```

```{warning}
You can select and use different versions of the individual blocks/cells within your notebook on Curvenote. Learn more ➡️ [Blocks and Cells](oxa:MshxlXndaLsk3WbJ0ZGy/bOeciQZh6u98TWmE8jHc "Blocks and Cells")

```

### Versioning with Collaborators

When working with others on a notebook, it is possible that multiple people are editing and saving versions at the same time. If you are in Draft Mode when someone else saves a version of the notebook, you will be warned that you are now editing a stale draft and should discard the draft. To discard a stale draft:

- A warning will appear at the top of the Editor which reads:
  - $\bf\textcircled{!}$`editing stale draft on v#`$\bf\textcircled{\times}$.
  - The notebook version number and draft mode icon ✏️ will change from yellow to red.
  - If you hover the warning, it reads:
    - `The draft is stale, you should discard it before continuing. To discard, press the ‘`$\times$`’ icon here. If in doubt contact support.`
- Click the $\bf\textcircled{\times}$.
- If you are certain that you want to delete the draft, click **DELETE** in the pop-up window.
- The draft will be discarded and the page should automatically reload.
  - You can manually reload the page by refreshing or clicking **RELOAD** in the pop-up window.
- To continue editing your notebook you will need to reenter Draft Mode.

```{danger}
Any unsaved changes that were made, will be lost when the draft is discarded! If a block/cell already exists you can save a version of it individually versions, and retain access to that saved version after the notebook draft is discarded. Changes made at the notebook level such as adding or removing blocks/cells will be lost.

```

```{figure} images/m59m7JQmWVyPjlASj9v3-FCHSm9GHG2XzoT0pEpMu-v1.gif
:name: d7h6j6tdKE
:align: center
:width: 70%
```
