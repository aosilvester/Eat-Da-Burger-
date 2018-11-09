// REQUIREMENTS
var express = require("express");
    // bodyparser?
var exphbs = require("express-handlebars");

// APP VARIABLE tells node that we are creating an express server
var app = express();

// initial port for listener
var PORT = process.env.PORT || 8080;

// Parse app body as JSON
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setting up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });