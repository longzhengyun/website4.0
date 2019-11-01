const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
});

const auth = require('./auth')
const article = require('./article')
const site = require('./site')

router.use(auth.routes());
router.use(article.routes());
router.use(site.routes());

module.exports = router