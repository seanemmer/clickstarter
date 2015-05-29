'use strict';

angular.module('users').controller('AuthenticationCtrl', ['$http', '$state', '$rootScope', '$scope', 'Users', 'Authentication',
	function($http, $state, $rootScope, $scope, Users, Authentication) {
		$scope.stateName = $state.current.name;
		$scope.registerPage = 1;
		var userCredentials = {};

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.stateName = toState.name;
		});

		$scope.nextRegisterPage = function(form, credentials) {
			$scope.$broadcast('show-errors-check-validity');

			if (form.$valid) {
				userCredentials = credentials;
				$scope.registerPage = 2;
			}
		};

		$scope.monthOptions = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		$scope.dayOptions = [];
		for(var i = 0; i<31; i++) {
			$scope.dayOptions.push(i+1);
		}

		$scope.yearOptions = [];
		for(i = 2010; i>=1930; i--) {
			$scope.yearOptions.push(i);
		}

		$scope.submitRegister = function(form, credentials) {
			$scope.$broadcast('show-errors-check-validity');

			// Error message for radio button
			if (!credentials || !credentials.gender) {
				$('.gender-error').css('display','block');
			}

			if (form.$valid) {
				_.extend(userCredentials, credentials);
				userCredentials.dateOfBirth = new Date(credentials.dob.year, $scope.monthOptions.indexOf(credentials.dob.month), credentials.dob.day, 0,0,0, 0);
				delete userCredentials.dob;

				$http.post('api/auth/register', userCredentials)
				.then(function(payload) {

					// If successful we assign the newly registered user to the global user model
					Authentication.user = payload.data;

					console.log(payload.data);
					console.log(Authentication.user);

					// Redirect to campaigns.list
					$state.go('campaigns.list');

				}, function(error) {
					$scope.error = error.data.message;
				});
			}
		};

		$scope.submitSignIn = function(form, credentials) {
			$scope.$broadcast('show-errors-check-validity');

			if (form.$valid) {
				$http.post('api/auth/signin', credentials)
				.then(function(payload) {
					// If successful we assign the newly registered user to the global user model
					Authentication.user = payload.data;

					// Redirect to campaigns.list
					$state.go('campaigns.list');

				}, function(error) {
					$scope.error = error.data.message;
				});
			}
		};
	}
]);