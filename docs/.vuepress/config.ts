import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PixelTail 像素尾巴",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
