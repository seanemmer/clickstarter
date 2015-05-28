'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport');

module.exports = function(app) {
	// User routes
	var users = require('../controllers/users.server.controller');

	// Setting up the users authentication api
	app.route('/api/auth/register').post(users.register);
	app.route('/api/auth/signin').post(users.signin);
	app.route('api/auth/signout').get(users.signout);
};