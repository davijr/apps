app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{controller:'contatosController', controllerAs: 'vmContatos', templateUrl:'includes/components/contatos/views/index.html'}).
		when('/contatos',{controller:'contatosController', templateUrl:'includes/components/contatos/views/index.html'}).
		when('/notificacoes',{controller:'notificacoesController',templateUrl:'includes/components/notificacoes/views/index.html'}).
		when('/perfil',{controller:'perfilController',templateUrl:'includes/components/perfil/views/index.html'}).
		when('/turma',{controller:'turmaController',templateUrl:'includes/components/turma/views/index.html'}).
		otherwise({redirectTo:'/'});
}]);


app.run(['$rootScope',function($rootScope){
	
	
	
	$rootScope.paginas = {
		"notificacoes": {
			"url": "#/notificacoes",
			"titulo": "Notificações",
			"ativo": "is-active"
		},
		"contatos": {
			"url": "#/contatos",
			"titulo": "Contatos",
			"ativo": "is-active"
		},
		"perfil": {
			"url": "#/perfil",
			"titulo": "Perfil",
			"ativo": "is-active"
		},
		"turma": {
			"url": "#/turma",
			"titulo": "Turma",
			"ativo": "is-active"
		}
	};
	
	$rootScope.limparPaginas = function() {
		$rootScope.paginas.contatos.ativo = "";
		$rootScope.paginas.notificacoes.ativo = "";
		$rootScope.paginas.perfil.ativo = "";
		$rootScope.paginas.turma.ativo = "";
	}	
	
}]);
