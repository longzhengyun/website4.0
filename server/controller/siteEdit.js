const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { body } = ctx.request;
    const { id = 0 } = body;

    let result = {
        code: -1,
        msg: '',
        data: { id }
    }

    ctx.body = result
}