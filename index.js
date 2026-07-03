const express = require("express");
const app = express();

// Import the database connection.
// This will execute the CREATE DATABASE query in dbshop.js.
require("./dbshop");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Shopping Project Server is Running");
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});