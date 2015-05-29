'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/bootswatch/paper/bootstrap.css',
				'public/lib/angular-layout/dist/angular-layout.css',
				'public/lib/fontawesome/css/font-awesome.css'
			
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-layout/dist/angular-layout.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/angular-bootstrap-show-errors/src/showErrors.js',
				'public/lib/lodash/lodash.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
