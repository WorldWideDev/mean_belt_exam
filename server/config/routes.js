var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js')
var surveys = require('../controllers/surveys.js')

module.exports = function(app){
	app.get('/users/index', function (req,res){
		console.log('in user index routes')
		users.index(req,res);
	})
	app.get('/users/login', function (req,res){
		users.login(req,res)
	})
	app.post('/users/create', function (req,res){
		console.log('in create user')
		console.log(req.body + ' is post data in routes')
		users.create(req,res)
	})
	app.get('/surveys/indexAll', function (req,res){
		surveys.indexAll(req,res)
	})
	app.get('/surveys/index/:id', function (req,res){
		surveys.index(req,res)
	})
	app.post('/surveys/create', function (req,res){
		console.log('in create survey')
		console.log(req.body + ' is post data in routes')
		surveys.create(req,res)
	})
	app.get('/surveys/remove/:id', function (req,res){
		surveys.remove(req,res)
	})
	app.post('/surveys/vote/:id', function (req,res){
		console.log(req.params)
		surveys.vote(req,res)
	})
	// app.get('/surveys/getOptions/:id', function (req,res){
	// 	surveys.getOptions(req,res)
	// })
}