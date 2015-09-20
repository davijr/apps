/*
angular.module('myClass', ['fsCordova'])
.controller('myClassController', 
  function($scope, CordovaService) {
    CordovaService.ready.then(function() {
      // Cordova is ready
      alert("Aquiiii 4");
    });
});
*/

(function() {
	'use strict';
	
	angular
		.module('myClass')
		.controller('AppCtrl', AppCtrl);
	
	//AppCtrl.$inject = ['$rootScope', '$scope', '$state', 'Alert','URL_MENU'];
	
	function AppCtrl($rootScope, $scope, $state) {
		
		/*$rootScope.search = {};
		$rootScope.URL_MENU = URL_MENU;
		$scope.ir = function(path) {
			$state.go(path);
		};
		$scope.deletar = function(object, attr, isNULL) {
			if (isNULL) {
				if (object[attr] === null) {
					return delete object[attr];
				}
			} else {
				return delete object[attr];
			}
		};*/
		/**
		 * Quando clica em Cancelar volta para o estado anterior
		 * 
		 */
		$scope.voltar = function() {
			history.back();
		};
		
		/**
		 * Resolver problema de splice no IE8 
		 * http://learn.eastros.com/2012/05/29/fixing-splice-in-older-versions-of-internet-explorer-8-and-olders/
		 * */
		// check if it is IE and it's version is 8 or older
	    /*if (document.documentMode && document.documentMode < 9) {
	    	
	    	// save original function of splice
	    	var originalSplice = Array.prototype.splice;
	    	
	    	// provide a new implementation
	    	Array.prototype.splice = function() {
	    		
	    		// since we can't modify 'arguments' array, 
	    		// let's create a new one and copy all elements of 'arguments' into it
	    	    var arr = [],
	    	        i = 0,
	    	        max = arguments.length;
	    	    
	    	    for (; i < max; i++){
	    	        arr.push(arguments[i]);
	    	    }
	    	    
	    	    // if this function had only one argument
	    	    // compute 'deleteCount' and push it into arr
	    	    if (arr.length==1) {
	    	        arr.push(this.length - arr[0]);
	    	    }
	    	    
	    	    // invoke original splice() with our new arguments array
	    	    return originalSplice.apply(this, arr);
	    	};
	    }*/
		/**
		 * No IE 8 navegador definido na 
		 * especificação da migração em
		 * 24/07/2015 o indexOf não funciona
		 * em array e foi encontrada essa solução em 
		 * http://stackoverflow.com/questions/3629183/why-doesnt-indexof-work-on-an-array-ie8
		 * Com a descrição abaixo e o link de doc dela é 
		 * http://ecma262-5.com/ELS5_HTML.htm#Section_15.4.4.14
		 *Versions of IE before IE9 don't 
		 *have an .indexOf() function for Array,
		 *to define the exact spec version, 
		 *run this before trying to use it 
		 **/		
		/*if (!Array.prototype.indexOf)
		{
		  Array.prototype.indexOf = function(elt /*, from)
		  {
		    var len = this.length >>> 0;
		    var from = Number(arguments[1]) || 0;
		    from = (from < 0)
		         ? Math.ceil(from)
		         : Math.floor(from);
		    if (from < 0)
		      from += len;
		    for (; from < len; from++)
		    {
		      if (from in this && this[from] === elt)
		        return from;
		    }
		    return -1;
		  };
		}
		
		if (typeof Array.prototype.forEach != 'function') {
		    Array.prototype.forEach = function(callback){
		      for (var i = 0; i < this.length; i++){
		        callback.apply(this, [this[i], i, this]);
		      }
		    };
		}*/
		
		/**
		 * No IE 8 navegador definido
		 * na especificação o reduce 
		 * não funciona em array na 
		 * etapa da migração em  08/09/2015
		 * foi observado isso e foi 
		 * encontrada essa solução em 
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Browser_compatibility
		 * */
		// Production steps of ECMA-262, Edition 5, 15.4.4.21
		// Reference: http://es5.github.io/#x15.4.4.21
		/*if (!Array.prototype.reduce) {
		  Array.prototype.reduce = function(callback /*, initialValue) {
		    'use strict';
		    if (this == null) {
		      throw new TypeError('Array.prototype.reduce called on null or undefined');
		    }
		    if (typeof callback !== 'function') {
		      throw new TypeError(callback + ' is not a function');
		    }
		    var t = Object(this), len = t.length >>> 0, k = 0, value;
		    if (arguments.length == 2) {
		      value = arguments[1];
		    } else {
		      while (k < len && !(k in t)) {
		        k++; 
		      }
		      if (k >= len) {
		        throw new TypeError('Reduce of empty array with no initial value');
		      }
		      value = t[k++];
		    }
		    for (; k < len; k++) {
		      if (k in t) {
		        value = callback(value, t[k], k, t);
		      }
		    }
		    return value;
		  };
		}*/
		
		/**
		 * No IE 8 navegador definido
		 * na especificação o map 
		 * não funciona em array na 
		 * etapa da migração em  08/09/2015
		 * foi observado isso e foi 
		 * encontrada essa solução em 
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		 * */
		// Production steps of ECMA-262, Edition 5, 15.4.4.19
		// Reference: http://es5.github.io/#x15.4.4.19
		/*if (!Array.prototype.map) {

		  Array.prototype.map = function(callback, thisArg) {

		    var T, A, k;

		    if (this == null) {
		      throw new TypeError(' this is null or not defined');
		    }

		    // 1. Let O be the result of calling ToObject passing the |this| 
		    //    value as the argument.
		    var O = Object(this);

		    // 2. Let lenValue be the result of calling the Get internal 
		    //    method of O with the argument "length".
		    // 3. Let len be ToUint32(lenValue).
		    var len = O.length >>> 0;

		    // 4. If IsCallable(callback) is false, throw a TypeError exception.
		    // See: http://es5.github.com/#x9.11
		    if (typeof callback !== 'function') {
		      throw new TypeError(callback + ' is not a function');
		    }

		    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		    if (arguments.length > 1) {
		      T = thisArg;
		    }

		    // 6. Let A be a new array created as if by the expression new Array(len) 
		    //    where Array is the standard built-in constructor with that name and 
		    //    len is the value of len.
		    A = new Array(len);

		    // 7. Let k be 0
		    k = 0;

		    // 8. Repeat, while k < len
		    while (k < len) {

		      var kValue, mappedValue;

		      // a. Let Pk be ToString(k).
		      //   This is implicit for LHS operands of the in operator
		      // b. Let kPresent be the result of calling the HasProperty internal 
		      //    method of O with argument Pk.
		      //   This step can be combined with c
		      // c. If kPresent is true, then
		      if (k in O) {

		        // i. Let kValue be the result of calling the Get internal 
		        //    method of O with argument Pk.
		        kValue = O[k];

		        // ii. Let mappedValue be the result of calling the Call internal 
		        //     method of callback with T as the this value and argument 
		        //     list containing kValue, k, and O.
		        mappedValue = callback.call(T, kValue, k, O);

		        // iii. Call the DefineOwnProperty internal method of A with arguments
		        // Pk, Property Descriptor
		        // { Value: mappedValue,
		        //   Writable: true,
		        //   Enumerable: true,
		        //   Configurable: true },
		        // and false.

		        // In browsers that support Object.defineProperty, use the following:
		        // Object.defineProperty(A, k, {
		        //   value: mappedValue,
		        //   writable: true,
		        //   enumerable: true,
		        //   configurable: true
		        // });

		        // For best browser support, use the following:
		        A[k] = mappedValue;
		      }
		      // d. Increase k by 1.
		      k++;
		    }

		    // 9. return A
		    return A;
		  };
		}*/

	}
	
})();