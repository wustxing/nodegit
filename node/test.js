//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//    database: 'lottery',
//    port: 3306
//});

//connection.connect();
//
//
//connection.query('INSERT INTO doubleball VALUES ('', '')', function(err, rows, fields) {
//    if (err) throw err;
//
//    console.log(rows[0]);
//});
//
//connection.end();




var  fs=require('fs');
var s=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33);
//var s=new Array(1,2,3,4,5,6,7,8,9,10,11);
for(var c=0; c< s.length-5;c++) {
    for (var b = c+1; b < s.length - 4; b++) {
        for (var a = b + 1; a < s.length - 3; a++) {
            for (var i = a + 1; i < s.length - 2; i++) {
                for (var j = i + 1; j < s.length - 1; j++) {
                    for (var k = j + 1; k < s.length; k++) {

                        for(var d=1;d<=16;d++) {
                            var txt = "[" + s[c] + "," + s[b] + "," + s[a] + "," + s[i] + "," + s[j] + "," + s[k] + "]";

                            var sql = "INSERT INTO doubleball (redball,basketball) VALUES ('"+txt.toString()+"',"+d+")";
                            console.log(sql);
                            //txt=txt+"\n";
                            //fs.appendFileSync("bb.txt", txt);
                            //console.log("保存成功" + txt+"\n");
                            //console.log("[%s,%s,%s,%s,%s,%s]\n", s[c],s[b],s[a], s[i], s[j], s[k]);
                        }
                    }
                }
            }
        }
    }
}