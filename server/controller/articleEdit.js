const mysql = require('./../mysql')

module.exports = async function (ctx) {
    const { body } = ctx.request;
    let id = Number(body.id);

    let result = {
        code: -1,
        msg: '',
        data: { id }
    }

    ctx.body = result
}