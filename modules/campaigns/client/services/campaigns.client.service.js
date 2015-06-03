'use strict';

// Service used for communicating with the Campaigns REST endpoints
angular.module('campaigns').factory('Campaigns', ['$resource',
	function($resource) {
		return $resource('api/campaigns/:campaignTitle', {
			campaignTitle: '@campaignTitle'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);