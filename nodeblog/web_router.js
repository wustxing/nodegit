/**
 * Created by Administrator on 2015/10/25.
 */
var express = require('express');
var site    = require('./controllers/site');
var staticController = require('./controllers/static');

var router = express.Router();

// home page
router.get('/', site.index);

// static
router.get('/about', staticController.about);
router.get('/faq', staticController.faq);
router.get('/getstart', staticController.getstart);
router.get('/robots.txt', staticController.robots);
router.get('/api', staticController.api);


module.exports = router;
