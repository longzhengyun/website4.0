const Router = require('koa-router')
const router = new Router();

const siteHotController = require('./../controller/siteHot')
const siteListController = require('./../controller/siteList')
const siteEditController = require('./../controller/siteEdit')

router.get('/site/hot', siteHotController);
router.get('/site/list', siteListController);
router.post('/site/edit', siteEditController);

module.exports = router