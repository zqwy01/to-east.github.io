import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "email": "zqwy@to-east.org",
	  "tik-tok-live": "https://www.tiktok.com/@zqwy.live",
      "tik-tok-to-east": "https://www.tiktok.com/@zqwy_to_east",
	  "pond5": "https://www.pond5.com/ru/artist/zqwy_music",
	  "pintrest": "https://pinterest.com/z_q_w_y/",
	  "audiomack": "https://audiomack.com/zqwy",
	  "apple_music": "https://music.apple.com/ru/artist/zqwy/1524644220",
	  "amazon_music": "https://music.amazon.com/artists/B08FXPSYSW/zqwy",
	  "spotify": "https://open.spotify.com/artist/2Efoy3CvUkMYDApH06FALw",
	  "sumbit_hub": "https://submithub.com/link/zqwy",
	  "soundclick": "https://www.soundclick.com/zqwy",
    },
	links_test: {
	  "soundcloud": "https://soundcloud.com/zqwy-sc",
	  "rapchat": "https://rapchat.com/profile/340DB690-9E23-11EB-8017-D314B4DFDD5D",
	  "yandex_music": "https://music.yandex.ru/artist/9811686",
	  "mts_music": "https://music.mts.ru/artist/9811686",
	  "sber_zvuk": "https://zvuk.com/artist/211125232",
	  "shazam": "https://www.shazam.com/artist/zqwy/1524644220",
	  "deezer": "https://www.deezer.com/ru/artist/104037322",
	  "bandcamp": "https://zqwy.bandcamp.com/",
	  "pandora": "https://www.pandora.com/artist/zqwy/ARlndnxfh6fpnqg",
	  "qobuz": "https://www.qobuz.com/us-en/interpreter/zqwy/13364978",
	  "ok": "https://ok.ru/music/artist/122906744693434",
	  "tidal": "https://tidal.com/browse/artist/20930958?u",
	  "flo": "https://www.music-flo.com/detail/artist/406541046",
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
    Component.Explorer(),
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


