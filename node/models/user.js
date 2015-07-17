var db=require("./db/db");

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
};
module.exports = User;

User.prototype.save=function(callback){

};

User.getAll=function(callback){
    var sql="select * from tk_admin_user";
    db(sql,function(err,rows,fields){
        if (err) {
            return callback(err);//回调
        }
        //console.log(rows);
        callback(null,rows);
    });
};

User.getUserById=function(id,callback){

};

User.delById=function(id,callback){

};

User.update=function(){

};


//var  user={
//    //���������û�
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
//    //����id����ָ���û�
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
//    //����û�
//    "AddUser":function(req, res , next){
//        console.log(req.params);
//        res.send(req.params);
//        return next();
//    },
//    //ɾ��ָ���û�
//    "deleteUser":function(req, res , next){
//        return next();
//    },
//}
//
//module.exports = user;