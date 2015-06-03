'use strict';

angular.module('core').directive('backImg', function() {
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background': 'url(' + value +')'
            });
        });
    };
});