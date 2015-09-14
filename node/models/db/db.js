//var settings = require('../settings'),
//    Db = require('mongodb').Db,
//    Connection = require('mongodb').Connection,
//    Server = require('mongodb').Server;
//module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});

var mysql=require("mysql");
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'lottery',
    port: 3306
});

var db=function(sql,callback){

    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            console.log(sql);
            conn.query(sql,function(qerr,vals,fields){
                //
                conn.release();
                //
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports=db;

