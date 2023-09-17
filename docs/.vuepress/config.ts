import { defineUserConfig } from "vuepress";
import sbaudio from "vuepress-plugin-sbaudio";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PixelTail 像素尾巴",

  theme,

  plugins:[
    sbaudio({
      aplayerOptions: {
        fixed: false,
        mini: false,
        autoplay: false,
        theme: "#2980b9",
        loop: "all",
        order: "list",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        lrcType: 3,
        listFolded: false,
        listMaxHeight: "340px",
        storageName: "@u2sb/vuepress-plugin-meting",
      },
      aplayerGlobalOptions: {
        fixed: true,
        mini: true,
        autoplay: false,
        theme: "#2980b9",
        loop: "all",
        order: "list",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        lrcType: 3,
        listFolded: false,
        listMaxHeight: "540px",
        storageName: "@u2sb/vuepress-plugin-meting",
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
