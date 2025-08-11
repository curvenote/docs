---
title: Listings
---

(static-listings)=

# Static Listings

The {myst:directive}`template:list` enables a very flexible way to add content from a list YAML list. This parses a local data file, gives you access to the list (specified by the {myst:directive}`template:list.path`) and then loops over the content using Jinja style templates (see [Nunjucks docs for syntax](https://mozilla.github.io/nunjucks/templating.html)).
For example, if you have a series of blog articles, people or news, you might have a simple YAML file like:

```{literalinclude} ../news.yml

```

## List of Items

The default for the {myst:directive}`template:list` is a bullet list, and for example, you can show the title using `{{ title }}`:

```
::::{template:list} news.yml
:path: news
{{ title }}
::::
```

Which creates:

```{div .framed}
:::{template:list} news.yml
:path: news
{{ title }}
:::
```

The available template options that you can use are the ones that are defined in your object. If something is not available in all objects, use the `{% if date %}{{ date }}{% endif %}` syntax.

## List of Links

A slightly more complicated example, might {myst:directive}`template:list.limit` the number of elements shown, puts the title in a markdown link (`[title](url)`) and adds an optional date. In this example, there is also a different final element to see more news. You can add whatever markdown you wish, it is parsed as normal!

```
::::{template:list} news.yml
:limit: 3
:last: [More News](https://curvenote.com/news) ...
:path: news
[{{title}}{% if date %} - [{{date}}]{% endif %}]({{url}})
::::
```

Which creates:

```{div .framed}
:::{template:list} news.yml
:limit: 3
:last: [More News](https://curvenote.com/news) ...
:path: news
[{{title}}{% if date %} - [{{date}}]{% endif %}]({{url}})
:::
```

## List of Blogs

You can also change the {myst:directive}`template:list.parent` element that is used, away from a list item and into, for example, `grid`. If you want to supply options to that parent element, you can use JSON and it will be used as the AST directly. In this case we are using that grid with each child being rendered as a {myst:directive}`card:blog` to show a appealing blog-like list of cards.

```markdown
::::{template:list} news.yml
:path: news
:parent: {"type": "grid", "columns": [1,2,2,2]}
:::{card:blog} {{title}}
:link: {{url}}
:image: {{image}}
:date: {% if date %}{{date}}{% endif %}
:tags: {% if tags %}{{tags.join(',')}}{% endif %}

{% if description -%}{{description}}{%- endif %}
:::
::::
```

::::{template:list} news.yml
:path: news
:parent: {"type": "grid", "columns": [1,2,2,2]}
:::{card:blog} {{title}}
:link: {{url}}
:image: {{image}}
:date: {% if date %}{{date}}{% endif %}
:tags: {% if tags %}{{tags.join(',')}}{% endif %}

{% if description -%}{{description}}{%- endif %}
:::
::::

(dynamic-listings)=

# Dynamic Listings

Dynamic listings query the Curvenote platform API on load to reteive lists of published works from your Venue, so are always up to date. Dynamic listings can be configured usig cobinations of [Submission Kinds](/kinds) and [Collections](/collections).

- TODO: cn:articles https://github.com/curvenote/curvenote/blob/main/packages/cli-plugin/src/directives/articles.ts
- TODO: cn:collections https://github.com/curvenote/curvenote/blob/main/packages/cli-plugin/src/directives/collections.ts

See the reference material for all [Curvenote directives](directives).
