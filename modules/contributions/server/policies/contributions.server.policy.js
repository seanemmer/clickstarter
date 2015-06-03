'use strict';

/**
 * Module dependencies.
 */
var acl = require('acl');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Contributions Permissions
 */
exports.invokeRolesPolicies = function() {
	acl.allow([{
		roles: ['admin'],
		allows: [{
			resources: '/api/contributions',
			permissions: '*'
		}, {
			resources: '/api/contributions/:contributionId',
			permissions: '*'
		}]
	}, {
		roles: ['user'],
		allows: [{
			resources: '/api/contributions',
			permissions: ['get', 'post']
		}, {
			resources: 'api/contributions/:contributionId',
			permissions: ['get']
		}]
	}, {
		roles: ['guest'],
		allows: [{
			resources: '/api/contributions',
			permissions: ['get']
		}, {
			resources: '/api/contributions/:contributionId',
			permissions: ['get']
		}]
	}]);
};

/**
 * Check if Contributions Policy allows
 */
exports.isAllowed = function(req, res, next) {
	var roles = (req.user) ? req.user.roles: ['guest'];

	// If a Contribution is being processed and the current user created it then allow any manipulation
	if (req.contribution && req.user && req.contribution.user.id === req.user.id) {
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
