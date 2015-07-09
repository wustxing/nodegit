var  restify=require("restify");
var user=require("./models/user");
var ip_addr = '127.0.0.1';
var port    =  '8080';

var server = restify.createServer({
    name : "myapp"
});
//restify.queryParser() �������������HTTP��ѯ�ַ������� /jobs?skills=java,mysql��������������ݽ�����req.query����á�
//restify.bodyParser() ���ڷ��������Զ�����������ת��ΪJavaScript����
//restify.CORS() ����Ӧ�ó����е�CORS֧��
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