/**
 * Created by Administrator on 2015/9/14.
 */
// import the necessary modules
var db = require('./models/db.js');
//var Schema = mongoose.Schema;
// create an export function to encapsulate the model creation
var Schema=db.mongoose.Schema;
// define schema
var Test1Schema = new Schema({
    orderNo : String
});
var Test1Model= db.mongoose.model('test6', Test1Schema);

var t1=new Date();

Test1Model.find({orderNo:"00000000000"}, function(error, result){
    if(error) {
        console.log(error);
        callback(error,null);
    } else {

        if(result.length>0)
        {

        }
        else {
            var query = Test1Model.find().limit(1).skip(0000005233542);
            query.exec(function (err, list) {
                if (err) {
                    callback(err);
                }
                var t2 = new Date();
                console.log(list);
                console.log(t2 - t1);
                //callback(null,list);
            });
        }
    }
});


