const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { body } = ctx.request;
    let id = Number(body.id);

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await mysql.query(`SELECT * FROM article_data WHERE id=${id}`);
        if (Array.isArray(data) && data.length > 0) {
            result.code = 0;
            result.msg = '成功';
            result.data = data[0];
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