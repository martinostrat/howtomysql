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

    con.query("select name, address from customers", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});