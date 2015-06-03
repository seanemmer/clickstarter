'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Sponsor Schema
 */
var SponsorSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name cannot be blank'
	}
});

mongoose.model('Sponsor', SponsorSchema);