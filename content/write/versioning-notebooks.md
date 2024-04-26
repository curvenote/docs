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
oxa: oxa:m59m7JQmWVyPjlASj9v3/Yrl2kvZZj18nd7LDtbBe
tags: []
---

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/xS0THkfJNPpzj9TQTpMF.1"}

Curvenote provides versioning for your notebooks and their individual cells. When you add a notebook to Curvenote the version numbering for the notebook as a whole begins at one (the cells are also versioned individually as blocks, learn more [Blocks & Cells](oxa:m59m7JQmWVyPjlASj9v3/ivAEvDKvkkhID0pZl77T "Blocks & Cells")). You and your collaborators can then make changes and save new versions of your notebook. You can preview and use previous versions on both Curvenote and Jupyter with the Curvenote Jupyter extension.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/wG9Yk8kgtNNzXpEBWx8c.1"}

## Curvenote Jupyter Extension

You can save versions, track changes, and switch to previous versions within the local copy of your notebook by using the Curvenote Jupyter extension.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/wCXDCOErcRxmkMz1HiYo.1"}

### Save New Version

When working in Jupyter and using the Curvenote Jupyter extension, a new version can be saved after changes have been made since the last saved version. To save a new version of your notebook you can either:

- Click the **SAVE** button in the top right of the Jupyter toolbar.
- Click the **SAVE NEW VERSION** button at the top of the Curvenote Jupyter extension panel.

```{figure} images/m59m7JQmWVyPjlASj9v3-kS96f4AI7F97QmTtrDSs-v1.png
:name: xiRgF45YiE
:align: center
:width: 70%
```

````{note}
Changes must be made to either the most recent saved or used version for a new version to be saved. If no changes have been made, the SAVE and SAVE NEW VERSION buttons are unavailable.

````

Saving a new version of your notebook will save a new version of any cells within your notebook that have changes. All icons, showing where changes have been made will be updated to the $\bf\textcircled{\checkmark}$.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/sHi02jw4VUh9o0IYYksO.1"}

### Change Status Icons

The icons, located to the left of the version number in the Jupyter toolbar indicate the status of changes made within the notebook. The following status options are possible:

- The current notebook is the latest saved version and there are no changes since the notebook has been saved. The save button is unavailable due to the lack of new changes to save.

  ```{figure} images/m59m7JQmWVyPjlASj9v3-1ZDEZ89gHcUo08J8IoEh-v1.png
  :name: qNMd6YZfWz
  :align: center
  :width: 40%

  ```
- Changes exist in the notebook since the last saved version. If you hover over the icon the type of change(s) is specified as different number of cells, cell contents, new cells, and/or outputs. The save button is available to save a new version with these changes.

```{figure} images/m59m7JQmWVyPjlASj9v3-gj9rRhCXhi86tJfFmZxh-v1.png
:name: zEEXfLGNp5
:align: center
:width: 40%
```

- Newer saved versions of the notebook exist, but currently the notebook displays Version 10 without any changes from when that version was saved. The save button is unavailable due to the lack of new changes to save.

```{figure} images/m59m7JQmWVyPjlASj9v3-Xq75iiolQofdiZ6qxDDx-v1.png
:name: x4DvKL3ofg
:align: center
:width: 40%
```

- Newer saved versions of the notebook exist, but currently the notebook displays Version 10 with changes. If you hover over the icon the type of change(s) is specified as different number of cells, cell contents, new cells, and/or outputs. The save button is available to save a new version with these changes.

  ```{figure} images/m59m7JQmWVyPjlASj9v3-ef9GHooApw2KZ5g7ce8Z-v1.png
  :name: bXNEWgouU7
  :align: center
  :width: 40%

  ```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/6I6jgmnLSXETJ6ZG00Kk.1"}

### Use a Different Version

You can switch between different saved versions of your entire notebook. All previous versions of your notebook are listed in the Curvenote Jupyter extension Panel by number, and display the time and date that they were saved. The current version is indicated by the bookmark icon.

````{warning}
Before switching versions you can preview a previous version by opening the version $\mathbf{\vdots}$ **Options** menu and selecting either **Open in Curvenote** or **Copy Link** and pasting the link into a new browser window. Each version has its own unique link, numbered to correspond to the version number.

````

To switch to a different version:

- Click on the **Version** **\#** you want to use and either:
  - Click on the $\mathbf{\vdots}$ **Options** menu for the version.
    - Select **Use Version.**
  - Click the **USE VERSION #** button at the top of the panel.
- A **Warning** will appear.
  - If you are ready to switch versions, click **CONFIRM.**

````{warning}
If you want to switch to the latest version, you can simply click the **USE LATEST VERSION** button at the top of the panel.

````

```{figure} images/m59m7JQmWVyPjlASj9v3-FOVu5pdTYPMweABgyOYu-v1.gif
:name: DMLlrdqgpi
:align: center
:width: 70%
```

````{danger}
Using a different version will overwrite the local copy of your notebook. Any unsaved changes will be lost!

````

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/kx5S85z8Vj5qhK4abfrf.1"}

### Versioning with Collaborators

When working with others on a notebook, each collaborator can have their own local copy of the notebook linked to Curvenote. Your local notebook {u}`will not` automatically update to the latest saved version unless you saved it. We recommend you check the change status icon in the Jupyter toolbar and the Previous Versions list in the extension panel before making changes to your local copy. The **USE LATEST VERSION** button at the top of the extension will overwrite your local copy with the most recent saved version from your collaborator.

````{danger}
It is possible to start from an older version, make changes and save a new version. For example, the latest version is **v15**, but you have switched your local notebook to an older version, **v10**. You then make changes to your notebook and save a new version. Your notebook is now on **v16**.

````

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/0qRtl3B48Vn21AUEJMqq.1"}

## Curvenote

You can access a copy of your notebook directly on Curvenote, which will always display the latest saved version. You can also open your notebook in Curvenote by clicking the **Open in Curvenote** button in either the Jupyter toolbar or Curvenote Jupyter extension panel. This link will open the saved version you were using in Jupyter, in Curvenote. On Curvenote you can then edit and save new versions or preview the previous versions of your notebook.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/5YOpfg8D0ertgoqd7D5H.1"}

### Save New Version

To make changes to your notebook on Curvenote, requires you to be in Draft Mode, which is indicated by the yellow ✏️ and version number to the right of the notebook title. You may only edit the most recent saved version of your notebook on Curvenote. Curvenote cannot currently run code cells thus the content of both code and output cells can only be edited using the Curvenote Jupyter extension. You can edit Markdown cells on Curvenote, and any new blocks added will be consider Markdown cells when they are opened in Jupyter. Learn more about editing your notebooks in Curvenote ➡️ [Curvenote+Jupyter](oxa:MshxlXndaLsk3WbJ0ZGy/7ydSovyXvbOtuEVfcwYs "Curvenote+Jupyter")

To save a new version of your notebook on Curvenote:

- Click **SAVE VERSION** in the app bar (left).
  - Saving a new version of your notebook will save a new version of any blocks/cells within your notebook that were also in Draft Mode and had changes.
- You will be redirected out of Draft Mode, and into a view of your newly saved version.
  - This version is available in the Curvenote Jupyter extension.

```{figure} images/m59m7JQmWVyPjlASj9v3-4PPpusAuhG9oRiMVAUrK-v1.gif
:name: Ge2OFa6CYv
:align: center
:width: 70%
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/adwYsYwU7pQesc0kTfB9.1"}

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

````{warning}
You can select and use different versions of the individual blocks/cells within your notebook on Curvenote. Learn more ➡️ [Blocks and Cells](oxa:MshxlXndaLsk3WbJ0ZGy/bOeciQZh6u98TWmE8jHc "Blocks and Cells")

````

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/qavhesEICUB0fEa5eK2U.1"}

### Versioning with Collaborators

When working with others on a notebook, it is possible that multiple people are editing and saving versions at the same time. If you are in Draft Mode when someone else saves a version of the notebook, you will be warned that you are now editing a stale draft and should discard the draft. To discard a stale draft:

- A warning will appear at the top of the Editor which reads:
  - $\bf\textcircled{!}$` editing stale draft on v# `$\bf\textcircled{\times}$.
  - The notebook version number and draft mode icon ✏️ will change from yellow to red.
  - If you hover the warning, it reads:
    - `The draft is stale, you should discard it before continuing. To discard, press the ‘`$\times$`’ icon here. If in doubt contact support.`
- Click the $\bf\textcircled{\times}$.
- If you are certain that you want to delete the draft, click **DELETE** in the pop-up window.
- The draft will be discarded and the page should automatically reload.
  - You can manually reload the page by refreshing or clicking **RELOAD** in the pop-up window.
- To continue editing your notebook you will need to reenter Draft Mode.

````{danger}
Any unsaved changes that were made, will be lost when the draft is discarded! If a block/cell already exists you can save a version of it individually versions, and retain access to that saved version after the notebook draft is discarded. Changes made at the notebook level such as adding or removing blocks/cells will be lost.

````

```{figure} images/m59m7JQmWVyPjlASj9v3-FCHSm9GHG2XzoT0pEpMu-v1.gif
:name: d7h6j6tdKE
:align: center
:width: 70%
```

