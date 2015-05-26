'use strict';

angular.module('campaigns').config(['$stateProvider', 
	function($stateProvider) {
		// Campaign state routing
		$stateProvider
			.state('campaigns', {
				abstract: true,
				url: '/campaigns',
				templateUrl: 'modules/campaigns/views/campaigns.client.view.html',
				controller: 'CampaignsCtrl'
			})
			.state('campaigns.list', {
				url: '',
				templateUrl: 'modules/campaigns/views/partials/campaigns.list.client.view.html',
				controller: 'CampaignsCtrl'
			})
			.state('campaigns.show', {
				url: '/1',
				templateUrl: 'modules/campaigns/views/partials/campaigns.show.client.view.html',
				controller: 'CampaignsCtrl'
			})
			.state('campaigns.offers', {
				url: '/1/offers',
				templateUrl: 'modules/campaigns/views/partials/campaigns.offers.client.view.html',
				controller: 'CampaignsCtrl'
			});
	}
]);