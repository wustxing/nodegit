/**
 * Created by Administrator on 2015/9/27.
 */
var fs = require("fs") ;
var txt = "11111" ;


//写入文件
fs.writeFile("bb.txt",txt,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;
fs.readFile("bb.txt","utf8",function (error,data){
    if(error) throw error ;
    console.log(data) ;
}) ;