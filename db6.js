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
    var sql = "insert into products (id, name) values ?";
    var values = [
        [ 154, 'Chocolate Heaven'],
        [ 155, 'Tasty Lemons'],
        [ 156, 'Vanilla Dreams']
    ];
    con.query(sql, [values], function(err, result) {
        if(err) throw err;
        console.log('Number of records inserted: ' + result.affectedRows);
    });
});