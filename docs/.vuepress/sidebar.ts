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
    "seasons/",
    {
      text: "关于我们",
      collapsible: true,
      children:[
        'about-us/our-story.md',
        {
          text: "OP组成员",
          link: "about-us/op.md",
        },
        'about-us/pt-bot.md',
      ]
    },
  ],
});
