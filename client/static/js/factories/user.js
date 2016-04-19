myApp.factory('UserFactory', function ($http){
	var factory = {}
	factory.index = function(callback){
		console.log('in user factory index')
		$http.get('/users/index').success(function (ring){
			callback(ring);
		})
	}
	factory.login = function(callback){
		$http.get('users/login').success(function (ring){
			callback(ring)
		})
	}
	factory.create = function(newUser, callback){
		//console.log(newUser)
		$http.post('/users/create', newUser).success(function (meow){
			callback(meow)
		})
	}
	return factory
})