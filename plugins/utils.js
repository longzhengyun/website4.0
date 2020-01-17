import whiteList from './../assets/whiteList';

export default ({ app: { router } }, inject) => {
    inject('GetCookie', (name, cookie) => {
        let arr = [];
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (cookie && (arr = cookie.match(reg))) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    })

    inject('GoTarget', (path, title) => {
        if (path.indexOf('http') === 0) {
            // 判断非whiteList中的网站，使用webView打开
            let openView = true
            whiteList.map(item => {
                if (path.indexOf(item) === 0) {
                    openView = false
                }
            })

            if (openView) {
                router.push({ path: `/webView?url=${path}&title=${title}` })
            } else {
                window.location.href = path
            }
        } else {
            router.push(path)
        }
    })
}