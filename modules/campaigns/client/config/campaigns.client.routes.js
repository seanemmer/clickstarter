'use strict';

angular.module('campaigns').config(['$stateProvider', 
	function($stateProvider) {
		// Campaign state routing
		$stateProvider
			.state('campaigns', {
				url: '/campaigns',
				templateUrl: 'modules/campaigns/views/campaigns.client.view.html',
				controller: 'CampaignsCtrl'
			});
	}
]);