const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { query } = ctx.request;
    const { id = 0, category = '', limit = 6 } = query;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await mysql.query(`SELECT id, title, hot FROM article_data WHERE category='${category}' AND id!=${id} LIMIT 0, ${limit}`);
        if (Array.isArray(data) && data.length > 0) {
            result.code = 0;
            result.msg = '成功';
            result.data = data;
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        if (!Number.isSafeInteger(id) || id < 0) {
            result.msg = '参数出错: id';
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}