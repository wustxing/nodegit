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
                var query = TestModel[num].find().or([{orderNo: {$lt: orderNo}},{orderNo: {$gt: orderNo}}]).limit(1);
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


