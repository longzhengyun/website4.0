const Router = require('koa-router')
const router = new Router();

const userBaseController = require('./../controller/userBase')

router.get('/user/base', userBaseController);

module.exports = router