(function() {
	'use strict';

	angular.module('MyClass.welcome').factory('Menu', MenuFactory);

	/* @ngInject */
	function MenuFactory() {
		return [ {
			nome: "Notificações",
			url: "app.notificacoes"
		}, {
			nome: "Contatos",
			url: "app.contatos"
		}, {
			nome: "Turma",
			url: "app.contatos"
		}, {
			nome: "Perfil",
			url: "app.perfil"
		}];
	}
})();