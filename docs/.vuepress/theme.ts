import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import SidebarConfig from "./sidebar.js";

export default hopeTheme({
  hostname: "https://wiki.pixeltail.cn",

  iconAssets: "fontawesome-with-brands",

  favicon: "/assets/icon/logo-64x64.png",
  logo: "/assets/icon/logo-64x64.png",
  logoDark: "/assets/icon/logo-64x64.png",

  repo: "PixelTail/PixelTailWiki",

  docsDir: "docs",
  docsBranch: "master",

  darkmode: "enable",

  breadcrumb: false,

  // navbar
  navbar,

  // sidebar
  sidebar: SidebarConfig,

  footer: 'Copyright © 2015-2023 <a href="https://www.wingmark.cn">上海翎迹网络科技有限公司</a> | <a href="https://www.pixeltail.cn">PixelTail像素尾巴</a><br>备案号：<a href="https://beian.miit.gov.cn">沪ICP备2021004658号-7</a> | <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37090202001054" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><i class="sprite po2"></i>鲁公网安备 37090202001054号</a>',

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  titleIcon: false,
  pageInfo: false,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: false,
    
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    
    components: {
      components: ["AudioPlayer","BiliBili"]
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
