var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
app.use(session({secret: 'devoniscool'}))
require('./server/config/mongoose.js');
app.use(bodyParser.json());
app.use(express.static(__dirname+'/node_modules'));
app.use(express.static(__dirname+'/client'));

require('./server/config/routes.js')(app);

var server = app.listen(3030, function(){
	console.log('its the year 3030')
})