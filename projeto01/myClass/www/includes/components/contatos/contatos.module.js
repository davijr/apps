/**
 * Creates and initilizes the module 
 

(function(angular) {
    'use strict';
    
    angular.module('MyClass.contatos', []);
    
})(angular);*/


app.controller('ContatosController', ['$scope', '$http', 'ContatosService', function($scope, $http, ContatosService) {
	
	// utiliza variável global para o WebService do Módulo Contatos
	$http.get('cache/contatos.json').success( function(data){
        $scope.contatos = data;
    });
	
	/*$scope.init = init();
	$scope.listarContatos = listarContatos;
	
	function init() {
		listarContatos();
	}
	
	function listarContatos() {
		
	}*/

}]);