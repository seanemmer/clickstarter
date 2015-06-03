'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Offer Schema
 */
var OfferSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: '{PATH} is required'
	},
	sponsor: {
		type: Schema.Types.ObjectId,
		ref: 'Sponsor',
		required: '{PATH} is required'
	},
	karma: {
		type: Number,
		min: 0,
		required: '{PATH} is required'
	}
});

mongoose.model('Offer', OfferSchema);