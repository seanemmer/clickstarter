'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Sponsor = mongoose.model('Sponsor'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
