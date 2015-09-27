/**
 * Created by Administrator on 2015/9/13.
 */
var  restify=require("restify");
var settings=require("./settings.js");
var routes=require("./routes/Index.js");
var ip_addr = settings.httpServerIp;
var port    = settings.httpServerPort;

var server = restify.createServer({
    name : "testapp"
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.acceptParser(server.acceptable));

routes(server);

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});