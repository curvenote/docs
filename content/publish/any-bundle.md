---
title: Interactivity with Any Bundle Directives
short_title: Any Bundle Directives
description: >-
  The {myst:directive}`template:any-bundle` directive allows you to embed interactive content from any bundle in your article.
tags: []
---

There are a number of ways to include interactivity within a Curvenote article. Whilst one of these involves building a [computational article](./computational-articles.md) backed by a Jupyter instance with either Python or R code, there are other ways to include interactivity directly in the page without relying on a compute server.

These involve using client-side libraries to load and visualize data that is hosted openly and statically on the web. Curvenote includes a directive plugin pattern inspired by the popular [Any Widget](https://anywidget.dev/) interface already in established use in the Jupyter and Marimo notebook ecosystems enabling widgets and custom visualizations to be loaded provided that they can be bundles within a single ESM module.

## Basic Usage

The `any:bundle` directive allows writers of missed articles to plug in ESM JavaScript modules and accompanying styles within an article. The data provided by the author within directive in a Markdown is passed to the ESM module also provided in the directive.

The following is an example of the `any:bundle` directive syntax that should be included within a markdown file in order to load the `vizarr` library and display the dataset.

````
:::{any:bundle} https://curvenote.github.io/widgets/widgets/vizarr-viewer.js
:class: w-full

{
  "source": "https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0048A/9846152.zarr",
  "height": "600px"
}

:::
````

## Developing your own Widgets via `any:bundle`

The  `any:bundle` directive follows the basic principles of AnyWidget; a JavaScript bundle and optionally accompanying CSS are loaded on the page and passed a "model" which contains the data provided in the JSON body of the directive. The shape of that JSON data and the model parameters expected within the ESM module should be matched and that interface is established by the creator of the widget.


::::{figure}
:::typescript
export default {
  async initialize({ model}) {
    return () => {};
  }

  async render({ model, el }) {
    const height = model.get("height")

    let div = document.createElement('div');
    Object.assign(div.style, {
      height: height ?? '500px',
      backgroundColor: 'black',
    });
    // hard code closed for now
    let viewer = await (new MyCustomViewer());
    viewer.display();
    el.appendChild(div);

    return () => viewer.destory?.();
  },
};
:::

A minimal example of the main entrypoints (`intialize`,`render`) within an ESM module implementing the `any:bundle` interface.

::::

:::::{figure}
````markdown

:::{any:bundle} https://url-to-esm-module/bundle.js
:css: https://url-to-css-file/styles.css
:static: ./static-files-glob/*
:class: w-full class-applied-to-root-div

{
  "height": "600px"
}

:::

````

An example of an `any:bundle` directive.

:::::
