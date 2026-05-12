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
          // безопасный лог (если нужен)
          try { console.log(JSON.stringify({
            path: node?.path,
            parentDisplay: node?.parent?.displayName ?? node?.parent?.name,
            displayName: node?.displayName,
            name: node?.name,
            title: node?.title,
            fileName: node?.fileName,
            isFolder: node?.isFolder
          })) } catch (e) {}

          if (node?.isFolder) {
            node.displayName = `📁 ${String(node.displayName ?? node.name ?? "")}`;
            return;
          }

          const path = typeof node?.path === "string"
          ? node.path
          : String(node?.parent?.path ?? node?.parent?.displayName ?? node?.parent?.name ?? "");
          const parentName = String(node?.parent?.displayName ?? node?.parent?.name ?? "").toLowerCase();
          const inMusic = path.split("/").includes("music") || parentName === "music";

          // исходное имя из возможных полей
          const raw = String(node?.displayName ?? node?.name ?? node?.fileName ?? node?.title ?? "").trim();

          let finalName = raw;
          if (inMusic && raw) {
            finalName = raw
            .replace(/^[^-]*-\s*/, "")          // удалить всё до первого дефиса включительно
            .replace(/^["'“”\s]+|["'“”\s]+$/g, "") // убрать кавычки и пробелы по краям
            .replace(/\.[a-z0-9]{1,5}$/i, "")   // убрать расширение файла
            .trim();
            if (!finalName) finalName = raw.trim();
          }

          const display = `📄 ${finalName}`;
          node.displayName = display;
          node.name = finalName;
          node.title = finalName;
          node.fileName = finalName;
        } catch (err) {
          try { console.error("Explorer mapFn error:", String(err)) } catch (e) {}
          node.displayName = `📄 ${String(node?.displayName ?? node?.name ?? "")}`;
        }
      }
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
