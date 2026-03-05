---
title: Static
tags:
  - plugin/emitter
---

This plugin emits all static resources needed by Quartz. This is used, for example, for fonts and images that need a stable position, such as banners and icons. The plugin respects the `ignorePatterns` in the global [[deploy/to-east.github.io/docs/configuration]].

> [!important]
> This is different from [[deploy/to-east.github.io/docs/plugins/Assets]]. The resources from the [[deploy/to-east.github.io/docs/plugins/Static]] plugin are located under `quartz/static`, whereas [[deploy/to-east.github.io/docs/plugins/Assets]] renders all static resources under `content` and is used for images, videos, audio, etc. that are directly referenced by your markdown content.

> [!note]
> For information on how to add, remove or configure plugins, see the [[deploy/to-east.github.io/docs/configuration#Plugins|Configuration]] page.

This plugin has no configuration options.

## API

- Category: Emitter
- Function name: `Plugin.Static()`.
- Source: [`quartz/plugins/emitters/static.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/emitters/static.ts).
