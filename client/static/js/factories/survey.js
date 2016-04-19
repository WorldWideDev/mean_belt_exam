myApp.factory('SurveyFactory', function ($http){
	var factory = {}
	factory.indexAll = function(callback){
		$http.get('/surveys/indexAll').success(function (ring){
			callback(ring)
		})
	}
	factory.index = function(route, callback){
		console.log('in survey factory index')
		$http.get('/surveys/index/' + route).success(function (ring){
			callback(ring);
		})
	}
	factory.create = function(newSurvey, callback){
		console.log(newSurvey + ' is new suvey')
		$http.post('/surveys/create', newSurvey).success(function (meow){
			callback(meow)
		})
	}
	factory.remove = function(survey, callback){
		$http.get('/surveys/remove/' + survey._id).success(function (ring){
			callback(ring)
		})
	}
	factory.vote = function(opt, callback){
		$http.post('/surveys/vote/' + opt._id).success(function (ring){
			callback(ring)
		})
	}
	return factory
})