'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Contribution = mongoose.model('Contribution'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));