const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});

const auth = require('./auth');
const article = require('./article');
const site = require('./site');
const example = require('./example');
const search = require('./search');
const user = require('./user');

router.use(auth.routes());
router.use(article.routes());
router.use(site.routes());
router.use(example.routes());
router.use(search.routes());
router.use(user.routes());

module.exports = router