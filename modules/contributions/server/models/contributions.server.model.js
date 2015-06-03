'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Contribution Schema
 */
var ContributionSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: '{PATH} is required' 
	},
	campaign: {
		type: Schema.Types.ObjectId,
		ref: 'Campaign',
		required: '{PATH} is required'
	},
	offer: {
		type: Schema.Types.ObjectId,
		ref: 'Offer',
		required: '{PATH} is required'
	},
	fulfilled: {
		type: Boolean,
		default: false,
		required: '{PATH} is required'
	}
});

mongoose.model('Contribution', ContributionSchema);