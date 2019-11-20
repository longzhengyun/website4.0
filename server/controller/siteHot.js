const mysql = require('./../mysql')

module.exports = async function (ctx) {
    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await mysql.query(`SELECT id, title, hot, url FROM site_data WHERE hot='y' ORDER BY id DESC LIMIT 6`);
        if (Array.isArray(data) && data.length > 0) {
            result.code = 0;
            result.msg = '成功';
            result.data = data;
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        result.msg = error;
    }

    ctx.body = result
}