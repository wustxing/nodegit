var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '000000',
    database: 'test',
    port: 3306
});

connection.connect();

connection.query('SELECT * from t_users', function(err, rows, fields) {
    if (err) throw err;

    console.log(rows[0]);
});

connection.end();