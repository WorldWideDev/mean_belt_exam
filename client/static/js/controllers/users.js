myApp.controller('LoginController', function ($location,UserFactory){
	self = this;
	UserFactory.login(function (query){
		console.log(query);
		self.curr_user = query;
		console.log(self.curr_user)
	})
	self.create = function(){
		UserFactory.create(self.new_user, function (userQuery){
			self.users = userQuery
			$location.url('/dashboard')
		})
		self.new_user = ''
	}
})