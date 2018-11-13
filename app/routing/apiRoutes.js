var friends = require("../data/friends.js");

module.exports = function(app) {
 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var calculatedPair = {
      name: "",
      photo: "",
      calculatedPairDifference: Infinity
    };
    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    for (var i = 0; i < friends.length; i++) {
      var activeUser = friends[i];
      totalDifference = 0;

      console.log(activeUser.name);

      for (var j = 0; j < activeUser.scores.length; j++) {
        var activeUserScore = activeUser.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(activeUserScore));
      }

      if (totalDifference <= calculatedPair.calculatedPairDifference) {
        // Reset the calculatedPair to be the new friend.
        calculatedPair.name = activeUser.name;
        calculatedPair.photo = activeUser.photo;
        calculatedPair.calculatedPairDifference = totalDifference;
      }
    }

    friends.push(userData);

    res.json(calculatedPair);
  });
};
