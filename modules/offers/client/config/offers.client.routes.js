'use strict';

angular.module('offers').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('offers', {
				abstract: true,
				url: '/offers',
				template: '<ui-view></ui-view>'
			})
			.state('offers.surveys', {
				url: '/surveys/1',
				templateUrl: 'modules/offers/views/offers.survey.client.view.html',
				controller: 'SurveyCtrl'
			});
	}
]);