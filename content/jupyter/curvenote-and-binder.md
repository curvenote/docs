---
title: Using MyBinder
description: ""
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: 2022-03-12T04:51:57.653Z
name: curvenote-and-binder
oxa: oxa:m59m7JQmWVyPjlASj9v3/zb0bOrpIpkWMjuF3oAOK
---

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/bkTtQVO2pOzF3Qxo0Lyk.1"}

Curvenote does not currently run your code outside of Jupyter, but you can share executable versions of your notebooks on Curvenote using Binder. [Binder](https://mybinder.org/) is a public service that allows you to share a repository of notebooks within their executable environment for anyone with access to run and reproduce your results. On Curvenote, you can add a Binder link to your notebooks and add notebooks from Binder to your own Curvenote projects.

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/NWHfLcPk1FBa4Df0LhDU.1"}

## Launch Binder Button

You can add a launch Binder button to notebooks on Curvenote that you want others to run through Binder. To add a Binder link:

- Open your notebook on Curvenote.
- Click **EDIT** to enter Draft Mode.
- Open the $\mathbf{\vdots}$ **Page Options** menu.
  - Select **Settings**.
- Paste your Binder link into the Binder URL field.
- Click **UPDATE SETTINGS**.
- The launch binder button will appear to the left of the author and date section at the top of your notebook.

```{figure} images/m59m7JQmWVyPjlASj9v3-AFDkVc7PqgAdn31Yrpur-v1.gif
:name: PmoWlhrvU0
:align: center
:width: 90%
```

+++ {"oxa":"oxa:m59m7JQmWVyPjlASj9v3/dWHP0ZAv2iIBhtXJJAg6.1"}

## Add Notebook from Binder

Typically, any changes that you make to a notebook running through Binder are lost when you leave. Using the Curvenote Jupyter Extension you can add a notebook running on Binder to your own Curvenote projects and version your work within it. To add a notebook on Binder to Curvenote:

- Launch the Binder link with Google Chrome.
- Click the **SAVE TO PROJECT** button in the Jupyter toolbar.
  - This will open the Curvenote extension panel.
- In the **Save this Notebook** section, select a Curvenote project.
  - Click the 🔽 to expand the list of projects.
  - Select a project.
  - Click **SAVE NOTEBOOK.**
    - This process may take a some time.
    - This will only save and version changes to the notebook while the current link is open. If you leave the page after this step, your previous versions will {u}`not` be available.
- In the Jupyter toolbar, click the **save to browser storage ☁️ ⬇️** button.

```{figure} images/m59m7JQmWVyPjlASj9v3-YAtwwYBQhAXQ43dV3Ijk-v1.gif
:name: Mh2bV4FbRP
:align: center
:width: 100%
```

````{danger}
When you next launch the Binder link for the notebook you have previously added to Curvenote, you will need to click the **restore from browser storage ☁️ ⬆️** button in the Jupyter toolbar to access previous versions and changes on Curvenote.

````

