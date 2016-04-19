myApp.controller('PollController', function ($routeParams,UserFactory,SurveyFactory){
	var route = $routeParams.id
	console.log($routeParams)
	console.log(route + ' is route id')
	self = this;
	// UserFactory.login(function (query){
	// 	console.log(query);
	// 	self.curr_user = query;
	// 	console.log(self.curr_user)
	// })
	SurveyFactory.index(route, function (query){
		//console.log(query)
		self.survey = query.survey
		self.opt = query.opt
		// console.log(query.opt)
		// console.log(query.survey)
	})
	self.vote = function(opt){
		//console.log(opt)
		SurveyFactory.vote(opt, function (query){
			self.survey = query.survey
			self.opt = query.opt
		})
	}
})