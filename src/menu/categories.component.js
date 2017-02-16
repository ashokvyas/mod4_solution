(function(){
   'use strict';

   angular.module("MenuApp")
    .component("categoryList", {
        templateUrl: 'templates/categorylist.html',
        bindings: {
        	categories: '<'
        }
    	

    })

})();