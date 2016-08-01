(function(){
  'use strict';
  var angular = require('angular');
  return angular.module('angular-dazhaohu', [])
  .filter('dazhaohu', [function(){
    return function(value){
      return 'hello';
    }
  }]);
})();
