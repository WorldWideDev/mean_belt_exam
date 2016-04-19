var myApp = angular.module('myApp', ['ngRoute'])
console.log('in angular config')
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController',
		controllerAs: 'LC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'DashboardController',
		controllerAs: 'DC'
	})
	.when('/poll/:id', {
		templateUrl: 'partials/poll.html',
		controller: 'PollController',
		controllerAs: 'PC'
	})
	.when('/create', {
		templateUrl: 'partials/create.html',
		controller: 'CreateController',
		controllerAs: 'CC'
	})
	.otherwise({
		redirectTo: '/'
	})
})