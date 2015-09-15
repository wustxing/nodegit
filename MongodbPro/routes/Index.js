/**
 * Created by Administrator on 2015/9/13.
 */
var model = require('../models/OrderNo.js');
var util=require('../lib/Util.js');
var countModel=6;//取得模块数
module.exports=function(server){
    server.get('/', function (req, res) {
        var num=Math.round(Math.random()*(countModel-1)+1)-1;
        GetOrderNo(num,function (err, result) {
            if (err) {
                res.send({err: "1"});
            }
            else {
                //console.log(result);
                var opt=num.toString()+result[0].orderNo.toString();
                res.send({orderNo:opt});
            }
        });
    });

}

function GetOrderNo(num,callback)
{
    model.findCount(num,function (err, docs) {
        if (err)
        {
            console.log(err);
            return next(err);
        }
        //获取数量，然后生成一个在这个数量范围内的随机数
        var randomOrder=Math.round(Math.random()*(docs-1)+1);
        model.findOneOrderNo(num,randomOrder, function (err, resultOrder) {
            if(err)
            {
                callback(err,null);
            }
            else
            {
                if(resultOrder.length>0)
                {
                    console.log(resultOrder[0].orderNo);
                    callback(null,resultOrder[0].orderNo);
                    //删除
                    //model.delModel(num,resultOrder[0].orderNo,function(err,rs){
                    //    if(err)
                    //    {
                    //        callback(err,null);
                    //    }
                    //    else
                    //    {
                    //        callback(null,resultOrder);
                    //    }
                    //});

                }
                else
                {
                    console.log("ddd");
                    //GetOrderNo(callback);
                    callback(null,{err:"1"});
                }

                //model.delModel()

            }

        });

    });
}

function GetOrderNoTest(num,callback){
    console.log(num);
    model.findCount(num,function (err, docs) {
        if (err)
        {
            console.log(err);
            return next(err);
        }
        //获取数量，然后生成一个在这个数量范围内的随机数
        //var randomOrder=Math.round(Math.random()*(docs-1)+1);
        //console.log(docs);
        util.randomOrderNo(docs,function(err,result) {
            if (err) {
                callback(err,null);
            }
            else {
                var orderNo = result;
                model.findOneOrderNo(num,orderNo, function (err, resultOrder) {
                    if(err)
                    {
                        callback(err,null);
                    }
                    else
                    {
                        if(resultOrder.length>0)
                        {
                            console.log(resultOrder[0].orderNo);
                            model.delModel(num,resultOrder[0].orderNo,function(err,rs){
                                if(err)
                                {
                                    callback(err,null);
                                }
                                else
                                {
                                    callback(null,resultOrder);
                                }
                            });

                        }
                        else
                        {
                            console.log("ddd");
                            //GetOrderNo(callback);
                            callback(null,{err:"1"});
                        }

                        //model.delModel()

                    }

                });

            }
        });

    });
}



