//Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up express app
var app = express();
var PORT = process.env.PORT || 5000; 

//Setting up the app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static('./app/public'));

//Adding application routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app); 

//Starting server to begin listening
app.listen(PORT, function () {
	console.log(`Friend Finder application listening on PORT ${PORT}`);
})