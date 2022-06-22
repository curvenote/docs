---
title: Explorable Explanations
description: ""
authors:
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations: []
date: 2022-03-15T04:49:45.092Z
name: explorable-explanations
oxa: oxa:Z1isOjJQGvM22q5fhunb/FKfeWxyvfKNO5EhqYaw0
---

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/czx1Q44AwU2JQ11FlEbn.1"}

Curvenote can be used for interactive, explorable explanations. Define variables and interact with them through buttons and sliders, and update your narrative text in real-time. Each interactive component can be accessed using the keyboard shortcuts detailed below or the command menu.

````{warning}
The interactive component features are currently in `beta`. Please check back for more details or stay up to date with all Curvenote updates ➡️ [Release Notes](https://curvenote.com/@curvenote/release-notes). If you experience issues please reach out via [email](mailto:support@curvenote.com) or our [Community Slack](https://slack.curvenote.dev)! We appreciate your feedback!

Interactive features will be integrated to Jupyter outputs in the future. Stay tuned on [twitter](https://twitter.com/curvenote)!

````

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/LtCYGwtg5M49kHtxdvm5.1"}

## Video Demo 📺

```{iframe} https://www.loom.com/embed/524085f9c64e4652a12bd81a374d58df
:label: PYezOdogqn
:align: center
:width: 90%
```

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/ESarJJnCxqLdA4C76xeY.1"}

## Using Interactive Text

Here’s a short example of interactive text using variables. **Try out the slider** to see what happens to the text below.

### Park Admission

```{r:var}
:name: "visitors"
:value: "3"
:format: ".0f"
```

```{r:var}
:name: "cost"
:value: "10"
:format: ".0f"
```

{r:range}`rValue="visitors", rChange="{visitors: value}"`Visitors

If there are {r:display}`rValue="visitors"` visitors and the admission cost is {r:display}`rValue="cost", format="$"`, the park will make {r:display}`rValue="visitors*cost", format="$"`.

## Create a Variables

When using our interactive text tools, you’ll first need to create a variable. Variables look like this:

```{r:var}
:name: "variable"
:value: "0"
:format: ".0f"
```

To do this:

- Ensure you are on a new line in your article (you cannot create in-line variables)
- Type in the variable name
- Type in the equal sign `=`
- Type in the value for that variable
- Hit `enter`

```{figure} images/MshxlXndaLsk3WbJ0ZGy-qzJE2pr4T0szcURBoifM-v1.gif
:name: 3296f741
:align: left
:width: 20%
```

````{warning}
💡 **Tip** - You can edit your variable name, value, function, and format by right clicking on the variable to open the Variable Settings.

```{figure} images/MshxlXndaLsk3WbJ0ZGy-YD1bKNmYx9ZKSNpSqVUq-v1.png
:name: abb8d8b8
:align: center
:width: 30%
```

````

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/tEUgTtHFwMYlFadWRtdg.1"}

## Display a Variable

````{margin}
```{figure} images/MshxlXndaLsk3WbJ0ZGy-82wWQCbIQvIYtnRIBXWC-v1.gif
:name: a63d8479
:align: center
:width: 100%
```

````

To display a variable:

- Place your cursor in the area you’d like to display the variable
- Use two curly brackets `{{` to open the variable menu
- Select the variable you’d like to display
- Hit `enter`

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/h0BK3BX65DNMbiKoIHca.1"}

## Functions

````{margin}
```{figure} images/MshxlXndaLsk3WbJ0ZGy-pqVWAopZHYlNkgMj5B0I-v1.gif
:name: ac1c2e38
:align: center
:width: 100%
```

````

To display a function output (like multiplying two variables together):

- Place your cursor in the area you’d like to display the function output
- Use two curly brackets `{{` to open the variable menu
- Type in the variables and relevant mathematical operations (e.g. visitors \* cost)
- Hit `enter`

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/4tHUxTqdUH3wym1jb984.1"}

## Sliders

You can link your variables to sliders, which will update any variable displays in your text in real-time. To create a slider:

````{margin}
```{figure} images/MshxlXndaLsk3WbJ0ZGy-TYqrFb40GPrP8L9XuTau-v1.gif
:name: a23f3fd0
:align: center
:width: 100%
```

````

- Place your cursor in the area you’d like to display the slider
- Type in two equal signs `==`
- Enter in the name of the variable you’d like to link the slider to
- Type in two more equal signs `==`

+++ {"oxa":"oxa:Z1isOjJQGvM22q5fhunb/jSAQkTGLcyqAg3A5hfRG.1"}

### Dynamic Text

Similar to sliders, you can also a display a variable as dynamic text, where you can drag the number left to decrease the value or right to increase. To create a section of dynamic text:

- Place your cursor in the area you’d like to display the inline slider
- Type `\dynamic` to insert the text, and type the variable you would like to hook up

````{important}
**For example:** There are {r:dynamic}`rValue="visitors", rChange="{visitors: value}"` visitors in the park, the park will make {r:display}`rValue="visitors*cost", format="$"`.

````

