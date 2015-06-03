'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Campaign = mongoose.model('Campaign'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current campaign
 */
exports.read = function(req, res) {
	res.json(req.campaign);
};

/**
 * List of Campaigns
 */
exports.list = function(req, res) {
	Campaign.find().populate('offers').exec(function(err, campaigns) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(campaigns);
		}
	});
};

/**
 * Campaign middleware
 */
exports.campaignByTitle = function(req, res, next, title) {
	Campaign.findOne({ title: title }, function(err, campaign) {
		if (err) return next(err);	
		if (!campaign) return next(new Error('Failed to load campaign ' + title));
		req.campaign = campaign;
		next();
	});
};
