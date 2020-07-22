const jwt = require('jsonwebtoken')

const { secret, databaseQuery } = require('./../config');

module.exports = async function (ctx) {
    const { body } = ctx.request;
    const { username = '', password = '' } = body;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await databaseQuery(`SELECT * FROM admin_data WHERE username='${username}'`);
        if (Array.isArray(data) && data.length > 0) {
            let res = data[0];
            if (res.password === password) {
                let token = jwt.sign({
                    userid: res.id, // 账户id
                    username: res.username, // 账户名
                    level: res.level, // 账户等级
                }, secret, { expiresIn: 60 * 60 });

                ctx.cookies.set('token', token, {
                    maxAge: 1000 * 60 * 60
                })

                result.code = 0;
                result.msg = '登录成功';
                result.data = { token, userid: res.id, username: res.username, level: res.level };
            } else {
                result.msg = '密码不正确!';
            }
        } else {
            result.msg = '查无此账号';
        }
    } catch (error) {
        if (!username) {
            result.msg = '参数出错: username';
        } else if (!password) {
            result.msg = '参数出错: password';
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}