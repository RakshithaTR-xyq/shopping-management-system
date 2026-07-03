const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping2"
});

connection.connect(function (err) {

    connection.query(
        "create table product (pname varchar(25), category varchar(25), price int)",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );

    connection.query(
        "create table customer (cname varchar(25), address varchar(25))",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );

});

module.exports = connection;