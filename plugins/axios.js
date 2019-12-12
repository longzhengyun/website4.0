export default function ({ $axios, redirect, store }) {
    // $axios.onRequest(config => {
    //     console.log('Making request to ' + config.url)
    // })

    $axios.onResponse(response => {
        const { code } = response.data
        if (code === -2) {
            if (store.state.isLogin) {
                store.commit('isLogin', false)
            }
            redirect('/login')
        }
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/error')
        }
    })
}