'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
 * Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
	return (this.provider !== 'local' || (password && password.length > 6));
};

/**
 * Validation function for Zip Codes
 */
var zipcodeValidate = function(zipcode) {
	var re = new RegExp('[0-9]{5}$');
	return re.test(zipcode);
};


/**
 * User Schema
 */
var UserSchema = new Schema ({
	firstName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your first name']
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your last name']
	},
	displayName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		unique: true,
		validate: [validateLocalStrategyProperty, 'Please fill in your email'],
		match: [/.+\@.+\..+/, 'Please provide a valid email address']
	},
	password: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'Password must be at least 6 characters']
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	dateOfBirth: {
		type: Date,
		required: 'Date of Birth is required',
		max: [Date.now, 'Date of Birth must be in the past']
	},
	gender: {
		type: String,
		required: 'Gender is required',
		enum: ['Male', 'Female', 'Other']
	},
	zipcode: {
		type: String,
		required: 'Zip Code is required',
		validate: [zipcodeValidate, 'Must provide a valid US Zip Code']
	}
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
 	if (this.password && this.password.length > 6) {
 		this.salt = crypto.randomBytes(16).toString('base64');
 		this.password = this.hashPassword(this.password);
 	}

 	next();
});

/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(password) {
	if (this.salt && password) {
		return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
	} else {
		return password;
	}
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);
