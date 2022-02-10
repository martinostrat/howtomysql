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
    let sql = "drop table if exists customers";

    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});