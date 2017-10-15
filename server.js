// server.js
// BASE SETUP
// =============================================================================
// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var request = require("request");
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router
router.get('/', function(req, res, next){
  res.send("testing");
})
// all of our routes will be prefixed with /v1
//app.use('/v1', router);

// START THE SERVER
// =============================================================================
app.use('/', express.static(__dirname + '/'));
app.listen(port);
console.log('Magic happens on port ' + port);