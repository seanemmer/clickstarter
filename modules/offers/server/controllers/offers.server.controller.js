'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Offer = mongoose.model('Offer'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
