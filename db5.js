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
    var sql = "insert into users (id, name, fav_product) values ?";
    var values = [
        [ 1, 'John', 154],
        [ 2, 'Peter', 154],
        [ 3, 'Amy', 155],
        [ 4, 'Hannah', 2],
        [ 5, 'Michael', 2]
    ];
    con.query(sql, [values], function(err, result) {
        if(err) throw err;
        console.log('Number of records inserted: ' + result.affectedRows);
    });
});