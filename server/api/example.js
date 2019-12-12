const Router = require('koa-router');
const router = new Router();

const exampleListController = require('./../controller/exampleList');
const exampleDetailController = require('./../controller/exampleDetail');
const exampleRecommendController = require('./../controller/exampleRecommend');

router.post('/example/list', exampleListController);
router.post('/example/detail', exampleDetailController);
router.post('/example/recommend', exampleRecommendController);

module.exports = router