'use strict';

 angular.module('PetDetailsModule', []);
 
 angular.module('PetDetailsModule')
     .component('PetDetailsModule', {
         templateUrl:'/app/petDetails/petDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalle mascotas.");
         }
     })
    .controller('PetDetailsController',($scope, $http, $location, $routeParams)=>{
    	console.log("inicializando el PetDetailsController...");
    	
    	if(isNaN(+$routeParams.id)) {
	    	$http.get("/api/pets/" + $routeParams.id).then((response)=>{
	    		console.log("Response /api/pets/" + $routeParams.id, response);
	    		$scope.pet = response.data;
	    	});    	
    	} else {
    		$scope.pet = {};
    		// hacer if para localizar el id del cliente
    	}

    	$scope.submit = function() {
    		console.log("Añadir mascota:", $scope.pet);
    		$http.post("/api/pets", $scope.pet).then((response)=>{
    			$scope.pet = response.data;
    		});
    	}

    	$scope.edit = ()=>{
    		console.log("Update pet:", $scope.pet);
    		$http.put("/api/pets/" + $scope.pet._id, $scope.pet).then((response)=>{
    			$scope.pet = response.data;
    		});
    	}
    	
});