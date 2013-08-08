// Base
trappClient.controller('base', function($scope, $location, $resource) {
	
	$scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
	    $scope.path = newValue;
	});
});

// User
trappClient.controller('user', function($scope, $resource, $http) {
	$scope.method = 'GET';
  	$scope.url = 'http://localhost:8780/trapp/user';

	$http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.users = data;
      }).
      error(function(data, status) {
        console.log("user call failed", status, data);
    });

});

// User roles
trappClient.controller('userRole', function($scope, $resource, $http) {
	$scope.method = 'GET';
  	$scope.url = 'http://localhost:8780/trapp/userRole';

	$http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.userRoles = data;
      }).
      error(function(data, status) {
        console.log("userRole call failed", status, data);
    });

});

// Location
trappClient.controller('location', function($scope, $resource, $http) {
  $scope.method = 'GET';
    $scope.url = 'http://localhost:8780/trapp/location';

  $http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.locations = data;
      }).
      error(function(data, status) {
        console.log("location call failed", status, data);
    });

});

// Traveller
trappClient.controller('traveller', function($scope, $resource, $http) {
  $scope.method = 'GET';
    $scope.url = 'http://localhost:8780/trapp/traveller';

  $http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.travellers = data;
      }).
      error(function(data, status) {
        console.log("traveller call failed", status, data);
    });

});

// Travel
trappClient.controller('travel', function($scope, $resource, $http) {
  $scope.method = 'GET';
    $scope.url = 'http://localhost:8780/trapp/travel';

  $http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.travels = data;
      }).
      error(function(data, status) {
        console.log("travel call failed", status, data);
    });

});

// Trip
trappClient.controller('trip', function($scope, $resource, $http) {
  $scope.method = 'GET';
    $scope.url = 'http://localhost:8780/trapp/trip';

  $http({method: $scope.method, url: $scope.url}).
      success(function(data, status) {
        $scope.trips = data;
      }).
      error(function(data, status) {
        console.log("trip call failed", status, data);
    });

});