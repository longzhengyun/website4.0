export const state = () => ({
    headerConfig: {
        showHeader: true,
        showBack: true,
        showClose: false,
        title: ''
    }
})

export const mutations = {
    headerConfig (state, data) {
        Object.assign(state.headerConfig, data)
    }
}

export const actions = {}
