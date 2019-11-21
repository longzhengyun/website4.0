export const state = () => ({
    headerConfig: {
        showHeader: true,
        showBack: true,
        showClose: false,
        title: ''
    },
    menuConfig: {
        showMenu: false,
        currentIndex: 0,
        item: [
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
    },
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
})

export const mutations = {
    headerConfig (state, data) {
        Object.assign(state.headerConfig, data)
    },
    menuConfig(state, data) {
        Object.assign(state.menuConfig, data)
    },
    articleTabConfig(state, data) {
        Object.assign(state.articleTabConfig, data)
    },
}

export const actions = {}
