const Router = require('koa-router');
const router = new Router();

const searchController = require('./../controller/search');

router.get('/search', searchController);

module.exports = router