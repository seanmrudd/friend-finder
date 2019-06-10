//Require path dependency so we can send file path to the HTML

var path = require("path");

//Export this module to server.js

module.exports = function(app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};