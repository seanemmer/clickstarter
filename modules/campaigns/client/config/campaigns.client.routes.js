'use strict';

angular.module('campaigns').config(['$stateProvider', 
	function($stateProvider) {
		// Campaign state routing
		$stateProvider
			// Abstract parent state includes feed
			.state('campaigns', {
				abstract: true,
				url: '/campaigns',
				templateUrl: 'modules/campaigns/views/campaigns.client.view.html'
			})
			.state('campaigns.list', {
				url: '',
				templateUrl: 'modules/campaigns/views/partials/campaigns.list.client.view.html',
				controller: 'CampaignsListCtrl'
			})
			.state('campaigns.show', {
				url: '/:campaignTitle',
				templateUrl: 'modules/campaigns/views/partials/campaigns.show.client.view.html',
				controller: 'CampaignsShowCtrl'
			})
			.state('campaigns.offers', {
				url: '/:campaignTitle/offers',
				templateUrl: 'modules/campaigns/views/partials/campaigns.offers.client.view.html',
			});
	}
]);