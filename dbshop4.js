const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping2",
});

connection.connect(function (err) {
    connection.query(
        "select * from product where price=80",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    connection.query(
        "select * from customer where cname='golu'",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

module.exports = connection;