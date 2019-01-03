var path = require("path");


// ROUTING


module.exports = function (app) {
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    app.get("FriendFinder/app/Public/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "FriendFinder\app\Public\survey.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "FriendFinder\app\Public\home.html"));
    });
};