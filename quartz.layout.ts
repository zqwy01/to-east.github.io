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
    Component.Explorer({
      mapFn: (node: any) => {
        try {
          if (node.isFolder) {
            node.displayName = `📁 ${String(node.displayName ?? "")}`;
            return;
          }

          const path = typeof node.path === "string"
          ? node.path
          : String(node.parent?.path ?? node.parent?.displayName ?? "");
          const parentName = String(node.parent?.displayName ?? "");
          const inMusic = path.split("/").includes("music") || parentName.toLowerCase() === "music";

          let name = String(node.displayName ?? "").trim();

          if (inMusic) {
            // удаляем всё до первого дефиса (включая дефис), затем снимаем кавычки и расширение
            name = name.replace(/^[^-]*-\s*/, "");                      // убрать Artist -
            name = name.replace(/^["'“”\s]+|["'“”\s]+$/g, "");          // убрать кавычки/лишние пробелы по краям
            name = name.replace(/\.[a-z0-9]{1,5}$/i, "");               // убрать расширение (.mp3 .wav и т.д.)
    name = name.trim();
          }

          node.displayName = `📄 ${name}`;
        } catch (err) {
          node.displayName = `📄 ${String(node.displayName ?? "")}`;
        }
      },
    }),
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
