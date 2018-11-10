// set up the code to connect Node to MySQL

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Itcear01",
    database: "burgers_db"
});
};

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


module.exports=connection;
