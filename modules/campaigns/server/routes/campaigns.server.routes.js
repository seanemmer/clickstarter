'use strict';

/**
 * Module dependencies 
 */
var campaignsPolicy = require('../policies/campaigns.server.policy'),
	campaigns = require('../controllers/campaigns.server.controller');

module.exports = function(app) {
	// Campaigns collection routes
	app.route('/api/campaigns').all(campaignsPolicy.isAllowed)
		.get(campaigns.list);

	// Single campaign routes
	app.route('/api/campaigns/:campaignTitle').all(campaignsPolicy.isAllowed)
		.get(campaigns.read);

	// Finish by buiilding the campaign middleware
	app.param('campaignTitle', campaigns.campaignByTitle);
};