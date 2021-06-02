const { config } = require("vuepress-theme-hope");

module.exports = config({
    title: 'PixelTail Wiki',
    base: '',
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-173388738-2' // UA-00000000-0
          }
        ]
    ],
    head: [
        ['link', { rel: 'icon', href: 'https://oss.landnet.cloud/beehive%2F4%2Ffavicon.ico' }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        blog: false,
        sidebarDepth: 1,
        pageInfo: false,
        comment: false,
        baseLang: 'zh-CN',
        darkmode: 'auto-switch',
        footer: [
            {display: true},
            {copyright: 'Copyright © PixelTail'}
        ],
        mdEnhance: {
            enableAll: true,
          },
        pwa: false,
        sidebarIcon: false,
        breadcrumbIcon: false,
        repoDisplay: false, 
        docsRepo: 'PixelTail/PixelTailWiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们完善本页面',
        nav: [
            { text: '皮肤站', link: 'https://skin.2-10.cn/' },
            {
                text: '赞助我们',
                items: [
                  { text: 'PixelTail', link: 'https://afdian.net/@PixelTail' }
                ]
            }
        ],
        sidebar: [
            ['2nd.html', 'PixelTail 2nd Anniv.'],
            {
                title: '欢迎来到PixelTail Wiki',
                collapsable: true,
                children:[    
                    ['/', '什么是PixelTail Wiki?'],
                    ['/wiki.md', '加入PixelTail Wiki编写']
                ]
            },
            {
                title: '什么是PixelTail',
                collapsable: true,
                children: [
                    ['whats-pixeltail/introduction.html', '简介'],
                    ['whats-pixeltail/rules.html', 'Tails公约'],
                ]
            },
            {
                title: '如何加入PixelTail',
                collapsable: true,
                children: [
                    ['getting-start/whitelist.html', '成为Tails'],
                    ['getting-start/authlib-injector.html', '配置外置登录'],
                    ['getting-start/socialmedia.html', '群组信息']
                ]
            },
            {
                title: "Golden Tails(黄金周目)",
                collapsable: true,
                children: [
                    ['gold/intro.html', '黄金周目简介'],
                    ['gold/content.html', '当前游玩内容简介'],
                    ['gold/getting-start.html', '快速入门']
                ]
            },
            {
                title: "Neon(霓虹周目)",
                collapsable: true,
                children: [
                    ['neon/intro.html', '霓虹周目简介'],
                    ['neon/news-and-updates.html', '已公开的消息']
                ]
            },
            {
                title: "PixelTail故事集",
                collapsable: true,
                children: [
                    ['story-collection/admin.html', '历届管理组名单'],
                    ['story-collection/num.html', '数字周目'],
                    ['story-collection/gold.html', '黄金周目'],
                    ['story-collection/neon.html', '霓虹周目'],
                    ['story-collection/builds.html', '建筑集'],
                    ['story-collection/player.html', '玩家名录']
                ]
            },
            ['PTNW.html', 'PixelTailNetwork'],
        ],
        lastUpdated: '最后更新',
        smoothScroll: true
    },
    evergreen: false
});
