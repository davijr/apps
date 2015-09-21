var app = angular.module('MyClass', ['MyClass.contatos']);

var GLOBAL = {
	CONTATOSWS: {
		url: 'cache/contatos.json'
	}
};

/*
app.controller('myClassController', ['$scope', function($scope, $http) {
	
  //variáveis
  $scope.painel;
  
  // métodos
  $scope.selecionarPainel = function (painel) {
	  $scope.painel = painel;
  }
  
}]);*/


app.controller('ContatosController', ['$scope', '$http', function($scope, $http) {
	
	// utiliza variável global para o WebService do Módulo Contatos
	$http.get(GLOBAL.CONTATOSWS.url).success( function(data){
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


