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
    let sql = "update customers set address = 'Canyon 321' where address = 'Valley 345'";

    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result.affectedRows + 'record/s updated');
    });
});