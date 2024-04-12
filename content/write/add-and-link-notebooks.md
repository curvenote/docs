---
title: Add & Link Notebooks
description: ''
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: '2022-03-12T05:01:35.780Z'
name: add-and-link-notebooks
oxa: oxa:m59m7JQmWVyPjlASj9v3/SiW5BdJkvLNs1kVQxnx0
tags: []
---

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/JObENykG2qElHf0NA0lE.1"}

Notebooks can be created in Jupyter then saved to a Curvenote project via the extension or web app. You can add blank notebooks or notebooks that have already been written and run. Notebooks that already exist on Curvenote can also be imported and linked to a local `.ipynb` file.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/vXNVSobLyTQPUUAERNp4.1"}

## 📺 Video Demo

```{iframe} https://www.loom.com/embed/d55f507e4fb343758f373486f065dd24
:label: qCX1DcNO9z
:align: center
:width: 90%
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/INIYueb6ARc50o2dBCy7.1"}

## Save a Notebook - Curvenote Jupyter Extension

To add a notebook to Curvenote using the Jupyter extension:

- Open your notebook in Jupyter Notebook or Jupyter Lab.
- Click the **SAVE TO PROJECT** button in the Jupyter toolbar.
  - This will open the Curvenote extension panel.
- In the **Save this Notebook** section, select a Curvenote project where you want to save this notebook.
  - Click the 🔽 to expand the list of projects.
  - Select a project.
  - Click **SAVE NOTEBOOK.**
- The notebook is saved when the ☑️ and version number appears in the Jupyter toolbar.
  - Learn more ➡️ [Versioning Notebooks](oxa:MshxlXndaLsk3WbJ0ZGy/LFWVIuXdz2Q8Jcrik804 "Versioning Notebooks")
  - Each cell is now considered a block in Curvenote and also has its own version number. Learn more ➡️ [Blocks and Cells](oxa:MshxlXndaLsk3WbJ0ZGy/bOeciQZh6u98TWmE8jHc "Blocks and Cells")

```{figure} images/m59m7JQmWVyPjlASj9v3-xTLeEAeHgzevTORRxrRF-v1.gif
:name: svXmBSfz1b
:align: center
:width: 100%
```

````{warning}
You can only save a notebook to a project where you are the owner or a collaborator. If you don’t see a newly created project in the list, click 🔄 to refresh the list

````

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/AJfSosk21bBKr0l27gFC.1"}

## Upload a Notebook - Curvenote

You can upload a Jupyter notebook to a Curvenote **project**. To upload an existing notebook:

- In the project navigation panel
  - Click the **Upload ☁️⬆️** icon
- Click to browse or drag and drop an `.ipynb` file from your computer
  - Click **DONE**

````{danger}
The upload process for notebooks on Curvenote should only be used if you do not intend to run the notebook! The local copy of your notebook will not be linked to Curvenote (it does not contain the necessary metadata for versioning). If you need to run this notebook you will have to manually link your local copy. Learn more [Add & Link Notebooks](oxa:m59m7JQmWVyPjlASj9v3/SiW5BdJkvLNs1kVQxnx0 "Add & Link Notebooks").

````

```{figure} images/m59m7JQmWVyPjlASj9v3-UGpUYCC2QlQIhNSTYmEh-v1.gif
:name: tdrOpSRldZ
:align: center
:width: 100%
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/oFWMZvMmHtXSBGs2SeMW.1"}

## Import and Link a Notebook

Notebooks that already exist on Curvenote can be imported and linked to a local `.ipynb` file on your computer. This is a useful if a collaborator saved a copy of a notebook to a project and you need to edit it with Jupyter or if you uploaded a notebook on Curvenote and want to link the notebook to your local copy. To import and link a notebook:

- Open the notebook you want to import and link on Curvenote.
- Click $\mathbf{\vdots}$ to access the notebook options menu.
  - Click 🔗 **Copy Link** to copy the notebook’s unique `oxa link`.
- Open a notebook in Jupyter Notebook or Lab
  - This notebook cannot already be linked to Curvenote.
  - This notebook can either be:
    - a new/empty notebook.
    - the notebook that you uploaded previously and need to link. Any changes made to the local copy since upload will be lost!
- ◀️ Expand the Curvenote Jupyter extension panel.
- Paste the previously copied `oxa link` into the **Import Notebook** section
  - Click **IMPORT NOTEBOOK**
  - A ⚠️ warning will appear about overwriting your notebook.
    - Click **IMPORT**
- When complete, the Jupyter toolbar will have the notebook version number, each cell will have a version number, and the extension panel will show the notebook, cell, and output version menus.

````{danger}
When you import and link a notebook from Curvenote, the local copy of the notebook will be overwritten. Best practice is to start with an empty notebook.

````

![](images/m59m7JQmWVyPjlASj9v3-Avz11jXfg3lPPWrgs1FL-v1.gif)

