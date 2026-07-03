const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123"
});

connection.connect((err) => {
    if (err) {
        console.error("Connection Error:", err);
        return;   // Stop execution if connection fails
    }

    console.log("Connected to MySQL");

    connection.query(
        "CREATE DATABASE IF NOT EXISTS shopping2",
        (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(result);
        }
    );
});

module.exports = connection;