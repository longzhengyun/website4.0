const Router = require('koa-router')
const router = new Router();

const siteHotController = require('./../controller/siteHot')
const siteListController = require('./../controller/siteList')

router.get('/site/hot', siteHotController);
router.get('/site/list', siteListController);

module.exports = router