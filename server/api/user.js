const Router = require('koa-router');
const router = new Router();

const userBaseController = require('./../controller/userBase');
const userDetailController = require('./../controller/userDetail');

router.get('/user/base', userBaseController);
router.post('/user/detail', userDetailController);

module.exports = router