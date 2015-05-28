'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport');

module.exports = function(app) {
	// User routes
	var users = require('../controllers/users.server.controller');

	// Binding the user middleware
	app.param('userId', users.userByID);
};