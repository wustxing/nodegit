/**
 * Created by Administrator on 2015/9/13.
 */

// import the necessary modules
var db = require('./db.js');
//var Schema = mongoose.Schema;
// create an export function to encapsulate the model creation
var Schema=db.mongoose.Schema;
// define schema
var Test1Schema = new Schema({
    //orderNo : String
    orderNo : { type:Number }
});
//var Test1Model= db.mongoose.model('test1', Test1Schema);

var TestModel={};

for(var i=0;i<1;i++)
{
    var test='test'+(i+2);
    TestModel[i]=db.mongoose.model(test, Test1Schema);
}

//var OrderNoDAO = function(){};
//module.exports = new OrderNoDAO();
//最开始的做法
exports.findOneOrderNo=function(num,orderNo,callback){
    var criteria = {orderNo :orderNo}; // 查询条件
    TestModel[num].find(criteria, function(error, result){
        if(error) {
            console.log(error);
            callback(error,null);
        } else {
            if(result.length>0)
            {
                callback(null,result);
            }
            else {
                //var query = TestModel[num].find().limit(1).skip(orderNo);
                var query = TestModel[num].find().or([{orderNo: {$lt: orderNo}},{orderNo: {$gt: orderNo}}]).sort({'orderNo':-1}).limit(1);
                //$ne不等于3，$gt大于10 $lt小于 $or或
               // var query= TestModel[num].find({orderNo: {$lt: 3}, orderNo: {$gt: 10} });
                query.exec(function (err, list) {
                    if (err) {
                        callback(err);
                    }
                    console.log(list);
                    callback(null,list);
                });
            }
        }
    });
}

//改进后的做法
exports.findOrderNo=function(num,orderNo,callback){
    //var criteria = {orderNo :orderNo}; // 查询条件
    var query=TestModel[num].find({orderNo: {$lt: orderNo}}).sort({'orderNo':-1}).limit(1);
    //$ne不等于3，$gt大于10 $lt小于 $or或
    query.exec(function (err, listlt) {
        if (err) {
            callback(err);
        }
        console.log(listlt);
        if(listlt.length==0)
        {
            var query=TestModel[num].find({orderNo: {$gt: orderNo}}).sort({'orderNo':1}).limit(1);
            query.exec(function (err, listgt) {
                if (err) {
                    callback(err);
                }
                console.log(listgt);
                callback(null,listgt);
            });
        }
        else {
            callback(null, listlt);
        }
    });



    //TestModel[num].find(criteria, function(error, result){
    //    if(error) {
    //        console.log(error);
    //        callback(error,null);
    //    } else {
    //        if(result.length>0)
    //        {
    //            callback(null,result);
    //        }
    //        else {
    //
    //        }
    //    }
    //});
}

//查询数量
exports.findCount=function(num,callback){
    TestModel[num].count(function(err,result){
       if(err)
       {
           callback(err,null);
       }
        else
       {
           callback(null,result);
       }
    });
};

//删除
exports.delModel=function(num,orderNo,callback){
    var criteria = {orderNo :orderNo}; // 查询条件
    TestModel[num].remove(criteria,function(err,result){
        if(err)
        {
            callback(err,null);
        }
        else
        {
            console.log("删除成功");
            callback(null,result);
        }
    });
};


