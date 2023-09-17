import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Wiki",
    prefix: "",
    children: [
      {
        text: "关于Wiki",
        link: "/about-Wiki/",
        prefix: "/about-Wiki/",
      },
      '/getting-start/whitelist.md',
      '/seasons/',
      {
        text: "关于我们",
        children:[
          '/about-us/our-story.md',
          {
            text: "OP组成员",
            link: "/about-us/op.md",
          },
          '/about-us/pt-bot.md',
        ]
      },
    ]
  },
  {
    text: "皮肤站",
    icon: "book",
    link: "https://skin.pixeltail.cn",
  },
]);
