/**
 * Created by Administrator on 2015/8/30.
 */
var net=require("net");
var server=net.createServer();

server.on("connection",function(socket){
    //新的连接
    console.log("连接成功");
    socket.on("data",function(data){
        socket.write("您好");
    });
    socket.on("end",function(){
       console.log("连接中断");
    });

    //var t=new ArrayBuffer("欢迎光临  星星测试tcp");
    var t="dddd";
    socket.write(t);
});
server.listen(8123,function(){
    console.log("server bound 8123");
});