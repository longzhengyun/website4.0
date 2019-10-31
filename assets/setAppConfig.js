const setHeaderConfigAction = (name) => {
    let config = {}

    /* ------------ front ------------- */

    // login
    if (name === 'login') {
        config = {
            showBack: false
        }
    }

    // index
    if (name === 'index') {
        config = {
            showBack: false,
            title: 'website'
        }
    }

    // article
    if (name === 'article') {
        config = {
            showBack: false,
            title: 'article'
        }
    }

    // article/id
    if (name === 'article-id') {
        config = {
            title: '文章详情'
        }
    }

    // article/edit/id
    if (name === 'article-edit-id') {
        config = {
            title: '编辑文章'
        }
    }

    // mine
    if (name === 'mine') {
        config = {
            showBack: false,
            showSet: true,
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
