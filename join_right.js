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
    let sql = "select users.name as user, products.name as favourite from users right join products on users.fav_product = products.id";

    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});