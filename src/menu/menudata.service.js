(function(){
   'use strict';

   angular.module('data')
    .service("MenuDataService", MenuDataService);

   MenuDataService.$inject = ['$q', '$timeout','$http'];
    function MenuDataService($q, $timeout, $http){
      var service = this;
    
      var categories = [];
      var items = [];
    
      service.getAllCategories = function(){
      	return $http({
      		       method: 'GET',
      		       url: 'https://davids-restaurant.herokuapp.com/categories.json'
      	        }).then(function(result){
                   categories = result.data;

                   return categories;
                });

      	var deferred = $q.defer();

        $timeout(function(){

          deferred.resolve(categories);
        }, 500);

        return deferred.promise

      };
//debugger
      service.getItemsForCategory = function(shortName){
        return $http({
              method: 'GET',
              url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
              params: {
                category: shortName
              }
           }).then(function(result){
               items = result.data.menu_items;

               return items;
           });
     //console.log(result);
        var deferred = $q.defer();

        $timeout(function(){

          deferred.resolve(items);
        }, 500);

        return deferred.promise

      }



    }

})();