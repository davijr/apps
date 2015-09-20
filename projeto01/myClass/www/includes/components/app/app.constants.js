(function() {
	'use strict';

	angular.module('MyClass').constant('URL_MENU', {
		/**
		 *Cada objeto do menu possui uma URL e um nome.
		 *A url é o caminho para a tela proprimente dito que vai ser colocado após o contexto e '/#'.
		 *O nome é o nome da funcionalidade que deve ser cadastrada no controle de acesso. Para este atributo, ficou definido que seria o campo identificador
		 *para autorização de acesso às telas. 
		 *
		 *
		 *OBS: ORGANIZAR EM ORDEM ALFABÉTICA!
		 **/
		 var APP_NAME = 'MyClass';

		'NOTIFICACOES' : {url:'/notificacoes', nome:'Notificações - '+APP_NAME},
		'CONTATOS' : {url:'/contatos', nome:'Contatos - '+APP_NAME},
		'TURMA' :  {url:'/turma', nome:'Turma '+APP_NAME},
		'PERFIL' :  {url:'/perfil', nome:'Perfil '+APP_NAME},
		'WELCOME' : {url:'/contatos', nome:'Welcome - '+APP_NAME},
			
	});

})();