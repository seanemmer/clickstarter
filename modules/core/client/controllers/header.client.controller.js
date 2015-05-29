'use strict';

angular.module('core').controller('HeaderCtrl', ['$state', '$http','$scope', 'Authentication', 
	function($state, $http, $scope, Authentication) {
		console.log(Authentication.user);
		$scope.authentication = Authentication;

		$scope.signOut = function() {
			console.log('foobar');
			$http.get('/api/auth/signout')
			.then(function(payload) {
				// If successful we clear the global user model
				Authentication.user = null;

				// And redirect to the index page
				$state.go('home');
			}, function(error) {
				$scope.error = error.message;
			});
		};
	}
]);