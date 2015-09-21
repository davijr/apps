/*
angular.module('myClass', ['fsCordova'])
.service('CordovaService', ['$document', '$q',
  function($document, $q) {

    var d = $q.defer(),
        resolved = false;

    var self = this;
    this.ready = d.promise;

    document.addEventListener('deviceready', function() {
      resolved = true;
      alert("Aquiiii 3");
      d.resolve(window.cordova);
    });

    // Check to make sure we didn't miss the 
    // event (just in case)
    setTimeout(function() {
      if (!resolved) {
        alert("aquii 2");
      if (window.cordova) d.resolve(window.cordova);
      } else {
        alert("aquii 1");
      }
    }, 3000);
}]);
*/
/*
(function() {
  'use strict';*/
  
  
  // This is the basic entry point of the application
  var app = angular.module(
      'MyClass', [
          'MyClass.contatos'
          ]);
  
  /* SET CONSTANTS */
  //appModule.constant('APP_NAME', 'GSRE-AvLiq');
  //appModule.constant('APP_VERSION', '0.0.1');
  //appModule.constant('BaseController', BaseController);
  
  /* SET SERVICES */
  //appModule.service('Alert', AlertService);
  //appModule.service('ShareData', ServiceShareData);

  /*function AlertService() {
    
    /*variavel responsável por armazenar o timeOut/
    var time = null;
    
    return {
      erro: erro,
      sucesso: sucesso,
      info: info,
    };
    
    function startTimeout(){      
      time = setTimeout(function() {$('#generalMessage').fadeOut();},5000);
    }
    
    function stopTimeOut(){     
      if(time!=null){
        $('#generalMessage').fadeOut();
        clearTimeout(time);
        time=null;
      }     
    }
    
    function erro(text) {
      stopTimeOut(time);
      $('#generalMessage').fadeIn();
      $('#generalMessage').html('<div class="alert alert-danger alert-avliq" role="alert" style="text-align: left;border: none;">'
          + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
          +'<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Erro:</span> '
          +text +  '</div>');
      startTimeout();
    }
    function sucesso(text) {  
      stopTimeOut(time);
      $('#generalMessage').fadeIn();
      $('#generalMessage').html('<div class="alert alert-success alert-avliq" role="alert" style="text-align: left;border: none;">'
          +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
          +'<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Sucesso:</span> '
          + text + '</div>');     
      startTimeout();
    }

    function info(text) {
      stopTimeOut(time);
      $('#generalMessage').fadeIn();
      $('#generalMessage').html('<div class="alert alert-warning alert-avliq" role="alert" style="text-align: left;border: none;">'
          +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
          +'<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Info:</span> '
          + text + '</div>');
      startTimeout();
    }
  }*/

  /**
   * Quando clica em Cancelar volta para o estado anterior
   * 
   */
  /*function BaseController($state, Alert, ModelFactory) {

    this.listarTodos = function() {
      return this.models = ModelFactory.query();
    };

    this.carregarInserir = function() {
      this.model = new ModelFactory();
      this.modo = 'Adicionando';
      this.isInsert = true;
      this.isUpdate = false;
      this.isSearch = false;
      this.isDelete = false;
      return this.model;
    };

    this.carregarDeletar = function(model) {
      this.model = angular.copy(model);
      this.model.index = this.models.indexOf(model);
      this.modo = 'Deletando';
      this.isInsert = false;
      this.isUpdate = false;
      this.isSearch = false;
      this.isDelete = true;
      return this.model;
    };

    this.carregarFiltrar = function() {
      this.model = new ModelFactory();
      this.modo = 'Buscando';
      this.isInsert = false;
      this.isUpdate = false;
      this.isSearch = true;
      this.isDelete = false;
    };

    // v0.2 - Chamado a partir de tabelas de ligação (substitui this.editar)
    this.carregarEditar = function(model) {
      this.model = angular.copy(model);
      this.model.index = this.models.indexOf(model);
      this.modo = 'Editando';
      this.isInsert = false;
      this.isUpdate = true;
      this.isSearch = false;
      this.isDelete = false;
      return this.model;
    };

    // v0.1 - ini
    this.editar = function(model) {
      this.selected = angular.copy(model);
      this.selected.index = this.models.indexOf(model);
    };

    // v0.1 - fim

    this.filtrar = function(model) {

      if (model == null || model == 'undefined') {
        model = new ModelFactory();
      }

      this.models = ModelFactory.filtrar(model, function(result) {
        Alert.sucesso(result.length + " Registro(s) Encontrado(s)");
      });
      return this.models;
    }

    this.alterar = function(model) {
      var that = this;
      that.model.$save({}, function() {
        that.models[model.index] = model;
        Alert.sucesso("Registro atualizado com sucesso.");
      });
    }

    this.salvar = function(model) {
      this.model.$save({}, function() {
        Alert.sucesso("Registro Cadastrado com sucesso.");
      });
    }

    this.excluir = function(model) {
      var that = this;
      that.model.$delete({}, function() {
        that.models.splice(model.index, 1);
        Alert.sucesso("Registro excluído com sucesso.");
      });
    }

    this.buscar = function(model) {
      var that = this;
      that.models = ModelFactory.query({}, function() {
        Alert.sucesso("Pesquisa concluída com sucesso.");
      });
    }

    this.search = function() {
      if (this.pesquisa !== undefined) {
        this.associados = ModelFactory.associados({
          id : this.pesquisa.id
        });
        this.desassociados = ModelFactory.desassociados({
          id : this.pesquisa.id
        });
      }
      else{
        this.associados = null;
        this.desassociados = null;
      }
    }

    this.operacao = function(acao) {
      
      // verifica se há item selecionado
      if(this.associarItens == null && this.desassociarItens == null){        
        Alert.info("Nenhum item selecionado.");
        return;
      }
      
      // Variável para evitar multiplos processamento, bloqueando os botões ao enviar requisição      
      this.isProcessing = true;
      
      // Variável para evitar gravar sem alteração
      this.isAlterado = true;
      
      if (acao == 'desassociar') {
        for (var i in this.desassociarItens) {
          var item = this.desassociarItens[i];
          var index = this.associados.indexOf(item);
          if(index >= 0){
            this.associados.splice(index, 1);
            this.desassociados.push(item);
          }
        }
      } else if (acao == 'associar') {
        for ( var i in this.associarItens) {
          var item = this.associarItens[i];           
          var index = this.desassociados.indexOf(item);
          if(index >= 0){
            this.desassociados.splice(index, 1);
            this.associados.push(angular.copy(item));
          }
        }
        
      }
      this.associados.sort(peloCodigo);
      this.desassociados.sort(peloCodigo);
      this.isProcessing = false;
      limpaSelectLista(this);
    }   
    
    this.gravar = function(){ 
      if (this.pesquisa !== undefined && this.isAlterado){
        this.isAlterado = false;
        this.isProcessing = true;     
        var lista = angular.copy(this.associados);      
        post(lista,this);
      }
    }
    
    function post (lista,vm){             
        var json = JSON.stringify(lista);
        var conteudo = '{ '+vm.param+' :'+json+'}';
        vm.http.post('service/'+vm.path+'/associar/' + vm.pesquisa.id,conteudo)
        .success(function() { 
          vm.isProcessing = false;
          Alert.sucesso("A associação gravada com sucesso.");
        })
        .error( function() {  
          vm.isProcessing = false;
          Alert.erro("Erro ao processar requisição.");
        });
    } 
    
    function limpaSelectLista(vm) {
      vm.associarItens = null;
      vm.desassociarItens = null;
    }
    
    // Ordena pela codigo do array
    function peloCodigo(a, b) {   
      if (a.codigo !== undefined){
          if (a.codigo < b.codigo)
              return -1;
          if (a.codigo > b.codigo)
             return 1;
      } else {
        return 0;
      }
    }
    
    this.limpaSelectAssociar = function() {
      this.associarItens = null;
    }
    
    this.limpaSelectDesassociar = function() {
      this.desassociarItens = null;
    }       
  }*/
  
  /**
   * Método para armazenar o objeto na session storage e adquirir em outra página
   */
  /*function ServiceShareData($window) {
    
    /*Adiciona o Objeto a SessionStorage recebe chave ,objeto e apagar/
      var addData = function(key,objNovo) {
          /**Bloco Comentado pois mantinha o objeto anterior*/         
        /*var mydata = $window.sessionStorage.getItem(key);
          if (mydata) {
              mydata = JSON.parse(mydata);
          } else {
              mydata = [];
          }/
        /**Fim/
                   
          $window.sessionStorage.setItem(key, JSON.stringify(objNovo));
      };

      /*Obtém o objeto da SessionStorage recebe chave e apagar em boolean/
      var getData = function(key,apagar){
          var objAntigo = $window.sessionStorage.getItem(key);                       
          if (objAntigo && objAntigo!=undefined) {
            objAntigo = JSON.parse(objAntigo);
          }
          
          if(apagar){
            /*Limpa o Objeto da sessão após o get/
            $window.sessionStorage.setItem(key, []);
        }
          
          return objAntigo || [];
      };

      return {
          addData: addData,
          getData: getData
      };
  }*/
/*
})(); */