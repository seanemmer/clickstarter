'use strict';

angular.module('campaigns').controller('CampaignsCtrl', ['$timeout',
	function($timeout) {

		$timeout(function() {
			$('.campaigns-list-card').css(
				'background', 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4), rgba(0,0,0,0))'
			);
		},50);

	}
]);
