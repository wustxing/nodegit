var db=require("./db/db");
var crypto = require('crypto');

function Admin_User(user) {
    this.UserId=user.UserId;
    this.LoginName = user.LoginName;
    this.Password = user.Password;
    this.DataStatus = user.DataStatus;
    this.LastUpdateOn=user.LastUpdateOn;
};
module.exports = Admin_User;
//添加用户
Admin_User.prototype.save=function(callback){
    //var md5 = crypto.createHash('md5'),
    //    email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'),
    //    head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
    //要存入数据库的用户信息文档
    var user = {
        LoginName: this.LoginName,
        Password: this.Password,
        DataStatus: this.DataStatus,
        LastUpdateOn: this.LastUpdateOn
    };
    var  sql="INSERT INTO tk_admin_user (LoginName, Password,DataStatus,LastUpdateOn) VALUES ('"+user.LoginName+"','"+user.Password+"','"+user.DataStatus+"','"+user.LastUpdateOn+"')";
    db(sql,function(err,rows){
        if(err)
        {
            callback(err);
        }
        Admin_User.getUserById(rows.insertId,function(err,rows,fields){
            callback(null,rows);
        });

    });


};
//查询所有用户
Admin_User.getAll=function(callback){
    var sql="select * from tk_admin_user";
    db(sql,function(err,rows,fields){
        if (err) {
            return callback(err);//回调
        }
        //console.log(rows);
        callback(null,rows);
    });
};
//根据id查找用户
Admin_User.getUserById=function(id,callback){
    console.log(id);
    //这里加上id的判断
    var sql="select * from tk_admin_user where UserId="+id;
    db(sql,function(err,rows,fields){
       if(err)
       {
           return callback(err);
       }
        callback(null,rows);
    });
};
//删除用户
Admin_User.delById=function(id,callback){
    console.log(id);
    //这里加上id的判断
    var sql="delete from tk_admin_user where UserId="+id;
    db(sql,function(err,rows,fields){
        if(err)
        {
            console.log(err);
            return callback(err);
        }
        console.log(rows);
        callback(null,rows);
    });
};
//更新
Admin_User.update=function(user,callback){
    console.log(user);
    //这里判断user
    var sql="update tk_admin_user set LoginName ='"+user.LoginName+"', Password='"+user.Password+"',DataStatus='"+user.DataStatus+"',LastUpdateOn='"+user.LastUpdateOn+ "' WHERE UserId ="+user.UserId;
    console.log(sql);
db(sql,function(err,rows,fields){
   if(err)
   {
       console.log(err);
      return callback(err);
   }
    callback(null,rows);
});
};