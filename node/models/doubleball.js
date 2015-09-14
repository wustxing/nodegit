var db=require("./db/db");

function DoubleBall(doubleball) {
    this.redball = doubleball.redball;
    this.basketball = doubleball.basketball;
};
module.exports = DoubleBall;

DoubleBall.prototype.save=function(sql,callback) {
    var doubleball = {
        redball: this.redball,
        basketball: this.basketball
    };
    //var sql = "INSERT INTO DoubleBall (redball,basketball) VALUES ('"+doubleball.redball+"',"+doubleball.basketball+")";
    db(sql, function (err, rows) {

        if (err) {
            callback(err);
        }
        callback(null, rows);
        //DoubleBall.getdoubleballById(rows.insertId, function (err, rows, fields) {
        //    //console.log(rows);
        //    callback(null, rows);
        //});

    });
};

//根据id查找用户
DoubleBall.getdoubleballById=function(id,callback){
    console.log(id);
    //这里加上id的判断
    var sql="select * from DoubleBall where id="+id;
    db(sql,function(err,rows,fields){
        if(err)
        {
            return callback(err);
        }
        callback(null,rows);
    });
};