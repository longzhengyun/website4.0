const mysql = require('./../mysql')

module.exports = async function (ctx) {
    let result = {
        code: -1,
        msg: '',
        data: null
    }

    ctx.body = result
}