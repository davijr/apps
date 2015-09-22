(function() {
	'use strict';

	angular.module('MyClass.welcome')
		.controller('WelcomeCtrl', WelcomeCtrl)
		.controller('WelcomeMenuCtrl', WelcomeMenuCtrl)
		.controller('WelcomeBarraCtrl', WelcomeBarraCtrl);

	/* @ngInject */
	function WelcomeCtrl($rootScope, Menu) {
		var vmWelcome = this;

		vmWelcome.menu = Menu;
		vmWelcome.search = $rootScope.search;
	}

	function WelcomeMenuCtrl($rootScope, Menu) {
		var vmWelcomeMenu = this;
		//vm.search = $rootScope.search;
		vmWelcomeMenu.menu = Menu;
		//vm.alert = Alert;
	}

	function WelcomeBarraCtrl($rootScope) {
		var vmWelcomeBarra = this;
		vmWelcomeBarra.search = $rootScope.search;
		//vmWelcomeMenu.alert = Alert;
	}
	
})();