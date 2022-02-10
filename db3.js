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
    var sql = "create table users (id int, name varchar(255), fav_product varchar(255))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('table created');
    });
});