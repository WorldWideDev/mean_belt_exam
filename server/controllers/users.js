var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		index: function(req,res){
			User.find({}, function (err,users){
				if(err){
					res.json(err);
				}else{
					res.json(users);
				}
			})
			console.log('in user index controller')
		},
		login: function(req,res){
			console.log(req.session.name)
			console.log('in login method')
			User.findOne({name: req.session.name}, function (err,user){
				if(err){
					res.json(err);
				}else{
					console.log(user)
					res.json(user)
				}
			})
		},
		create: function(req,res){
			console.log(req.body.name + " is user post")
			User.findOne({name: req.body.name}, function (err,user){
				if(err){
					res.json(err);
				}else{
					if(user){
						console.log(user)
						console.log(req.session)
						req.session.name = user.name
						console.log(req.session.name)
						res.json(user)
					}else{
						var new_user = new User({
							name: req.body.name
						})
						req.session.name = req.body.name
						console.log(req.session.name)
						new_user.save(function (err){
							if(err){
								console.log('somethings amiss')
								res.json(err)
							}else{
								console.log('added a user')
								res.redirect('/users/index')
							}
						})
					}
				}
			})
		}
	}
})()