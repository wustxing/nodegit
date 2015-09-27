//这里主要讲一下思路，如何获取外网ip的改变
//1、定时获取外网ip，抓取ip138网页。获得ip
//2、发送邮件到邮箱或者存到mongodb
//3,定时从mongodb去取。

var fs = require("fs") ;
var netip=require("./getNetIp");
var sendmail=require("./sendmail");

setInterval(function() {
    netip.getNetIp(function(err,ip){
        if(err=="error")
        {
            console.log("error");
        }
        else
        {
            console.log(ip);
            //读取上次的ip
            fs.readFile("bb.txt","utf8",function (error,data){
                if(error) throw error ;

                if(data)
                {
                   //这里ip判断，如果和上次不同就发送邮件，并且重新写入bb.txt
                   if(data!=ip)
                   {
                       fs.writeFile("bb.txt",ip,function (err) {
                           if (err) throw err ;
                           console.log("File Saved !"); //文件被保存
                       }) ;
                       sendmail.sendMail("IP改变邮件通知",ip,function(err,result){
                            if(err)
                            {
                                console.log("发送失败");
                            }
                           else
                            {
                                console.log("发送成功");
                            }
                       });
                   }
                }
            }) ;
        }
    });
}, 10000);

