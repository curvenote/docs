---
title: Deleting Notebooks
description: ""
date: 2022-03-12T04:04:15.885Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: true
    email: rowan@curvenote.com
    roles:
      - Conceptualization
    affiliations:
      - Curvenote
name: deleting-notebooks
oxa: oxa:m59m7JQmWVyPjlASj9v3/ymnujT56Vc4SgF65fOkC
---

# Deleting Notebooks

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/M3UWcohhzjUgdeSAe0YO.1"}

Notebooks can be removed from a Curvenote project. This will not delete any local copies of the notebook that are linked to Curvenote or any of the blocks (Jupyter cells) that are linked in other notebooks or articles. Notebooks and their cells can also be unlinked from Curvenote in different combinations. Unlinking a local version stops the communication of changes and versions between that notebook or cell, Curvenote, and any other local copies.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/4qckdcRGx8Xylga8Zii4.1"}

## Remove a notebook

You can only remove a notebook from a project via Curvenote. Removing a notebook from your project *will not delete* any local version of the notebook (`.ipynb` file).

````{warning}
Only project owners or team admins can remove notebooks. Learn more ➡️ [Teams ](oxa:MshxlXndaLsk3WbJ0ZGy/QzRJgq8s55vRXiVa9QtT "Teams "), [Project Collaboration](oxa:MshxlXndaLsk3WbJ0ZGy/YLNojGkT0Xa7iZb989pu "Project Collaboration")

````

To remove a notebook from Curvenote:

* Open your notebook on Curvenote.
* Access the notebook options, either
  * Click $\mathbf{\vdots}$ in the app bar to open the Page Options menu.
    * Select 🗑️ **Delete Notebook**.
  * Click $\vdots$ to the right of the notebook title to open the Options menu.
    * Select 🗑️ **Delete Notebook**.
* Click **DELETE**.
  * A 🟩 notification will appear in the bottom left of your screen when your notebook has successfully been deleted.
    * You can then navigate away from this page.

````{danger}
This will **permanently** delete the notebook and its associated versions and drafts. Any links to the notebook will break. This action cannot be undone! The metadata that Curvenote adds to version your notebook will remain in your local copy of the notebook, but previous versions and drafts {u}`are not available`, even if you re-add the notebook to Curvenote.

````

```{figure} images/m59m7JQmWVyPjlASj9v3-Odt8qiaTxuTUfUDRlnNr-v1.gif
:name: IOdAkItr36
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/Oizz5VKaZuLaIYF7fZW7.1"}

## Delete Local Notebook

Deleting a local copy of a notebook that has been saved to Curvenote *will not remove* the notebook from Curvenote.

````{warning}
You can always download a copy of your notebook from Curvenote if you have accidentally deleted your local copy. Previous versions of your notebook will be available. Learn more ➡️ [Curvenote+Jupyter](oxa:MshxlXndaLsk3WbJ0ZGy/7ydSovyXvbOtuEVfcwYs "Curvenote+Jupyter") →[Download a Notebook](https://curvenote.com/oxa:MshxlXndaLsk3WbJ0ZGy/CclWKKJtJ0HWoKqicjDP.2).

````

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/Bd6Xy4L8i5Hl0yRm6nBk.1"}

## Unlink

Your local copy of a notebook and its cells are linked to the copy visible on Curvenote. Multiple users can have a local copy of the notebook linked for ease of collaboration and sharing. This link allows you to access the saved changes and comments that you can your collaborators have made in {u}`any` of the linked copies. In some cases you may want to unlink your local notebook from Curvenote, e.g. to use a notebook as a template or starting point for another notebook, or to share a static copy of your notebook. Unlinking a local copy of a notebook or its cells stops the communication of changes and versions between that notebook or cell, Curvenote, and any other local copies. You can unlink a notebook and all its cells, just the notebook, all the cells in a notebook, or a single cell.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/oyG1Wd0FmzrbQp8kX60S.1"}

### Unlink Notebook and All Cells

If you unlink both the notebook and the cells within it, your local file will have no connection to Curvenote. To unlink your local notebook and all its cells:

* Open your notebook in Jupyter.
* ◀️ Access the Curvenote extension panel.
* Click $\mathbf{\vdots}$ to open the Options menu.
  * Select **Unlink Notebook and Cells**.
  * A warning will appear asking for confirmation.
    * Click **UNLINK**.
* The notebook and cell version indicators will be removed from the notebook.
  * The Curvenote extension panel will return to the Save or Import options.
    * You now have the option to add the local notebook as a new notebook to Curvenote.
      * Learn more ➡️ [Add and Link Notebooks](oxa:MshxlXndaLsk3WbJ0ZGy/5Gyc09F2UsWx8HZfDQpG "Add and Link Notebooks")

````{danger}
Any changes made to the unlinked local notebook will not be saved to Curvenote. Any changes made on Curvenote - either on the web app or in other linked copies of the notebook - will not be available in your local unlinked notebook copy.

````

```{figure} images/m59m7JQmWVyPjlASj9v3-HqHIb0e6mzkGFGFU3l8P-v1.gif
:name: Rd1lRmUeS7
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/yKRuaYccHOFe3PGV5T4f.1"}

### Unlink Notebook

If you unlink only the notebook (not the cells within it) from Curvenote, cell versions will still be available between your local copy and Curvenote. Any changes made at the notebook level e.g. cells added/removed, new versions saved, will not be communicated between your local copy and Curvenote. To unlink only your local notebook:

* Open your notebook in Jupyter.
* ◀️ Access the Curvenote extension panel.
* Click $\mathbf{\vdots}$ to open the Options menu.
  * Select **Unlink Notebook**.
  * A warning will appear asking for confirmation.
    * Click **UNLINK**.
* The notebook version indicators will be removed from the notebook.
  * The cell version indicators will NOT be removed. These cells are still linked to other copies through Curvenote.
  * The Curvenote extension panel will return to the Save or Import options.
    * You now have the option to add the local notebook as a new notebook to Curvenote.
      * Learn more ➡️ [Add and Link Notebooks](oxa:MshxlXndaLsk3WbJ0ZGy/5Gyc09F2UsWx8HZfDQpG "Add and Link Notebooks")

````{danger}
Any changes made at the notebook level will not be communicated between the local unlinked notebook and other linked copies of the notebook that remain on Curvenote.

````

```{figure} images/m59m7JQmWVyPjlASj9v3-tCvPXvLDOASZDU78N7dE-v1.gif
:name: eG7EnigPLy
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/ucVgW0x1iab7QuRkVGCD.1"}

### Unlink All Cells

If you unlink all the cells, but not the notebook from Curvenote, the older versions of the notebook are still available - this includes the option of going back to a notebook version that contains the linked cells and their past versions. After unlinking, the cell content will remain as it was prior to unlinking, but none of the previous versions of the cells are available. When you save the notebook again, each cell will be saved as a new block in Curvenote and given a new, unique oxa link. To unlink all the cells in your notebook:

* Open your notebook in Jupyter.
* ◀️ Access the Curvenote extension panel.
* Click $\mathbf{\vdots}$ to open the Options menu.
  * Select **Unlink All Cells**.
  * A warning will appear asking for confirmation.
    * Click **UNLINK**.
* The notebook version indicators will be removed from the cells.
* The notebook version indicator will NOT be removed. The notebook is still linked other copies through Curvenote.

```{figure} images/m59m7JQmWVyPjlASj9v3-uIYdOdamypxmf6qkCYKg-v1.gif
:name: Jes3gVk9fx
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/F170vHhJhvPTaqTIl3Q7.1"}

### Unlink a Single Cell

Similar to unlinking all of the cells, you can unlink cells individually. If you unlink a single the cell, but not the notebook from Curvenote, the older versions of the notebook are still available - this includes the option of going back to a notebook version that contains the previous linked version of the cell and its associated past versions. After unlinking, the cell content will remain as it was prior to unlinking, but none of the previous versions of the cell are available. When you save the notebook again, that cell will be saved as a new block in Curvenote and given a new, unique oxa link. To unlink a single cells in your notebook:

* Open your notebook in Jupyter.
* Click $\mathbf{\vdots}$ to the left of the cell you want to unlink, to open the Curvenote Options menu.
  * Select **Unlink Cell**.
* The cell version indicator will be removed from the cell.
  * If there is an output cell associated with a code cell that has been unlinked, that cell is also unlinked, and its version indication will also be removed.

````{warning}
Output cells cannot be individually unlinked, as they are inherently linked to their associated code cell. Code and Markdown cells can be individually unlinked.

````

![](images/m59m7JQmWVyPjlASj9v3-qXsP9B33hzsvNg28InHD-v1.gif)

