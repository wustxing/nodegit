//这里写user的方法
var db=require("db");

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
};
module.exports = User;

User.prototype.save=function(callback){
    var sql="select * from test";
    db(sql,function(err,rows,fields){
        console.log(rows);
    });
};

User.getAll=function(callback){

};

User.getUserById=function(id,callback){

};

User.delById=function(id,callback){

};

User.update=function(){

};


//var  user={
//    //查找所有用户
//    "findAllUsers":function(req, res , next){
//
//        pool.getConnection(function(err,conn){
//            conn.query('SELECT * from t_users', function(err, rows, fields) {
//                if (err)
//                {
//                    console.log(err);
//                }
//                else
//                {
//                    res.send(rows);
//                }
//                conn.release();
//                return next();
//            });
//        });
//
//
//    },
//    //根据id查找指定用户
//    "findUser":function(req, res , next){
//        console.log(req.params);
//        var sqlstr1="select * from t_users where UserId="+req.params.userId;
//        pool.getConnection(function(err,conn){
//            conn.query(sqlstr1,function(err,rows,next){
//                    if(err) res.send(err);
//                res.send(rows);
//                conn.release();
//                return next();
//            });
//        });
//    },
//    //添加用户
//    "AddUser":function(req, res , next){
//        console.log(req.params);
//        res.send(req.params);
//        return next();
//    },
//    //删除指定用户
//    "deleteUser":function(req, res , next){
//        return next();
//    },
//}
//
//module.exports = user;