---
title: Installing Curvenote
description: ""
date: 2022-02-07T20:12:25.085Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: installing
oxa: oxa:EplL6AlILV3RGEDPzj5U/k4G4ZrOcTIx3szxGNEFb
---

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/K4wNaODT2DBRm1NwVVNY.9"}

Curvenote is available through Node. Unless you already have this on your system you will have to [install NodeJS](oxa:EplL6AlILV3RGEDPzj5U/ok1vVkdB8m0EHgjdelbF "Installing NodeJS"). Node is used in Jupyter as well as a number of other packages, you may already have it on your computer and available on your *PATH,* so the following command may just work🤞.

```shell
npm install -g curvenote
```

````{important}
**Note**

If you do not have `npm` installed you can look at our guide for [Installing NodeJS](oxa:EplL6AlILV3RGEDPzj5U/ok1vVkdB8m0EHgjdelbF "Installing NodeJS"). If you have any challenges installing, please [open an issue here](https://github.com/curvenote/curvenotejs/issues) or send an email to [support@curvenote.com](mailto:support@curvenote.com).

````

This will install `curvenote` globally (`-g`) on your system and add a link to the main CLI tool. To see if things worked, try checking the version with:

```shell
curvenote --version
```

Which should print the current version of the package. If all is good, you can type `curvenote` again in your terminal and it will list the help with all of the options available to you.

````{note}
If you have any challenges installing, please [open an issue here](https://github.com/curvenote/curvenotejs/issues).

````

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/qReGCJnZklXpmi6ERQ9B.2"}

## Updating Curvenote

There are new releases of the CLI every few weeks, to update to the latest version of `curvenote`, use:

```shell
npm update -g curvenote
```

Try the `curvenote --version` command before and after, with an update you should be on the most up to date version (see [npm](https://npmjs.com/package/curvenote) for the latest version!). If you are not, try `npm uninstall -g curvenote` or without the `-g` global flag, until `curvenote` is no longer available on your command line. Then try installing again!

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/YqsgIMcfgtnP9cyOzlGZ.4"}

### Dependencies for $\LaTeX$ and PDF

If you are exporting to $\LaTeX$ with an open-source template specified (see all [templates](https://github.com/curvenote/templates)) or if you are creating a PDF you will need to install the [jtex](https://pypi.org/project/jtex/) python package to be installed and available on the user's `PATH`. With [Python 3.7](https://www.python.org/downloads/) or greater installed, install `jtex` via pip:

```shell
python -m pip install jtex
```

For $\LaTeX$ PDF builds you will also require a version of [LaTeX to be installed](https://www.latex-project.org/get).

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/MSQinWImjrfaa13213mK.2"}

## Usage as a package

`curvenote` is a node module, and you can use it to chain together other types of workflows that are not possible through the CLI.

```typescript
import { Session, MyUser } from 'curvenote';

const session = new Session(token);
const user = await new MyUser(session).get();
console.log(user.data.username);
```

## Developing

For the [curvenote](https://github.com/curvenote/curvenotejs) library on GitHub, `git clone` and you can install the dependencies and then create a local copy of the library with the `yarn dev:cli` command.

```shell
git clone git@github.com:curvenote/curvenotejs.git
cd curvenotejs
yarn install
yarn dev:cli
```

This will create a local copy of `curvenote` for use on the command line.

