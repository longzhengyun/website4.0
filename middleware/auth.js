export default function ({ store, redirect, route }) {
    if (!store.state.isLogin) {
        return redirect({
            path: '/login',
            query: { redirect: route.fullPath }
        })
    }
}