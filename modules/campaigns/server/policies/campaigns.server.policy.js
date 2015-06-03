'use strict';

/**
 * Module dependencies.
 */
var acl = require('acl');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Campaigns Permissions
 */
exports.invokeRolesPolicies = function() {
	acl.allow([{
		roles: ['admin'],
		allows: [{
			resources: '/api/campaigns',
			permissions: '*'
		}, {
			resources: '/api/campaigns/:campaignId',
			permissions: '*'
		}]
	}, {
		roles: ['user'],
		allows: [{
			resources: '/api/campaigns',
			permissions: ['get', 'post']
		}, {
			resources: 'api/campaigns/:campaignTitle',
			permissions: ['get']
		}]
	}, {
		roles: ['guest'],
		allows: [{
			resources: '/api/campaigns',
			permissions: ['get']
		}, {
			resources: '/api/campaigns/:campaignTitle',
			permissions: ['get']
		}]
	}]);
};

/**
 * Check if Campaigns Policy allows
 */
exports.isAllowed = function(req, res, next) {
	var roles = (req.user) ? req.user.roles: ['guest'];

	// If a campaign is being processed and the current user created it then allow any manipulation
	if (req.campaign && req.user && req.campaign.user.id === req.user.id) {
		return next();
	}

	// Check for user roles
	acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function(err, isAllowed) {
		if (err) {
			// An authorization error occured
			return res.status(500).send('Unexpected authorization error');
		} else {
			if (isAllowed) {
				// Access granted! Invoke next middleware
				return next();
			} else {
				return res.status(403).json({
					message: 'User is not authorized'
				});
			}
		}
	});

};
