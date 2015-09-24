app.controller('contatosController', function ($scope, $resource, $rootScope) {
	var vmContatos = this;

	ContatosResource = $resource('cache/contatos.json');

	// lista de métodos
	//vmContatos.init = init();
	//vmContatos.listarContatos();

	/*function init() {
		console.log('o init carregou automaticamente só por causa dos parenteses!!!');
		listarContatos();
	}*/

	// listar contatos armazenados no dispositivo
	$scope.listarContatos = function() {
		ContatosResource.query( function(data) {
			$scope.listaContatos = data;
		});
	}

	$scope.listarContatos();
	
	// Definir qual a tab atual
	$rootScope.limparPaginas();
	$rootScope.paginaAtual.contatos.ativo = "is-active";


});