const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { body } = ctx.request;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    if (body.phone && body.password) {
        try {
            let data = await mysql.query(`SELECT * FROM account WHERE phone=${body.phone}`);
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
    }

    ctx.body = result
}