app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{controller:'contatosController', controllerAs: 'vmContatos', templateUrl:'includes/components/contatos/views/index.html'}).
		when('/contatos',{controller:'contatosController', templateUrl:'includes/components/contatos/views/index.html'}).
		when('/notificacoes',{controller:'notificacoesController',templateUrl:'includes/components/notificacoes/views/index.html'}).
		when('/perfil',{controller:'perfilController',templateUrl:'includes/components/perfil/views/index.html'}).
		when('/turma',{controller:'turmaController',templateUrl:'includes/components/turma/views/index.html'}).
		otherwise({redirectTo:'/'});
}]);

/*
app.run(['$rootScope',function($rootScope){
	$rootScope.paginaAtual = "Contatos";
}]);
*/