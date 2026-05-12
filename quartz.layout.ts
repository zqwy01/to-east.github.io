import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'zqwy01/to-east.github.io',
        repoId: 'R_kgDOQinmpg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOQinmps4C8Evn',
        lang: 'en'
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "email": "zqwy@to-east.org",
	  "tik-tok-live": "https://www.tiktok.com/@zqwy.live",
      "tik-tok-to-east": "https://www.tiktok.com/@zqwy_to_east",
	  "pond5": "https://www.pond5.com/ru/artist/zqwy_music",
	  "pintrest": "https://pinterest.com/z_q_w_y/",
	}
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
Component.Explorer(
  mapFn: (node: any) => {
    if (node.isFolder) {
      node.displayName = "📁 " + node.displayName;
      return;
    }

    // определяем, что файл в папке "music"
    const inMusic = (
      (typeof node.path === "string" && node.path.split("/").includes("music")) ||
      node.parent?.displayName === "music"
    );

    let name = node.displayName;

    if (inMusic) {
      // матчит: что угодно до дефиса, затем пробелы и строка в кавычках
      const m = name.match(/^[^-]+-\s*"(.*)"\s*$/);
      if (m && m[1]) {
        name = m[1];
      } else {
        // альтернативный случай: без кавычек, после дефиса
        const m2 = name.match(/^[^-]+-\s*(.*)$/);
        if (m2 && m2[1]) name = m2[1].trim();
      }
    }

    node.displayName = "📄 " + name;
  },
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
