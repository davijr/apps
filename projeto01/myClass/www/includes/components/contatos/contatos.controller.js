app.controller('contatosController', function ($scope, $resource) {
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
		console.log('aquiiii 1');
		ContatosResource.query( function(data) {
			vmContatos.listaContatos = data;
		});
	}

	$scope.listarContatos();


});