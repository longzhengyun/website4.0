const Router = require('koa-router');
const router = new Router();

const articleHotController = require('./../controller/articleHot');
const articleListController = require('./../controller/articleList');
const articleDetailController = require('./../controller/articleDetail');
const articleRecommendController = require('./../controller/articleRecommend');

router.get('/article/hot', articleHotController);
router.get('/article/list', articleListController);
router.get('/article/detail', articleDetailController);
router.get('/article/recommend', articleRecommendController);

module.exports = router