---
title: Citations
description: ''
name: citations
---

You can easily add citations to your Curvenote articles and have quick access to them while you are typing. There are currently two ways to add references:

1. **From a DOI**\: Simply search the document or article DOI, and add it to your article with one-click!
2. **From a BibTex file**\: Export from your reference manager (e.g. Zotero, Mendeley, etc.) as a BibTex file, and drag and drop into Curvenote. If you want easy access to a reference manager, without downloading anything we recommend <https://zbib.org/>.

Once your citations have been added to your project, you can easily access them through the `/cite` command, and can click on the citation to see all the details - and you can click on it to navigate to the web article or document. For example, try clicking on this citation {cite:p}`Cockett2015SimPEG`.

## Video Demo 📺

```{iframe} https://www.loom.com/embed/646329caf1e74c39bd6abb3835717ce0
:label: YtpswdIs9H
:align: center
:width: 80%
```

```{list-table} Example of rendered citations, try clicking on any of the citations!
:header-rows: 1
:name: jBqbQidSUR

* -

  - Parenthetical citation

  - Narrative citation

* - 1 author

  - {cite:p}`heinen_compensation_2014`

  - {cite:t}`heinen_compensation_2014`

* - 2 authors

  - {cite:p}`Bartkowski2018Leverage`

  - {cite:t}`Bartkowski2018Leverage`

* - 3 or more authors

  - {cite:p}`winter_effects_2018`

  - {cite:t}`winter_effects_2018`

* - Group author

  - {cite:p}`EuropeanCommission2020`

  - {cite:t}`EuropeanCommission2020`

```

## Adding citations through DOIs

A digital object identifier (DOI) is a unique string that’s used to permanently identify an article or document on the web. If you are citing a paper, it will have a searchable DOI you can add to your Curvenote citation library.

To add a DOI:

- Locate the DOI on the article or document you want to cite, and copy it to your clipboard

```{note}
The DOI is usually included with the article content. However, if you cannot find the DOI you can use the ‘Search Metadata’ option on [crossref.org.](crossref.org.)

```

- Place your cursor in the area you want to add the citation
- Access the citation menu by using the `/cite` command
- Navigate to **ADD DOI**
- Enter the DOI in the search bar
- Select **SEARCH**
- If the appropriate article or document is shown, select **CREATE CITATION**

```{figure} images/MshxlXndaLsk3WbJ0ZGy-tZmadZXYnXoMbmz0nAwm-v2.gif
:name: 17800507
:align: center
:width: 70%
```

Your citation will now be added to your citation library for that project, and can be inserted into your articles without having to re-add the DOI.

## Adding citations from BibTex files

The bibtex (`*.bib`) file format is a storage format for citations, it is commonly used with $\LaTeX$, and can be exported from most reference managers.

```{figure} images/MshxlXndaLsk3WbJ0ZGy-RaR3QGIKD1ek3VXMAX31-v3.gif
:name: adaa6acf
:align: center
:width: 70%

Import your references from a `*.bib` file, and easily update your references if you need to!
```

### Updating Citations

If you need to update your citation (e.g. fixing an author name, or adding a date), just re-export the bibtex from your reference manager, ensuring that the citation key for the reference is the same. Then just re-upload, the bibtex and all of the included reference will be updated💥.

In Curvenote, the references are stored as a `Reference` block, when you upload through a bibtex file it is given a unique `name` that is derived from the citation key you provide. The block `name` (used in the URL and must be unique for a project) is prefixed with `ref-` and is lowercased. This means the bibtex references are like `Cockett2015-Elsevier` becomes `ref-cockett2015-elsevier`. You can also use these keys to quickly look up a citation through the `[[cite:` command or the reference search panel.

## Inserting multiple citations

To add multiple citations:

- Place your cursor in the area you want to add the citation
- Access the references menu by using the `/reference` command
- Filter using the **Search**, and use the checkboxes to select the citation you would like to add
- Select **INSERT CITATIONS**

The citations will now be added!

```{figure} images/MshxlXndaLsk3WbJ0ZGy-V58UiaFTTyA5qx1tti7D-v1.png
:name: bb7026ea
:align: center
:width: 60%
```

## Rearranging Citations

By default when citations are added through the `[[cite:` command, they are added as individual citations, these can be wrapped in brackets using the `[]` icon in the toolbar when the citation is selected. You can also drag citations into and out of citation-groups. In latex, these correspond to `\citep{}` and render slightly differently than if you use your own brackets.

```{figure} images/MshxlXndaLsk3WbJ0ZGy-jTbSRxmzUrpQhHBo3ZuF-v3.gif
:name: a25010aa
:align: center
:width: 70%

Use the `[]` button to toggle the brackets around the citation. You can drag citations into different groups, or rearrange them in order.
```

Note that if you add the citation through the `/reference` command, then multiple citations will be added to a single group in one go.
