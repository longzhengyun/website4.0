const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

const verify = Promise.promisify(jwt.verify);
const { secret, databaseQuery } = require('./../config');
const { GetCookie } = require('./../middleware/utils');

module.exports = async function (ctx) {
    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let token = GetCookie('token', ctx.request.header.cookie);

    try {
        // 解码
        let { userid } = await verify(token, secret);

        let data = await databaseQuery(`SELECT id, nickname FROM admin_data WHERE id='${userid}'`);
        if (Array.isArray(data) && data.length > 0) {
            ctx.cookies.set('token', '', {
                maxAge: 0
            })

            result.code = 0;
            result.msg = '退出成功';
        } else {
            result.msg = '查无此账号';
        }
    } catch (error) {
        result.msg = error;
    }

    ctx.body = result
}