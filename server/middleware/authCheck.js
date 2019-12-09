const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

const verify = Promise.promisify(jwt.verify);
const { secret } = require('./../config');
const { GetCookie } = require('./../middleware/utils');

module.exports = async function (ctx, next) {
    let url = ctx.request.url;
    let method = ctx.request.method;

    if (url !== '/api/auth/login' && method === 'POST') {
        let result = {
            code: -2, // -1: 普通错误 -2: token失效
            msg: '',
            data: null
        }

        let token = GetCookie('token', ctx.request.header.cookie);

        try {
            // 解码
            await verify(token, secret);
            await next();
        } catch (err) {
            result.msg = 'token 已失效!';

            // 清除浏览器失效token
            ctx.cookies.set('token', '', {
                maxAge: 0
            })
            ctx.body = result;
        }
    } else {
        await next();
    }
}