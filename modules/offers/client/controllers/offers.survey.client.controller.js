'use strict';

angular.module('offers').controller('SurveyCtrl', ['$scope',
	function($scope) {
		$scope.surveyAnswers = [];
		$scope.surveyStep = -1;
		$scope.surveyError = false;

		$scope.surveyStart = function() {
			$scope.surveyStep++;
		};

		$scope.surveyNext = function() {
			if ($scope.surveyAnswers[$scope.surveyStep] || $scope.surveyAnswers[$scope.surveyStep] === 0) {
				$scope.surveyError = false;
				$scope.surveyStep++;
			} else {
				$scope.surveyError = true;
			}
		};

		$scope.surveyPrev = function() {
			$scope.surveyError = false;
			$scope.surveyStep--;
		};

		$scope.surveyQuestions = [
			{
				'prompt': 'What Princeton Class cohort do you fall under?',
				'answers': [
					'2005-2019',
					'1995-2004',
					'1985-1994',
					'1975-1984',
					'Prior to 1975'
				]
			},
			{
				'prompt': 'What was your area of concentration?',
				'answers': [
					'Humanities',
					'Social Sciences',
					'Hard Sciences',
					'Engineering',
					'Other'
				]
			},
			{
				'prompt': 'Which residential college were you a member of?',
				'answers': [
					'Butler',
					'Forbes',
					'Mathey',
					'Rockefeller',
					'Wilson',
					'Whitman',
					'None'
				]
			}
		];


	}
]);