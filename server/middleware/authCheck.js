const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

const verify = Promise.promisify(jwt.verify);

function getCookie (name, cookie) {
    //可以搜索RegExp和match进行学习
    let arr = [];
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

module.exports = async function (ctx, next) {
    let url = ctx.request.url;

    // 登录 不用检查
    if (url === '/api/auth/login') {
        await next();
    } else {
        let result = {
            code: -1,
            msg: '',
            data: null
        }

        let token = getCookie('token', ctx.request.header.cookie);

        try {
            // 解码
            let payload = await verify(token, 'secret');
            let { time, timeout } = payload;
            let data = new Date().getTime();

            if (data - time <= timeout) {
                // 未过期
                await next();
            } else {
                result.msg = 'token 已过期!';
                ctx.body = result;
            }
        } catch (err) {
            result.msg = 'token 验证失败!';
            ctx.body = result;
        }
    }
}