const mysql = require('./../mysql');
const { FormatDate } = require('./../../assets/utils');

module.exports = async function (ctx) {
    const { query } = ctx.request;
    const { index = 1, limit = 10 } = query;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let listIndex = 0;
    if (Number.isSafeInteger(Number(index)) && Number(index) > 0) {
        listIndex = Number(index) - 1;
    }

    try {
        let data = await mysql.query(`SELECT id, title, date, description, category, hot FROM article_data ORDER BY id DESC limit ${listIndex}, ${limit}`);
        if (Array.isArray(data) && data.length > 0) {
            data.map(item => {
                item.date = FormatDate(new Date(item.date * 1000), 'yyyy-MM-dd');
            });

            result.code = 0;
            result.msg = '成功';
            result.data = data;
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        if (!Number.isSafeInteger(index) || index < 0) {
            result.msg = '参数出错: index';
        } else if (!Number.isSafeInteger(limit) || limit <= 0) {
            result.msg = '参数出错: limit';
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}