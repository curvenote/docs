---
title: Internal References
description: ''
name: internal-references
---

Curvenote makes it easy to add reference links to the content throughout your project. Specialized internal references are included for articles, notebooks, sections, figures, and equations. Using either the command menu options or the direct keyboard shortcuts a list will appear of your available content to select and reference. When you hover over a reference, a preview of that content will appear.

## Referencing Commands

You can use either the command menu or keyboard shortcuts to reference content within your text.

#### Command Menu

When using the command menu `/` you will need to first search the command menu options for the reference style you want, then click or hit `enter` to select that option. From there, you can either scroll through or continue typing to search for the content you want to reference. To insert the reference either click on the option, or hit `enter` when the option is highlighted.

#### Keyboard Shortcuts

When using the keyboard shortcuts, you can either begin typing `[[`, then scroll through or continue typing to search through all of your available content. You can also narrow your search by content type by entering the specified shortcut commands for each content type below. From here you can again scroll or continue typing to search. To insert the reference either click on the option, or hit `enter` when the option is highlighted.

## Articles and Notebooks

Articles and notebooks can be referenced throughout your text using the commands below. Only articles or notebooks within the current project will be displayed in the search options when using these reference commands.

To reference an article:

`/link to article` `[[article:`

```{figure} images/MshxlXndaLsk3WbJ0ZGy-UmpcpZPk1pdSYgvZQjTV-v2.gif
:name: a80e8f4f
:align: center
:width: 70%
```

To reference a notebook:

`/link to notebook` `[[nb:`

```{figure} images/MshxlXndaLsk3WbJ0ZGy-OKUZNxbRweAfJoegWvU0-v2.gif
:name: a55259c0
:align: center
:width: 70%
```

```{note}
You can reference articles and notebooks that are not in the current project by copying the reference from another project or creating a link using the content’s unique [oxa.link](https://oxa.link/). Curvenote will recognize that the link is to an internal article or notebook and add an icon before the text.

```

## Sections

````{margin}
```{figure} images/MshxlXndaLsk3WbJ0ZGy-xl8KloUEujO3GYdbZOT8-v2.gif
:name: aa8533b0
:align: center
:width: 80%
```

````

You can create sections within your articles and notebooks by using Markdown heading formatting. Learn more about creating headings ➡️ [Command Menu & Shortcuts](oxa:MshxlXndaLsk3WbJ0ZGy/MBRvRRC3dcKkhfgwGOaZ 'Command Menu & Shortcuts'), [Markdown Accelerated Editing](oxa:MshxlXndaLsk3WbJ0ZGy/z9mCLSQZG1tjCDyEDbE2 'Markdown Accelerated Editing ')

Once headings have been been created, you can update their size and add numbering by highlighting the full text of the heading. A toolbar will appear below the text. You can adjust the level of your heading in the drop down menu. You can **Toggle Numbering** by clicking on the number symbol. The numbering is ordered by the level and location of the heading on the page. All numbering will start at 1 at the beginning of the page. The numbering will automatically update with added or removed headings.

```{note}
It is possible to have a numbering at 0. If you have a level 2 heading without any level 1 headings, that section will be numbered 0.1.

```

Currently only sections that are numbered can be referenced accurately. Only sections on the current page will be displayed in the search options when using these reference commands. To reference a section:

`/link to section` `[[sec:`

```{figure} images/Z1isOjJQGvM22q5fhunb-olFrGPqGl9z9MsIml2ok-v1.png
:name: tZToKTzD5s
:align: center
:width: 70%
```

## Figures

Images, GIFs, and Jupyter Outputs that are **numbered** can be referenced. Only figures on the current page will be displayed in the search options when using these reference commands. Learn more about numbering figures in [Figures & Images](oxa:Z1isOjJQGvM22q5fhunb/gzr0LnPie4uvL7GSEISJ 'Figures & Images').

To reference a figure:

`/link to figure` `[[fig:`

```{figure} images/Z1isOjJQGvM22q5fhunb-9NmCaj4w3D0gphg971Zs-v1.png
:name: KptVPtJYu0
:align: center
:width: 70%
```

## Equations

Equations that are **numbered** and on the current page will be displayed in the search options when using these reference commands. Learn more about numbering equations [Math & Equations](oxa:Z1isOjJQGvM22q5fhunb/Y0cAWcbYJy11ZBXmGSAm 'Math & Equations').

`/link to equation` `[[eq:`

```{figure} images/Z1isOjJQGvM22q5fhunb-eHbtJLS6TSuK9IF4WtYe-v1.png
:name: a3QXjZhCX6
:align: center
:width: 70%
```
