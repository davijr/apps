angular.module('myClass', ['fsCordova'])
.controller('AppController', 
  function($scope, CordovaService) {
    CordovaService.ready.then(function() {
      // Cordova is ready
      console.log("Cordova is ready");
    });
});