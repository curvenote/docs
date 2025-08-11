---
title: Installing Curvenote
description: ''
---

Curvenote is available through [NodeJS](./installing-prerequisites.md) and the node package manager, `npm`. Node is used by Jupyter as well as many other Python packages so you may already have it installed on your _PATH_ and the following command may just work 🤞.

🛠️ [Install NodeJS](./installing-prerequisites.md) and run the following command:

```shell
npm install -g curvenote
```

:::{important}
If you do not have `npm` installed you can look at our guide for [Installing NodeJS](./installing-prerequisites.md). If you have any challenges installing, please [open an issue here](https://github.com/curvenote/curvenotejs/issues) or send an email to [support@curvenote.com](mailto:support@curvenote.com).
:::

This will install `curvenote` globally (`-g`) on your system and add a link to the main CLI tool. To see if things worked, try checking the version with:

```shell
curvenote --version
```

This command should print the current version of the package. If all is good, you can type `curvenote` again in your terminal and it will list the help with all of the options available to you.

:::{note}
If you have any challenges installing, please [open an issue here](https://github.com/curvenote/curvenote/issues).
:::

## Updating Curvenote

There are new releases of the CLI every few weeks, to update to the latest version of `curvenote`, use:

```shell
npm update -g curvenote
```

Try the `curvenote --version` command before and after, with an update you should be on the most up to date version (see [npm](https://npmjs.com/package/curvenote) for the latest version!). If you are not, try `npm uninstall -g curvenote` or without the `-g` global flag, until `curvenote` is no longer available on your command line. Then try installing again!

### Dependencies for $\LaTeX$ and PDF

If you are exporting to $\LaTeX$ with an open-source template specified (see all [templates](https://github.com/curvenote/templates)) or if you are creating a PDF you will need to install the [jtex](https://pypi.org/project/jtex/) python package to be installed and available on the user's `PATH`. With [Python 3.7](https://www.python.org/downloads/) or greater installed, install `jtex` via pip:

```shell
python -m pip install jtex
```

For $\LaTeX$ PDF builds you will also require a version of [LaTeX to be installed](https://www.latex-project.org/get).
