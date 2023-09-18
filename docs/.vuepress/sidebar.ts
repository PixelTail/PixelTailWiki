import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "关于Wiki",
      prefix: "about-Wiki/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "如何加入",
      link: "getting-start/whitelist.md",
      collapsible: true,
      children: [
        "getting-start/whitelist.md",
        "getting-start/authlib.md",
      ],
    },
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
