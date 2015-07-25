var User=require("../models/Admin_User.js");

module.exports=function(server){
    server.get('/', function (req, res) {
        User.getAll(function(err,rows){
            if(err)
            {
                console.log(err);
            }
            console.log(rows);
            res.send(rows);
        });
    });
    server.get('/add',function(req,res){
        var date = new Date();
        //存储各种时间格式，方便以后扩展
        var time = {
            date: date,
            year : date.getFullYear(),
            month : date.getFullYear() + "-" + (date.getMonth() + 1),
            day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
            date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        }
        console.log(time.day);
        var  user=new User({
            DataStatus:1,
            LoginName:'xing',
            Password:'xing',
            LastUpdateOn:time.day
        });
        user.save(function(err,user){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(user);
                res.send(user);
            }
        });
    });
    server.get("/del",function(req,res){
        var id=req.params.id;
        User.delById(id,function(err,rows){
            if(err)
            {
                res.send(err);
            }
            res.send(rows);
        });
    });
    server.get("/update",function(req,res){
        var date = new Date();
        //存储各种时间格式，方便以后扩展
        var time = {
            date: date,
            year : date.getFullYear(),
            month : date.getFullYear() + "-" + (date.getMonth() + 1),
            day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
            date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        }
        console.log(time.day);
        var  user=new User({
            UserId:7,
            DataStatus:2,
            LoginName:'xing1',
            Password:'xing1',
            LastUpdateOn:time.day
        });
        User.update(user,function(err,rows){
            if(err)
            {
                res.send(err);
            }
            res.send(rows);
        });
    });
}