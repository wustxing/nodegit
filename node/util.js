//任务描述

//创建一个JavaScript文件，比如util.js；
//实践判断各种数据类型的方法，并在util.js中实现以下方法：
// 判断arr是否为一个数组，返回一个bool值
function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
   return typeof fn == 'function';
}
var a = [1, 3, 5, 7, 5, 3];
function aa()
{

}
var b = isArray(a);
var fn=isFunction(aa);
console.log(fn); // [1, 3, 5, 7]
//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式，并在util.js中实现以下方法：
//// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
//// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
//function cloneObject(src) {
//    // your implement
//
//}

// 测试用例：
//var srcObj = {
//    a: 1,
//    b: {
//        b1: ["hello", "hi"],
//        b2: "JavaScript"
//    }
//};
//var abObj = srcObj;
//var tarObj = cloneObject(srcObj);
//
//srcObj.a = 2;
//srcObj.b.b1[0] = "Hello";
//
//console.log(abObj.a);
//console.log(abObj.b.b1[0]);
//
//console.log(tarObj.a);      // 1
//console.log(tarObj.b.b1[0]);    // "hello"
//学习数组、字符串、数字等相关方法，在util.js中实现以下函数
//// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var arrc=new Array();
    for(var i=0;i<arr.length;i++)
    {
        var t=0;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                t++;
            }
        }
        if(t==0)
        {
            arrc.push(arr[i]);
        }
    }
    return arrc;
}

//// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
//
//// 中级班同学跳过此题
//// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
//// 假定空白字符只有半角空格、Tab
//// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
//function simpleTrim(str) {
//    // your implement
//}
//
//// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
//// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
//// 尝试使用一行简洁的正则表达式完成该题目
//function trim(str) {
//    // your implement
//}
//
//// 使用示例
//var str = '   hi!  ';
//str = trim(str);
//console.log(str); // 'hi!'
//
//// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
//function each(arr, fn) {
//    // your implement
//}
//
//// 其中fn函数可以接受两个参数：item和index
//
//// 使用示例
//var arr = ['java', 'c', 'php', 'html'];
//function output(item) {
//    console.log(item)
//}
//each(arr, output);  // java, c, php, html
//
//// 使用示例
//var arr = ['java', 'c', 'php', 'html'];
//function output(item, index) {
//    console.log(index + ': ' + item)
//}
//each(arr, output);  // 0:java, 1:c, 2:php, 3:html
//
//// 获取一个对象里面第一层元素的数量，返回一个整数
//function getObjectLength(obj) {}
//
//// 使用示例
//var obj = {
//    a: 1,
//    b: 2,
//    c: {
//        c1: 3,
//        c2: 4
//    }
//};
//console.log(getObjectLength(obj)); // 3
//学习正则表达式，在util.js完成以下代码
//// 判断是否为邮箱地址
//function isEmail(emailStr) {
//    // your implement
//}
//
//// 判断是否为手机号
//function isMobilePhone(phone) {
//    // your implement
//}
//2.2 期望达成
//
//掌握JavaScript的各种数据类型概念、判断方法
//掌握JavaScript函数、对象的概念
//掌握字符串、数字、数组、日期等对象的方法
//了解JavaScript的作用域
//初步掌握正则表达式的写法


function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}
x = makeAdder(5);
y = makeAdder(20);
x=makeAdder(3);
console.log( x(6));
console.log( x(6));
console.log( y(7));
