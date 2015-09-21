(function() {
	'use strict';

	angular.module('MyClass.contatos', [])
		.controller('ContatosController', ['ContatosService', function (ContatosService) {



			$scope.contatos = ContatosService.obterContatos();



		}]);
		// {
		
	

	//}

})(angular);


/*
app.controller('ContatosController', ['$scope', 'ContatosService', function($scope, $http, ContatosService) {
	
  //variáveis
  $scope.painel;
  
  // métodos
  $scope.selecionarPainel = function (painel) {
	  $scope.painel = painel;
  }

  $scope.contatos = ContatosService.obterContatos();
  
}]);*/