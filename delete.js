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
    let sql = "delete from customers where address = 'Mountain 21'";

    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log('Number of rows deleted:' + result.affectedRows);
    });
});