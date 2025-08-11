---
title: Deleting Notebooks
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: true
    email: rowan@curvenote.com
    roles:
      - Conceptualization
    affiliations:
      - Curvenote
name: deleting-notebooks
---

Notebooks can be removed from a Curvenote project. This will not delete any local copies of the notebook that are linked to Curvenote or any of the blocks (Jupyter cells) that are linked in other notebooks or articles. Notebooks and their cells can also be unlinked from Curvenote in different combinations. Unlinking a local version stops the communication of changes and versions between that notebook or cell, Curvenote, and any other local copies.

## Remove a notebook

You can only remove a notebook from a project via Curvenote. Removing a notebook from your project _will not delete_ any local version of the notebook (`.ipynb` file).

```{warning}
Only project owners or team admins can remove notebooks. Learn more ➡️ [Teams](./curvenote-teams.md), [Project Collaboration](./collaboration.md)

```

To remove a notebook from Curvenote:

- Open your notebook on Curvenote.
- Access the notebook options, either
  - Click $\mathbf{\vdots}$ in the app bar to open the Page Options menu.
    - Select 🗑️ **Delete Notebook**.
  - Click $\vdots$ to the right of the notebook title to open the Options menu.
    - Select 🗑️ **Delete Notebook**.
- Click **DELETE**.
  - A 🟩 notification will appear in the bottom left of your screen when your notebook has successfully been deleted.
    - You can then navigate away from this page.

```{danger}
This will **permanently** delete the notebook and its associated versions and drafts. Any links to the notebook will break. This action cannot be undone! The metadata that Curvenote adds to version your notebook will remain in your local copy of the notebook, but previous versions and drafts {u}`are not available`, even if you re-add the notebook to Curvenote.

```

```{figure} images/m59m7JQmWVyPjlASj9v3-Odt8qiaTxuTUfUDRlnNr-v1.mp4
:name: IOdAkItr36
:align: center
:width: 100%
```
