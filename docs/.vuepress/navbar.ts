import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Wiki",
    prefix: "",
    children: [
      {
        text: "关于Wiki",
        link: "about-Wiki/",
      },
      'getting-start/whitelist.md',
    ]
  },
  {
    text: "皮肤站",
    icon: "book",
    link: "https://skin.pixeltail.cn",
  },
]);
