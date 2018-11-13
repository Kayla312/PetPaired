var path = require("path");

module.exports = function(app) {

  app.get("/survery", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survery.html"));
  });

  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
