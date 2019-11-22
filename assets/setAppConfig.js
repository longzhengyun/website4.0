const setHeaderConfigAction = (name) => {
    let config = {}

    // login
    if (name === 'login') {
        config = {
            showBack: false
        }
    }

    // index
    if (name === 'index') {
        config = {
            showHeader: false
        }
    }

    // article
    if (name === 'article') {
        config = {
            showBack: false,
            title: '前端文章'
        }
    }

    // article/id
    if (name === 'article-id') {
        config = {
            title: '文章详情'
        }
    }

    // article/edit
    if (name === 'article-edit') {
        config = {
            title: '编辑文章'
        }
    }

    // site
    if (name === 'site') {
        config = {
            showBack: false,
            title: '网站收藏'
        }
    }

    // mine
    if (name === 'mine') {
        config = {
            showBack: false,
            title: '我的'
        }
    }

    return config
}

const setMenuConfigAction = (name) => {
    let config = {}

    // index
    if (name === 'index') {
        config = {
            showMenu: true,
            currentIndex: 0
        }
    }

    // article
    if (name === 'article') {
        config = {
            showMenu: true,
            currentIndex: 1
        }
    }

    // site
    if (name === 'site') {
        config = {
            showMenu: true,
            currentIndex: 2
        }
    }

    // mine
    if (name === 'mine') {
        config = {
            showMenu: true,
            currentIndex: 3
        }
    }

    return config
}

export { setHeaderConfigAction, setMenuConfigAction }
