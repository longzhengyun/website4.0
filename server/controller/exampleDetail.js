const { databaseQuery } = require('./../config');
const { FormatDate } = require('./../middleware/utils');

module.exports = async function (ctx) {
    const { body } = ctx.request;
    const { id = 0 } = body;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    try {
        let data = await databaseQuery(`SELECT * FROM case_data WHERE id='${id}'`);
        if (Array.isArray(data) && data.length > 0) {
            data[0].date = FormatDate(new Date(data[0].date), 'yyyy-MM-dd');

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