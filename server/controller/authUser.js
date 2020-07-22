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
            result.code = 0;
            result.msg = '成功';
            result.data = data[0];
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        result.msg = error;
    }

    ctx.body = result
}