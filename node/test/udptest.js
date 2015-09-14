/**
 * Created by Administrator on 2015/8/30.
 */
var dgram=require("dgram");
var  server=dgram.createServer("udp4");

server.on("message", function (msg, rinfo) {
    console.log("server go:"+msg+"from"+rinfo.address+":"+rinfo.port);
});
server.on("listening",function (){
   var address=server.address();
    console.log("server listening"+address.address+":"+address.port);
});
server.bind(8123,function(){
    console.log("监听："+8123);
})