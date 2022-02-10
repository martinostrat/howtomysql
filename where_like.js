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

    con.query("select * from customers where address like 'S%'", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});