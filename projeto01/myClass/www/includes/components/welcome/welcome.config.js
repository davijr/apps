(function(angular) {
	'use strict';

	angular.module('MyClass.welcome').config(setRoutes);

	setRoutes.$inject = [ '$stateProvider','$urlRouterProvider','URL_MENU'];

	function setRoutes($stateProvider, $urlRouterProvider, URL_MENU) {
		$stateProvider.state('app.welcome', {
    		url: URL_MENU.WELCOME.url,
			views: {
				'main': {
					templateUrl : 'includes/components/welcome/views/index.html',
		    		controller : 'WelcomeCtrl',
					controllerAs : 'vmWelcome',
				}
			}
		});
	}

})(angular);