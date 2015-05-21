'use strict';

module.exports = {
	app: {
		title: 'Clickstarter',
		description: 'platform for view-based fundraising',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'SDE',
	sessionCollection: 'sessions'
};