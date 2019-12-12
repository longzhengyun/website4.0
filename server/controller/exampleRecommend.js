const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { body } = ctx.request;
    const { id = 0, belong = '', limit = 6 } = body;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let sqlString = '';
    if (belong) {
        sqlString = `WHERE belong='${belong}'`;
    }

    try {
        let data = await mysql.query(`SELECT id, title, hot FROM case_data ${sqlString} AND id!='${id}' LIMIT 0, ${limit}`);
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