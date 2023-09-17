import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "关于Wiki",
      prefix: "about-Wiki/",
      collapsible: true,
      children: "structure",
    },
    "getting-start/whitelist.md",
    {
      text: "周目信息",
      prefix: "seasons/",
      children: "structure",
    },
  ],
});
