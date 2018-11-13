var express = require("express");

// set up express surver
var app = express();

// sets up initial port. process.env allows heroku to apply functional port
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// sets up the "flounder" to wait to be "poked"
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});