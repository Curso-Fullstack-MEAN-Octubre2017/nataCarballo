'use strict';

angular.module('customerListModule', []);

angular.module('customerListModule')
    .component('customerListModule', {
        templateUrl:'/app/customerList/customerList.html',
        controller: ($scope, $http)=> {
            console.log("Incializando lista clientes...")
        }
    })
    .controller('CustomerListController', ($http, $scope)=> {
    	console.log("inicializando el controlador de clientes...");
    	
    	$http.get("/api/").then((response)=> {
    		console.log("Response /api/", response);
    		$scope.customerList = response.data;
    	});
    });
