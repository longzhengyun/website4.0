const { databaseQuery } = require('./../config');;

module.exports = async function (ctx) {
    const { query } = ctx.request;
    const { index = '1', limit = '10', category = '0' } = query;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let listIndex = 0;
    if (Number.isSafeInteger(Number(index)) && Number(index) > 0) {
        listIndex = Number(index) - 1;
    }

    let categoryKey = '';
    switch (category) {
        case '1':
            categoryKey = '技术';
            break;
        case '2':
            categoryKey = '工具';
            break;
        case '3':
            categoryKey = '其他';
            break;
        default:
            categoryKey = '';
    }

    let sqlString = '';
    if (categoryKey) {
        sqlString = `WHERE category='${categoryKey}'`;
    }

    try {
        let data = await databaseQuery(`SELECT * FROM site_data ${sqlString} ORDER BY id DESC LIMIT ${listIndex}, ${limit}`);
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
        } else {
            result.msg = error;
        }
    }

    ctx.body = result
}