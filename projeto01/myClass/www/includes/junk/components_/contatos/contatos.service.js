/*(function(angular) {
	'use strict';

	angular.module('MyClass.contatos', [])
		.service('ContatosService', [ '$resource', '$q', function ContatosService($resource, $q) {

		var contatosResource = $resource('', {}, {

			'obterContatos' : {
				method : 'GET',
				url : 'cache/contatos.json',
				isArray : true
			}

		});

		return {
			obterContatos : obterContatos
		};

		function obterContatos() {
			var defer = $q.defer();
			contatosResource.obterContatos( function(retorno) {
				defer.resolve(retorno);
			}, function(error) {
				defer.reject(error);
			});
			return defer.promise;
		}

		
	}]);


})(angular);*/

app.service('ContatosService', [ '$resource', '$q', function($resource, $q) {

		var contatosResource = $resource('', {}, {

			'obterContatos' : {
				method : 'GET',
				url : 'cache/contatos.json',
				isArray : true
			}

		});

		return {
			obterContatos : obterContatos
		};

		function obterContatos() {
			var defer = $q.defer();
			contatosResource.obterContatos( function(retorno) {
				defer.resolve(retorno);
			}, function(error) {
				defer.reject(error);
			});
			return defer.promise;
		}

		
	}]);