// 时间戳格式化
const FormatDate = (date, fmt) => {
    if (!date) {
        return ''
    }

    const padLeftZero = (str) => {
        return ('00' + str).substr(str.length)
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
};

// 获取cookies中的token
const GetCookie = (name, cookie) => {
    let arr = [];
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (cookie && (arr = cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

module.exports = { FormatDate, GetCookie }
