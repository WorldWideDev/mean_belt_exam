var mongoose = require('mongoose');
var User = mongoose.model('User');
var Survey = mongoose.model('Survey');
var Opt = mongoose.model('Opt');

module.exports = (function(){
	return {
		indexAll: function(req,res){
			Survey.find({}).populate('_user').exec(function (err,surveys){
				if(err){
					res.json(err);
				}else{
					res.json(surveys)
				}
			})
		},
		index: function(req,res){
			console.log('in survey index controller')
			Survey.findOne({_id: req.params.id}, function (err,survey){
				if(err){
					res.json(err)
				}else{
					Opt.find({_survey: survey._id}, function (err, options){
						if(err){
							res.json(err)
						}else{
							res.json({'survey': survey, 'opt': options})
						}
					})
				}
			})
		},
		create: function(req,res){
			console.log(req.session.name)
			User.findOne({name: req.session.name}, function (err,user){
				if(err){
					res.json(err);
				}else{
					console.log(user)
					var new_survey = new Survey ({
						question: req.body.question,
						createdAt: new Date,
						_user: user._id
					})
					
					new_survey.save(function (err){
						if(err){
							res.json(err)
						}else{
							var new_option1 = new Opt ({
								text: req.body.option1,
								_survey: new_survey._id
							})
							console.log(new_option1 + ' is new option 1')
							var new_option2 = new Opt ({
								text: req.body.option2,
								_survey: new_survey._id
							})
							var new_option3 = new Opt ({
								text: req.body.option3,
								_survey: new_survey._id
							})
							var new_option4 = new Opt ({
								text: req.body.option4,
								_survey: new_survey._id
							})
							new_option1.save()
							console.log(new_option1 + ' is new option 1')
							new_option2.save()
							new_option3.save()
							new_option4.save(function (err){
								if(err){
									res.json(err)
								}else{
									new_survey.options.push(new_option1,new_option2,new_option3,new_option4)
									new_survey.save(function (err){
										if(err){
											res.json(err);
										}else{
											res.json({'survey': new_survey, 'opt': [new_option1, new_option2, new_option3, new_option4]})
										}
									})
								}
							})
						}
					})
				}
			})
		},
		remove: function(req,res){
			Survey.remove({_id: req.params.id}, function (err){
				if(err){
					res.json(err);
				}else{
					res.redirect('/surveys/indexAll')
				}
			})
		},
		// getOptions: function(req,res){
		// 	Survey.findOne({_id: req.params.id}, function (err, survey){

		// 	})
		// }
		vote: function(req,res){
			Opt.findOne({_id: req.params.id}, function (err, opt){
				if(err){
					res.json(err);
				}else{
					opt.votes += 1
					opt.save(function (err){
						if(err){
							res.json(err);
						}else{
							res.redirect('/surveys/index/' + opt._survey)
						}
					})
				}
			})
		}
	}
})()