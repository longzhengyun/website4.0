const Router = require('koa-router')
const router = new Router();

const articleListController = require('./../controller/articleList')
const articleDetailController = require('./../controller/articleDetail')
const articleEditController = require('./../controller/articleEdit')

router.get('/article/list', articleListController);
router.get('/article/detail', articleDetailController);
router.post('/article/edit', articleEditController);

module.exports = router