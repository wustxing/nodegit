var  restify=require("restify");
var user=require("./models/user");
var ip_addr = '127.0.0.1';
var port    =  '8080';

var server = restify.createServer({
    name : "myapp"
});
//restify.queryParser() 插件是用来解析HTTP查询字符串（如 /jobs?skills=java,mysql），解析后的内容将会在req.query里可用。
//restify.bodyParser() 会在服务器上自动将请求数据转换为JavaScript对象。
//restify.CORS() 配置应用程序中的CORS支持
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.acceptParser(server.acceptable));

var PATH = '/getUser';
server.get({path : PATH , version : '0.0.1'} , user.findAllUsers);
server.get({path : PATH +'/:userId' , version : '0.0.1'} , user.findUser);
server.post({path : PATH , version: '0.0.1'} ,user.AddUser);
server.del({path : PATH +'/:userId' , version: '0.0.1'} ,user.deleteUser);

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});