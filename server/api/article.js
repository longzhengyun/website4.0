const Router = require('koa-router')
const router = new Router();

const articleListController = require('./../controller/articleList')
const articleDetailController = require('./../controller/articleDetail')
const articleEditController = require('./../controller/articleEdit')

router.post('/article/list', articleListController);
router.post('/article/detail', articleDetailController);
router.post('/article/edit', articleEditController);

module.exports = router