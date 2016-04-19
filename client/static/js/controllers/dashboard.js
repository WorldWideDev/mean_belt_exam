myApp.controller('DashboardController', function (UserFactory,SurveyFactory){
	self = this;
	UserFactory.login(function (query){
		console.log(query);
		self.curr_user = query;
		//console.log(self.curr_user)
	})
	SurveyFactory.indexAll(function (query){
		self.surveys = query
	})
	self.remove = function (survey){
		console.log(survey._user._id)
		console.log(self.curr_user._id)
		if(survey._user._id == self.curr_user._id){
			SurveyFactory.remove(survey, function (query){
				self.surveys = query;
			})
		}
	}

})