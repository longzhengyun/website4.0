const { databaseQuery } = require('./../config');;

module.exports = async function (ctx) {
    const { query } = ctx.request;
    const { index = '1', limit = '10', keyword = '', type = '' } = query;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let listIndex = 0;
    if (Number.isSafeInteger(Number(index)) && Number(index) > 0) {
        listIndex = Number(index) - 1;
    }

    let table = '';
    if (type === 'article') {
        table = 'article_data';
    }
    if (type === 'site') {
        table = 'site_data';
    }

    try {
        let data = await databaseQuery(`SELECT id, title FROM ${table} WHERE title LIKE '%${keyword}%' ORDER BY id DESC LIMIT ${listIndex}, ${limit}`);
        if (Array.isArray(data) && data.length > 0) {
            result.code = 0;
            result.msg = '成功';
            result.data = data;
        } else {
            result.msg = '查无数据';
        }
    } catch (error) {
        if (!Number.isSafeInteger(Number(index)) || Number(index) < 0) {
            result.msg = '参数出错: index';
        } else if (!Number.isSafeInteger(Number(limit)) || Number(limit) <= 0) {
            result.msg = '参数出错: limit';
        } else if (!keyword) {
            result.msg = '参数出错: keyword';
        } else if (!type) {
            result.msg = '参数出错: type';
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}