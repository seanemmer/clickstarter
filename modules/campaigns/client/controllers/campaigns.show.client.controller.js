'use strict';

angular.module('campaigns').controller('CampaignsShowCtrl', ['Campaigns','$state', '$stateParams', '$scope',
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

		// Variable declarations
		var campaignTitle = $stateParams.campaignTitle.replace(/-/g, ' ');
		$scope.campaign = Campaigns.get({ campaignTitle: campaignTitle });
	}
]);
