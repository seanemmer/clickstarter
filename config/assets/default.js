'use strict';

module.exports = {
	client: {
		lib: {
			css: [

			],
			js: [

			],
			tests: [
			]
		},
		css: [
			'modules/*/client/css/*.css'
		],
		sass:[
			'modules/*/client/scss/*.scss'
		],
		js: [
			'modules/core/client/app/config.js',
			'modules/core/client/app/init.js',
			'modules/*/client/*.js',
			'modules/*/client/**/*.js'
		],
		views: [
			'modules/*/client/views/**/*.html'
		]
	},
	server: {
		allJS: ['gulpfile.js', 'server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
		models: 'modules/*/server/models/**/*.js',
		routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
		sockets: 'modules/*/server/sockets/**/*.js',
		config: 'modules/*/server/config/*.js',
		policies: 'modules/*/server/policies/*.js',
		views: 'modules/*/server/views/*.html'
	}
};