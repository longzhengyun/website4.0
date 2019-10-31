const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
});

const auth = require('./auth')
const article = require('./article')

router.use(auth.routes());
router.use(article.routes());

module.exports = router