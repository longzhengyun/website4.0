const mysql = require('./../mysql')
const jwt = require('jsonwebtoken')

module.exports = async function (ctx) {
    const { body } = ctx.request;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await mysql.query(`SELECT * FROM admin_data WHERE username='${body.username}'`);
        if (Array.isArray(data) && data.length > 0) {
            if (data[0].password === body.password) {
                let token = jwt.sign({
                    username: data[0].username,
                    time: new Date().getTime(),
                    timeout: 1000 * 60 * 60,
                }, 'secret');

                ctx.cookies.set('token', token, {
                    maxAge: 1000 * 60 * 60
                })

                result.code = 0;
                result.msg = '成功';
                result.data = { token };
            } else {
                result.msg = '密码不正确!';
            }
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        if (!body.username) {
            result.msg = '参数出错: username';
        } else if (!body.password) {
            result.msg = '参数出错: password';
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}