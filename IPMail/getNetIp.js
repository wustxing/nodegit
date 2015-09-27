/**
 * Created by Administrator on 2015/9/27.
 */
/**
 * Created by Administrator on 2015/9/27.
 */
var cheerio = require("cheerio");
var server = require("./curl");

var url = "http://1111.ip138.com/ic.asp";

function getNetIp(callback) {
    server.download(url, function (data) {
        if (data) {
            var $ = cheerio.load(data);
            var t = $("center").text();
            var start = t.indexOf('[');
            var end = t.indexOf(']');
            var ip = t.substring(start + 1, end);
            callback(null,ip);
        } else {
            console.log("error");
            callback("error",null);
        }
    })
};

exports.getNetIp=getNetIp;