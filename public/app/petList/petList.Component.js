'use strict';

angular.module('petListModule', []);

angular.module('petListModule')
    .component('petListModule', {
        templateUrl:'/app/petList/petList.html',
        controller: ($scope, $http)=> {
        	$http.get('/api/pets').then((response)=> {
            	$scope.pets = response.data;
            }); 
        		console.log("Modulo mascotas")
        }
});