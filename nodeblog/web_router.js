var express = require('express');
var site    = require('./controllers/site');


var staticController = require('./controllers/static');
var router = express.Router();
router.get('/', site.index);
router.get('/sitemap.xml',site.sitemap);
router.get('/app/download', site.appDownload);
if (config.allow_sign_up) {
} else {
    router.get('/signup', configMiddleware.github, passport.authenticate('github'));  // 进行github验证
}
router.get('/about', staticController.about);
router.get('/faq', staticController.faq);
router.get('/getstart', staticController.getstart);
router.get('/robots.txt', staticController.robots);
router.get('/api', staticController.api);
module.exports = router;


router.get('/signup', sign.showSignup);  // 跳转到注册页面
// mobile app download
//sitemap
// home page

// sign controller

// static
/**
 * Created by Administrator on 2015/10/25.
 */
router.post('/signup', sign.signup);  // 提交注册信息

