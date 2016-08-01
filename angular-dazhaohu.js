(function(){
  'use strict';

  function angularDazhaohu(angular){
    return angular.module('angular-dazhaohu', [])
    .filter('dazhaohu', [function(){
      return function(value){

        console.log(value);
        if (value != undefined && value != null &&  typeof value.getHours === 'function')
        {
            if (value.getHours() >= 0 && value.getHours() < 3){
              return "半夜三更好";
            }
            if (value.getHours() >= 3 && value.getHours() < 6){
              return "清晨好";
            }
            if (value.getHours() >= 6 && value.getHours() < 9){
              return "早上好";
            }
            if (value.getHours() >= 9 && value.getHours() < 12){
              return "上午好";
            }
            if (value.getHours() >= 12 && value.getHours() < 14){
              return "中午好";
            }
            if (value.getHours() >= 14 && value.getHours() < 18){
              return "下午好";
            }
            if (value.getHours() >= 18 && value.getHours() < 24){
              return "晚上好";
            }
        }
        return '';
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
