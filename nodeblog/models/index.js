/**
 * Created by Administrator on 2015/10/25.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db,{
    server:{poolSize:20}
},function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

require('./user');
require('./topic');
require('./reply');
require('./topic_collect');
require('./message');

exports.User         = mongoose.model('User');
exports.Topic        = mongoose.model('Topic');
exports.Reply        = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.Message      = mongoose.model('Message');