var  restify=require("restify");
//var user=require("./models/user");
var routes=require("./routes/index.js");
var ip_addr = '127.0.0.1';
var port    =  '8080';

var server = restify.createServer({
    name : "myapp"
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