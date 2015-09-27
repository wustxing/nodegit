/**
 * Created by Administrator on 2015/9/14.
 */
// import the necessary modules
var db = require('./models/db.js');
//var Schema = mongoose.Schema;
// create an export function to encapsulate the model creation
console.log(db.mongoose.connection);
var Schema=db.mongoose.Schema;
// define schema
//var Test1Schema = new Schema({
//    orderNo : String
//});
var Test2Schema = new Schema({
    orderNo : { type:Number }
});
var TestModel= db.mongoose.model('test2', Test2Schema);

var t1=new Date();


var query=TestModel.find({orderNo: {$lt: 000000}}).sort({'orderNo':-1}).limit(1);
query.exec(function (err, list) {
    if (err) {
        console.log(err);
        callback(err);
    }
    var t2 = new Date();

    console.log(list);
    if(list.length==0)
    {
        var query=TestModel.find({orderNo: {$gt: 2322}}).sort({'orderNo':1}).limit(1);
        query.exec(function (err, list) {
            if (err) {
                console.log(err);
                callback(err);
            }
            var t3 = new Date();

            console.log(list);
            console.log(t3 - t1);
        });
    }
    console.log(t2 - t1);
    //callback(null,list);
});

//Test1Model.find({orderNo:00000000000}, function(error, result){
//    if(error) {
//        console.log(error);
//        callback(error,null);
//    } else {
//
//        if(result.length>0)
//        {
//
//        }
//        else {
//           // var query = Test1Model.find().limit(1).skip(0000005233542);
//            //$ne不等于3，$gt大于10 $lt小于 $or或
//            var query = Test1Model.find().or([{orderNo: {$lt: 1}},{orderNo: {$gt: 1}}]).limit(1);//15113毫秒，没加索引
//
//            //Test1Model.find({ orderNo: {$lt: 10} },function(err,result){
//            //    if (err) {
//            //        console.log(err);
//            //        return;
//            //    }
//            //    var t2 = new Date();
//            //    console.log(result);
//            //    console.log(t2 - t1);
//            //});//15220
//
//            //var query = Test1Model.find({orderNo:{$lt:1}}).limit(1);//7533
//            var query = Test1Model.find().or([{orderNo: {$lt: 1}},{orderNo: {$gt: 1}}]).limit(1);
//            query.exec(function (err, list) {
//                if (err) {
//                    console.log(err);
//                    callback(err);
//                }
//                var t2 = new Date();
//                console.log(list);
//                console.log(t2 - t1);
//                //callback(null,list);
//            });
//        }
//    }
//});


