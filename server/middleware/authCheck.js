const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

const verify = Promise.promisify(jwt.verify);
const { secret } = require('./../config');

function getCookie (name, cookie) {
    let arr = [];
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (cookie && (arr = cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

module.exports = async function (ctx, next) {
    let url = ctx.request.url;
    let method = ctx.request.method;

    if (url !== '/api/auth/login' && method === 'POST') {
        let result = {
            code: -1,
            msg: '',
            data: null
        }

        let token = getCookie('token', ctx.request.header.cookie);

        try {
            // 解码
            await verify(token, secret);
            await next();
        } catch (err) {
            result.msg = 'token 已过期!';
            ctx.body = result;
        }
    } else {
        await next();
    }
}