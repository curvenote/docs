---
title: MyST Extensions
short_title: MyST Extensions
description: Curvenote extends MyST Markdown with additional capabilities such as roles, directives, link transformers and more to bring richer content into your articles.
---

Curvenote extends [MyST Markdown](./authoring-in-myst.md) with custom directives and link transformers that enhance your content with rich, interactive elements. This page documents the Bluesky integration, which allows you to embed profile cards and create smart links to Bluesky profiles and posts.

## Bluesky Profile Cards

The `{bluesky}` directive embeds an inline Bluesky profile card in your document. Use it to showcase a Bluesky account—for example, when listing authors, contributors, or linking to your project's social presence.

````markdown
```{bluesky} curvenote.com
:show-stats: true
```
````

The directive accepts a Bluesky handle or DID as its argument. Handles can be provided with or without the `@` prefix (e.g. `opensci.dev` or `@opensci.dev`). You can also use a full DID such as `did:plc:xyz` for accounts that use decentralized identifiers.

### Options

- **show-stats** (boolean, default: `true`): When enabled, the card displays follower, following, and post counts. Set to `false` to show a compact profile card without statistics.

``````{tab-set}
`````{tab-item} With stats (default)
````markdown
```{bluesky} curvenote.com
:show-stats: true
```
````
`````
`````{tab-item} Without stats
````markdown
```{bluesky} curvenote.com
:show-stats: false
```
````
`````
``````

## Bluesky Link Behavior

Curvenote automatically recognizes and enriches links to Bluesky in your Markdown. When you add a link to a Bluesky profile or post, it is transformed so that the frontend can render a rich card or hover preview.

### Supported URL formats

- **Profile links**: `https://bsky.app/profile/{handle}`
- **Post links**: `https://bsky.app/profile/{handle}/post/{rkey}`

For example:

```{myst}
Check out [Curvenote on Bluesky](https://bsky.app/profile/curvenote.com) for updates.

Or link to a specific post: [this announcement](https://bsky.app/profile/curvenote.com/post/3k2e5y6abc123).
```

### Automatic link text

If you use a Bluesky URL as the link destination and leave the link text empty or use the raw URL as the text, Curvenote will automatically replace it with the handle in `@handle` format. This keeps your links readable and consistent.

:::{seealso} Directive reference
For low-level details on the `{bluesky}` directive options and usage, see the [Directives & Roles](./directives.md#directive-bluesky) reference.
:::
