var mysql=require("mysql");

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '000000',
    database: 'test',
    port: 3306
});



var  user={
    //查找所有用户
    "findAllUsers":function(req, res , next){

        pool.getConnection(function(err,conn){
            conn.query('SELECT * from t_users', function(err, rows, fields) {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(rows);
                    console.log(fields);
                    res.send(rows);
                }
                conn.release();
                return next();
            });
        });


    },
    //根据id查找指定用户
    "findUser":function(req, res , next){
        console.log(req.params);
        var sqlstr1="select * from t_users where UserId="+req.params.userId;
        pool.getConnection(function(err,conn){
            conn.query(sqlstr1,function(err,rows,next){
                    if(err) res.send(err);
                res.send(rows);
                conn.release();
                return next();
            });
        });
    },
    //添加用户
    "AddUser":function(req, res , next){ return next();},
    //删除指定用户
    "deleteUser":function(req, res , next){
        return next();
    },
}

module.exports = user;