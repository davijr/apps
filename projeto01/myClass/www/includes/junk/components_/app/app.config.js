(function() {
	'use strict';
	
	angular
		.module('MyClass')
		.config(setRoutes);
	
	setRoutes.$inject = ['$stateProvider', '$urlRouterProvider']; // PRA QUÊ??
	
	function setRoutes($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.when('', '/'); // PRA QUÊ??
		
		$stateProvider
				.state('app', {
					abstract : true,
					views : {
						'' : {
							templateUrl : 'includes/views/index.html',
							controller : "AppCtrl"
						},
						'topo@app' : {
							templateUrl : 'includes/views/topo.html',
							controller: 'TopoControllerCtrl',
							controllerAs: 'vmTopo'
						},
						'menu@app' : {
							templateUrl : 'includes/views/menu.html',
							controller : 'MenuCtrl',
							//controller : 'WelcomeMenuCtrl',
							controllerAs : 'vmMenu',
						}
					}
				})
				.state('app.none',{
					abstract : true,
					views : {
						'@' : {
							template : '<div class=\'content\' data-ui-view=\'main\' data-autoscroll=\'false\'></div>',
							controller : 'AppCtrl'
						}
					}
				});
		
			/*$httpProvider.interceptors.push(['$rootScope', '$q', '$injector', function($rootScope, $q, $injector) {
	           return {
	        	   'request': function(request) {
	        		   $rootScope.$broadcast('loading-started');
	          		   return request;
	               },
	               'response': function(response) {
		               $rootScope.$broadcast('loading-complete');
	                   return response;
	               },
	               'responseError': function(responseError) {
		               	$rootScope.$broadcast('loading-complete');	
			        	var alertService  = $injector.get('Alert');
			        	if (typeof responseError.data.error === 'undefined') {
			        		alertService.erro('Ocorreu um erro.');
			        	} else {
			        		alertService.erro(responseError.data.error);
			        	}
		               	return $q.reject(responseError);
	               },
	               'requestError': function(requestError) {
	            	   return $q.reject(requestError);
	               }
	           };
	        }]);*/
	}
	
})();