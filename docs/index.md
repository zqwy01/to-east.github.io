---
title: Welcome to Quartz 4
---

Quartz is a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites. Thousands of students, developers, and teachers are [[deploy/to-east.github.io/docs/showcase|already using Quartz]] to publish personal notes, websites, and [digital gardens](https://jzhao.xyz/posts/networked-thought) to the web.

## 🪴 Get Started

Quartz requires **at least [Node](https://nodejs.org/) v22** and `npm` v10.9.2 to function correctly. Ensure you have this installed on your machine before continuing.

Then, in your terminal of choice, enter the following commands line by line:

```shell
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

This will guide you through initializing your Quartz with content. Once you've done so, see how to:

1. [[deploy/to-east.github.io/docs/authoring content|Writing content]] in Quartz
2. [[deploy/to-east.github.io/docs/configuration|Configure]] Quartz's behaviour
3. Change Quartz's [[deploy/to-east.github.io/docs/layout]]
4. [[deploy/to-east.github.io/docs/build|Build and preview]] Quartz
5. Sync your changes with [[deploy/to-east.github.io/docs/setting up your GitHub repository|GitHub]]
6. [[deploy/to-east.github.io/docs/hosting|Host]] Quartz online

If you prefer instructions in a video format you can try following Nicole van der Hoeven's
[video guide on how to set up Quartz!](https://www.youtube.com/watch?v=6s6DT1yN4dw&t=227s)

## 🔧 Features

- [[deploy/to-east.github.io/docs/features/Obsidian compatibility]], [[deploy/to-east.github.io/docs/features/full-text search]], [[deploy/to-east.github.io/docs/features/graph view]], [[deploy/to-east.github.io/docs/features/wikilinks|wikilinks, transclusions]], [[deploy/to-east.github.io/docs/features/backlinks]], [[deploy/to-east.github.io/docs/features/Latex|Latex]], [[deploy/to-east.github.io/docs/features/syntax highlighting]], [[deploy/to-east.github.io/docs/features/popover previews]], [[deploy/to-east.github.io/docs/features/Docker Support]], [[deploy/to-east.github.io/docs/features/i18n|internationalization]], [[deploy/to-east.github.io/docs/features/comments]] and [many more](./features/) right out of the box
- Hot-reload on configuration edits and incremental rebuilds for content edits
- Simple JSX layouts and [[deploy/to-east.github.io/docs/advanced/creating components|page components]]
- [[deploy/to-east.github.io/docs/features/SPA Routing|Ridiculously fast page loads]] and tiny bundle sizes
- Fully-customizable parsing, filtering, and page generation through [[deploy/to-east.github.io/docs/advanced/making plugins|plugins]]

For a comprehensive list of features, visit the [features page](./features/). You can read more about the _why_ behind these features on the [[deploy/to-east.github.io/docs/philosophy]] page and a technical overview on the [[deploy/to-east.github.io/docs/advanced/architecture]] page.

### 🚧 Troubleshooting + Updating

Having trouble with Quartz? Try searching for your issue using the search feature. If you haven't already, [[deploy/to-east.github.io/docs/upgrading|upgrade]] to the newest version of Quartz to see if this fixes your issue.

If you're still having trouble, feel free to [submit an issue](https://github.com/jackyzha0/quartz/issues) if you feel you found a bug or ask for help in our [Discord Community](https://discord.gg/cRFFHYye7t).
