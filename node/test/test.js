var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'qds164149624_db',
    port: 3306
});

connection.connect();

connection.query('SELECT * from tk_admin_user', function(err, rows, fields) {
    if (err) throw err;

    console.log(rows[0]);
});

connection.end();