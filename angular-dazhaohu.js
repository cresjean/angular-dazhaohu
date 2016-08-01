(function(){
  'use strict';

  function angularDazhaohu(angular){
    return angular.module('angular-dazhaohu', [])
    .filter('dazhaohu', [function(){
      return function(value){
        console.log(value);
        return 'hello';
      }
    }]);
  }
  if (typeof define === 'function' && define.amd) {
		define(['angular'], angularDazhaohu);
	} else if (typeof module !== 'undefined' && module && module.exports) {
		angularDazhaohu(require('angular'));
		module.exports = 'angularDazhaohu';
	} else {
		angularDazhaohu(angular);
	}


})();
