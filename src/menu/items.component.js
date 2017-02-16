(function(){
   'use strict';

   angular.module("MenuApp")
    .component("itemList", {
        templateUrl: 'templates/itemlist.html',
        bindings: {
        	items: '<'
        }
    	

    })

})();