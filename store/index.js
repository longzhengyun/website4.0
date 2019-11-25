export const state = () => ({
    menuConfig: [
        {
            name: '首页',
            icon: 'icon-home',
            url: '/'
        },
        {
            name: '文章',
            icon: 'icon-books',
            url: '/article'
        },
        {
            name: '网站',
            icon: 'icon-stack',
            url: '/site'
        },
        {
            name: '我的',
            icon: 'icon-user-tie',
            url: '/mine'
        }
    ],
    articleTabConfig: {
        currentIndex: 0,
        item: [
            {
                name: '全部',
                index: 0
            },
            {
                name: 'HTML',
                index: 1
            },
            {
                name: 'CSS',
                index: 2
            },
            {
                name: 'JavaScript',
                index: 3
            },
            {
                name: '杂谈',
                index: 4
            },
        ],
    },
    siteTabConfig: {
        currentIndex: 0,
        item: [
            {
                name: '全部',
                index: 0
            },
            {
                name: '技术',
                index: 1
            },
            {
                name: '工具',
                index: 2
            },
            {
                name: '其他',
                index: 3
            },
        ],
    },
})

export const mutations = {
    articleTabConfig(state, data) {
        Object.assign(state.articleTabConfig, data)
    },
    siteTabConfig(state, data) {
        Object.assign(state.siteTabConfig, data)
    },
}

export const actions = {}
