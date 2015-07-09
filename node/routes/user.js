var mysql=require("mysql");

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'qds164149624_db',
    port: 3306
});

var getAllUserSql="SELECT * from tk_admin_user";

var  user={
    //���������û�
    "findAllUsers":function(req, res , next){
        console.log("chaxun"+req.params);
        console.log(req.params);
        pool.getConnection(function(err,conn){
            conn.query(getAllUserSql, function(err, rows, fields) {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    res.send(rows);
                }
                conn.release();
                return next();
            });
        });


    },
    //����id����ָ���û�
    "findUser":function(req, res , next){
        console.log(req.params);
        var getUserSql="select * from tk_admin_user where UserId= "+req.params.userId;
        pool.getConnection(function(err,conn){
            conn.query(getUserSql,function(err,rows,next){
                    if(err) res.send(err);
                res.send(rows);
                conn.release();
                return next();
            });
        });
    },
    //����û�
    "AddUser":function(req, res , next){
        console.log("shanchu"+req.params);
        console.log(req.params);
        console.log(req.params.LoginName);
        res.send(req.params);
        return next();
    },
    //ɾ��ָ���û�
    "deleteUser":function(req, res , next){
        return next();
    },
}

module.exports = user;