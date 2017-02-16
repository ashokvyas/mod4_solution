(function(){
	'use strict';

	angular.module('MenuApp')
	 .config(RoutesConfig);

	 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	 function RoutesConfig($stateProvider, $urlRouterProvider){
       
      $urlRouterProvider.otherwise('/');

	  $stateProvider
	   .state('home', {
	   	 url: '/',
	   	 templateUrl: 'templates/home.html'
	   })
	   .state('categories', {
	   	 url: '/categories',
	   	 templateUrl: 'templates/categories.html',
	   	 controller: 'categoriesController as category',
	   	 resolve: {
	   	 	categories: ['MenuDataService', function(MenuDataService){
	   	 		return MenuDataService.getAllCategories();
	   	 	}]
	   	 }
	   })
	    .state('items', {
	    	url: '/items/{shortName}',
	    	templateUrl: 'templates/items.html',
	    	controller: 'itemsController as item',
	    	resolve: {
	    		items : ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
	    			return MenuDataService.getItemsForCategory($stateParams.shortName)
	    			      
	    		}]
	    	}
	    });

      


	 }

	
})();
