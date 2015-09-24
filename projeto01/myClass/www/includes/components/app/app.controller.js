app.controller('appController', function ($rootScope, $scope) {
	var vmApp = this;
	
	$rootScope.isactive = "is-active";

	$scope.selecionarPagina = function(pagina) {
		$scope.paginaAtual = pagina;
	}
	
	$scope.selecionarPagina();

});