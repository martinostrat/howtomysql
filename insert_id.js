var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    var sql = "insert into customers (name, address) values ('Mihkel', 'Riia 123')";

    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('1 record inserted: ' + result.insertId);
    });
});