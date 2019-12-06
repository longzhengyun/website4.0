const Router = require('koa-router');
const router = new Router();

const authLoginController = require('./../controller/authLogin');
const authLogoutController = require('./../controller/authLogout');
const authUserController = require('./../controller/authUser');

router.post('/auth/login', authLoginController);
router.post('/auth/logout', authLogoutController);
router.get('/auth/user', authUserController);

module.exports = router