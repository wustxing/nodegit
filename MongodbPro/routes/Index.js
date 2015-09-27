/**
 * Created by Administrator on 2015/9/13.
 */
var model = require('../models/OrderNo.js');
var util=require('../lib/Util.js');
var countModel=5;//取得模块数
module.exports=function(server){
    server.get('/', function (req, res) {
        //var num=Math.round(Math.random()*(countModel-1)+1)-1;//减一以后就是0到4
        var num=0;
        GetOrderNo(num,function (err, result) {
            if (err) {
                res.send({err: "1"});
            }
            else {
                //console.log(result);
                var  rst="";
                var count=result[0].orderNo.toString().length;
                if(count<8)
                {
                    for(var i=0;i<8-count;i++)
                    {
                        rst+="0";
                    }
                }

                var opt="000"+(num+1).toString()+rst.toString()+result[0].orderNo.toString();
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
        console.log("数据库总数量："+docs.toString());
        var randomOrder=Math.round(Math.random()*(docs-1)+1);
        console.log("根据总数量生成的随机数："+randomOrder.toString());
        model.findOrderNo(num,randomOrder, function (err, resultOrder) {
            if(err)
            {
                callback(err,null);
            }
            else
            {
                if(resultOrder.length>0)
                {
                    console.log(resultOrder[0].orderNo);
                    //callback(null,resultOrder[0].orderNo);
                    //删除
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

    });
}




