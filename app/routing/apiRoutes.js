//Load in data from our friends.js

var friends = require("../data/friends");
// console.log(friends);

//Route Function to server.js

module.exports = function(app) {
    app.post("/api/friends", function(req, res){
        friends.push(req.body);
    });

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
};