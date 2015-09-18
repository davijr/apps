var app = angular.module('myClass', []);

app.controller('myClassController', ['$scope', function($scope, $http) {
	
  //variáveis
  $scope.painel;
  
  // métodos
  $scope.selecionarPainel = function (painel) {
	  $scope.painel = painel;
  }
  
}]);


app.controller('painelController', ['$scope', '$http', function($scope, $http) {
	
	
	$scope.testes = $http.get("cache/contatos.json")
    .success(function(response) {$scope.names = response.records;});
	
	$scope.init = init();
	$scope.listarContatos = listarContatos;
	
	function init() {
		listarContatos();
	}
	
	function listarContatos() {
		//if ($scope.painel == 'contatos') {
			$http({
			  method: 'JSONP',
			  url: 'cache/contatos.json'
			}).success(function(data, status, headers, config) {
			  console.log(config);
			  // data contains the response
			  $scope.contatos = data;
			  // status is the HTTP status
			  $scope.requisicao = status;
			  // headers is the header getter function
			  // config is the object that was used to create the HTTP request
			}).error(function(data, status, headers, config) {
				console.log(config);
				$scope.erro = "Não achamos nada.";
				console.log("Não achamos nada.");
			});
		//}
	}
}]);


