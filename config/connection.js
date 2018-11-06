// set up the code to connect Node to MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Itcear01",
    database: "bamazon_DB"
});



module.exports=connection;
