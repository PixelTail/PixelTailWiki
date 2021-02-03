module.exports = {
    title: 'PixelTail Wiki',
    base: '',
    ga: 'G-EL9XLR0RJR',
    head: [
        ['link', { rel: 'icon', href: 'https://210-oss-ufile-cn.glowtree.cn/beehive%2F4%2Ffavicon.ico' }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        docsRepo: 'BillZhucn/PixelTailWiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们完善本页面',
        nav: [
            { text: '前往皮肤站', link: 'https://skin.2-10.cn/' },
            { text: '捐助众筹', link: 'https://afdian.net/@PixelTail' }
        ],
        sidebar: [
            ['/', '什么是PixelTail Wiki?'],
            {
                title: '欢迎来到PixelTail',
                collapsable: true,
                children: [
                    ['/introduction.html', '什么是 PixelTail?'],
                    ['/rules.html', '服务器游玩守则']
                ]
            },
            {
                title: '如何加入PixelTail',
                collapsable: true,
                children: [
                    ['/getting-start/whitelist.html', '如何获取白名单?'],
                    ['getting-start/littleskin.html', '如何配置外置登录?'],
                    ['/getting-start/newbie.html', '写给萌新的入服指南']
                ]
            }
        ],
        lastUpdated: '最后更新',
        smoothScroll: true
    },
    evergreen: false
}
