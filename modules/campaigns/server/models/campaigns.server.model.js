'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Threshold Schema
 */
var ThresholdSchema = new Schema({
	title: {
		type: String,
		required: '{PATH} is required'
	},
	count: {
		type: Number,
		min: 0,
		required: '{PATH} is required'
	}
});

/**
 * Campaign Schema
 */
var CampaignSchema = new Schema({
	title: {
		type: String,
		required: '{PATH} is required',
		unique: true
	},
	subtitle: {
		type: String,
		required: '{PATH} is required'
	},
	body: {
		type: String,
		required: '{PATH} is required'
	},	
	img: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now,
		required: '{PATH} is required'
	},
	expires: {
		type: Date
	},
	thresholds: [ThresholdSchema],
	offers: [{
		type: Schema.Types.ObjectId,
		ref: 'Offer'
	}]
});

mongoose.model('Campaign', CampaignSchema);