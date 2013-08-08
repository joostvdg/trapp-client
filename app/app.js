var trappClient = angular.module('Main', ['ngResource']);

trappClient.config(function ($routeProvider) {
	$routeProvider 
		.when('/users', 
		{
			controller: 'user',
			templateUrl: 'view/users.html'
		})

		.when('/userroles', {
			controller: 'userRole',
			templateUrl: 'view/userroles.html'
		})

		.when('/locations', {
			controller: 'location',
			templateUrl: 'view/locations.html'
		})

		.when('/traveller', {
			controller: 'traveller',
			templateUrl: 'view/traveller.html'
		})

		.when('/travel', {
			controller: 'travel',
			templateUrl: 'view/travel.html'
		})

		.when('/trip', {
			controller: 'trip',
			templateUrl: 'view/trip.html'
		})

		.otherwise({redirectTo : '/users'});
});
