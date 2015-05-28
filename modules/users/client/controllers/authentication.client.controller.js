'use strict';

angular.module('users').controller('AuthenticationCtrl', ['$http', '$state', '$rootScope', '$scope', 'Users', 
	function($http, $state, $rootScope, $scope, Users) {
		$scope.stateName = $state.current.name;
		$scope.registerPage = 1;

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.stateName = toState.name;
		});

		$scope.nextRegisterPage = function(form, credentials) {
			$scope.$broadcast('show-errors-check-validity');

			if (form.$valid) {
				$scope.registerPage = 2;
			}
		};

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
				$scope.registerPage = 1;
			}
		};

		$scope.submitSignIn = function(form, credentials) {
			$scope.$broadcast('show-errors-check-validity');

			if (form.$valid) {
				console.log('foobar');
			}
		};
	}
]);