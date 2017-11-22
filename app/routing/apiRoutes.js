//Creating dependencies
var path = require("path");
var useData = require("../data/friends.js");

//Creating api routes
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(useData);
	});

	app.post("/api/friends", function(req, res) {
		var appUser = req.body;
		//appUser.routeName = appUser.name.replace(/\s+/g, "").toLowerCase();

		console.log(appUser);

		friends.push(appUser);

		res.json(true);
	});

};	

//app.post("/api/friends", function(req, res) {

//});
