//var settings = require('../settings'),
//    Db = require('mongodb').Db,
//    Connection = require('mongodb').Connection,
//    Server = require('mongodb').Server;
//module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});

var mysql=require("mysql");
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '000000',
    database: 'test',
    port: 3306
});


var db=function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //�ͷ�����
                conn.release();
                //�¼������ص�
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports=db;

//3����js��ʹ������
//var query=require("./lib/mysql.js");
//
//query("select 1 from 1",function(err,vals,fields){
//    //do something
//});
