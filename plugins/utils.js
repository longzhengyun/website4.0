export default ({}, inject) => {
    inject('GetCookie', (name, cookie) => {
        let arr = [];
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (cookie && (arr = cookie.match(reg))) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    })
}