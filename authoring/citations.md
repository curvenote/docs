---
title: Add Citations and References
short_title: Citations
---

# Add Citations and References

## Quick Start
Add academic citations and references to your Curvenote articles using DOIs or BibTeX files, with easy access through the citation menu

Curvenote supports two main methods for adding citations: searching by DOI for individual papers, or importing BibTeX files from reference managers. Once added, citations are stored in your project library and can be easily inserted and managed throughout your content.

## Before You Start

Make sure you have:
- A Curvenote project with content you want to cite
- DOIs for papers you want to reference, or BibTeX files from your reference manager
- Access to the Curvenote editor interface
- Your reference manager set up (Zotero, Mendeley, etc.) if using BibTeX import

## 1. Add Citations Using DOIs

Add individual papers by searching their DOI:

### Locate the DOI
- Find the DOI on the article or document you want to cite
- Copy the DOI to your clipboard

```{note}
The DOI is usually included with the article content. If you cannot find the DOI, you can use the 'Search Metadata' option on [crossref.org](https://crossref.org).
```

### Add the Citation
1. **Place your cursor** where you want to add the citation
2. **Access the citation menu** using the `/cite` command
3. **Navigate to ADD DOI**
4. **Enter the DOI** in the search bar
5. **Select SEARCH**
6. **Choose CREATE CITATION** if the correct article appears

```{figure} images/MshxlXndaLsk3WbJ0ZGy-tZmadZXYnXoMbmz0nAwm-v2.mp4
:name: 17800507
:align: center
:width: 70%
```

## 2. Import Citations from BibTeX Files

Import multiple references from your reference manager:

### Export BibTeX File
- Export your references as a BibTeX file from your reference manager
- Common reference managers: Zotero, Mendeley, EndNote
- For easy access without downloads, use [zbib.org](https://zbib.org/)

### Import to Curvenote
1. **Drag and drop** the BibTeX file into Curvenote
2. **All references** will be added to your project library
3. **Citation keys** are automatically generated from your BibTeX entries

```{figure} images/MshxlXndaLsk3WbJ0ZGy-RaR3QGIKD1ek3VXMAX31-v3.mp4
:name: adaa6acf
:align: center
:width: 70%

Import your references from a `*.bib` file, and easily update your references if you need to!
```

## 3. Insert Citations in Your Content

Add citations to your articles using the citation menu:

### Single Citation
1. **Place your cursor** where you want the citation
2. **Use the `/cite` command** to open the citation menu
3. **Search for your reference** by title, author, or citation key
4. **Select the citation** to insert it

### Multiple Citations
1. **Place your cursor** where you want the citations
2. **Use the `/reference` command** to open the references menu
3. **Filter using Search** and select multiple citations with checkboxes
4. **Choose INSERT CITATIONS** to add them all

```{figure} images/MshxlXndaLsk3WbJ0ZGy-V58UiaFTTyA5qx1tti7D-v1.png
:name: bb7026ea
:align: center
:width: 60%
```

## 4. Manage and Rearrange Citations

Organize your citations and adjust their formatting:

### Citation Groups
- **Individual citations** are added by default when using `[[cite:`
- **Group citations** using the `[]` icon in the toolbar
- **Drag citations** into and out of citation groups
- **Multiple citations** added via `/reference` are automatically grouped

### Citation Formatting
- **Parenthetical citations**: `{cite:p}` for (Author, Year) format
- **Narrative citations**: `{cite:t}` for "Author (Year)" format
- **Toggle brackets** using the `[]` button when citation is selected

```{figure} images/MshxlXndaLsk3WbJ0ZGy-jTbSRxmzUrpQhHBo3ZuF-v3.mp4
:name: a25010aa
:align: center
:width: 70%

Use the `[]` button to toggle the brackets around the citation. You can drag citations into different groups, or rearrange them in order.
```

## Citation Examples

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

## Next Steps

- [Add Figures and Media →](./add-figures-media.md)
- [Link Data and Code →](./link-data-code.md)
- [Organize Your Content →](./organize-content.md)

---

💡 **Tip:** Use the `/cite` command for quick access to your citation library. You can search by title, author, or citation key to find references quickly.

⚡ **Important: Citation Management**

- **Update citations** by re-exporting BibTeX with the same citation keys
- **Citation keys** are automatically generated as `ref-` + lowercase citation key
- **Click on citations** to view details and navigate to the original source
- **Citation groups** correspond to LaTeX `\citep{}` format for proper academic styling
