'use strict';

angular.module('campaigns').controller('CampaignsListCtrl', ['Campaigns','$state', '$stateParams', '$scope',
	function(Campaigns, $state, $stateParams, $scope) {

		// Handle screen resizing
		function setViewHeight() {
			var windowHeight = $(window).height();
			$('.campaigns-container').height(windowHeight - 95);				
		}

		setViewHeight();
		$(window).resize(function() {
			setViewHeight();
		});

		// Database query
		$scope.campaigns = Campaigns.query();

		$scope.selectCampaign = function(index) {
			var campaignTitle = $scope.campaigns[index].title.replace(/\s+/g, '-');
			$state.go('campaigns.show', { campaignTitle: campaignTitle });
		};
	}
]);
