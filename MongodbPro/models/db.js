/**
 * Created by Administrator on 2015/9/13.
 */
var settings = require('../settings');
var mongoose = require('mongoose');
//var db= mongoose.createConnection('mongodb://120.27.53.240:27017/OrderNo');
//mongoose.connect('mongodb://120.27.53.240:27017/OrderNo');
mongoose.connect('mongodb://'+settings.dbHost+":"+settings.dbPort+'/'+settings.dbName);
// 链接错误
//db.on('error', function(error) {
//    console.log(error);
//});
exports.mongoose=mongoose;