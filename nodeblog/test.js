/**
 * Created by Administrator on 2015/10/25.
 */
var Topic        = require('./proxy').Topic;
var  eventproxy = require('eventproxy');

var cache        = require('./common/cache');
var xmlbuilder   = require('xmlbuilder');

var  urlset = xmlbuilder.create('urlset',{version:'1.0',encoding: 'UTF-8'});
urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

var ep = new eventproxy();
ep.fail(function (){
    console.log('ddddd');
});

ep.all('sitemap', function (sitemap){
    console.log('aaa');
});

cache.get('sitemap', ep.done(function (sitemapData) {
    if (sitemapData) {
        console.log(sitemapData);
        ep.emit('sitemap', sitemapData);
    } else {
        Topic.getLimit5w(function (err, topics) {
            if (err) {
                return next(err);
            }
            topics.forEach(function (topic) {
                urlset.ele('url').ele('loc', 'http://cnodejs.org/topic/' + topic._id);
            });

            var sitemapData = urlset.end();
            console.log(sitemapData);
            //缓存一天
            cache.set('sitemap', sitemapData, 3600 * 24);
            ep.emit('sitemap', sitemapData);
        });
    }
}));