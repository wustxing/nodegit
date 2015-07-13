//这里专注于路由
var User=require("../models/user.js");

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

}