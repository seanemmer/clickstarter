'use strict';

angular.module('users').config(['$stateProvider', 
	function($stateProvider) {
		// Users state routing
		$stateProvider
			.state('authentication', {
				abstract: true,
				templateUrl: 'modules/users/views/authentication/authentication.client.view.html',
				controller: 'AuthenticationCtrl'
			})
			.state('authentication.register', {
				url: '/register',
				templateUrl: 'modules/users/views/authentication/register.client.view.html',
				controller: 'AuthenticationCtrl'
			})
			.state('authentication.signin', {
				url: '/signin',
				templateUrl: 'modules/users/views/authentication/signin.client.view.html',
				controller: 'AuthenticationCtrl'
			});

	}
]);