const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
});

const auth = require('./auth')
const article = require('./article')
const site = require('./site')
const user = require('./user')

router.use(auth.routes());
router.use(article.routes());
router.use(site.routes());
router.use(user.routes());

module.exports = router