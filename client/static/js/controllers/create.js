myApp.controller('CreateController', function ($location,UserFactory,SurveyFactory){
	self = this;
	UserFactory.login(function (query){
		//console.log(query);
		self.curr_user = query;
		//console.log(self.curr_user)
	})
	self.create = function(){
		SurveyFactory.create(self.new_survey, function (survey){
			console.log(self.new_survey)
			console.log(survey)
			$location.url('/poll/' + survey.survey._id)
		})
		self.new_survey = ''
	}
})