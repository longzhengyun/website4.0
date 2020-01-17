const mysql = require('./../mysql');

module.exports = async function (ctx) {
    const { body } = ctx.request;
    const { category = '' } = body;

    let result = {
        code: -1,
        msg: '',
        data: null
    }

    let sqlString = '';
    switch (category) {
        case 'evaluation':
            sqlString = 'info';
            break;
        case 'skill':
            sqlString = 'skill';
            break;
        case 'experience':
            sqlString = 'experience';
            break;
        case 'other':
            sqlString = 'other';
            break;
        default:
            sqlString = 'nickname, birthday, phone, email, github, degrees, major, job, worklife, state, salary';
    }

    try {
        let data = await mysql.query(`SELECT ${sqlString} FROM user_data`);
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

    ctx.body = result
}