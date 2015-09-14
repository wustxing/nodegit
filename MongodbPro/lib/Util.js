/**
 * Created by Administrator on 2015/9/13.
 */
//crypto.random(10,function(err,result){
//    console.log(result);
//});
//Math.random()函数返回0和1之间的伪随机数，可能为0，但总是小于1，
//生成n-m，包含n和m的随机数：
//
//第一步算出 m-n的值，假设等于w
//
//第二步Math.random()*w
//
//第三步Math.random()*w+n
//
//第四步Math.round(Math.random()*w+n) 或者 Math.ceil(Math.random()*w+n)
//var t=Math.random()*(100-1);
//var s=t+1;
//var t1= Math.round(s);
//Math.round(Math.random()*(100-1)+1);
exports.randomOrderNo=function(entNum,callback){
    var randomResult=Math.round(Math.random()*(entNum-1)+1);
    var t="";
    if(randomResult.toString().length<9)
    {
        //console.log(randomResult.toString().length);
        for(var i= 0;i<9-randomResult.toString().length;i++){
            t+="0";
        }
        t=t+randomResult.toString();
        //console.log(t);
    }
    callback(null,t);
}


