'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend users controllers
 */
module.exports = _.extend(
	require('./users/users.authentication.server.controller'),
	require('./users/users.authorization.server.controller')
);