var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '000000',
    database: 'test',
    port: 3306
});

module.exports = pool;