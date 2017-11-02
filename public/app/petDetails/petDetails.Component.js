'use strict';

 angular.module('petDetailsModule', []);
 
 angular.module('petDetailsModule')
     .component('petDetailsModule', {
         templateUrl:'/app/petDetails/petDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalle mascotas.");
         }
     })
    .controller('PetDetailsController',($scope, $http, $location, $routeParams)=>{
    	console.log("inicializando el PetDetailsController...");
    	
    	//if(isNaN(+$routeParams.id)) {
    	if(typeof $routeParams.id !== 'undefined') {
	    	$http.get("/api/pets/" + $routeParams.id).then((response)=>{
	    		console.log("Response /api/pets/" + $routeParams.id, response);
	    		$scope.pet = response.data;
	    	});    	
    	} else {
    		console.log("ID cliente: " + $routeParams.customerId);
     		$scope.pet = {};
     		$scope.pet.customerId = $routeParams.customerId;
    	}

    	$scope.submit = ()=> {
    		console.log("Añadir mascota:", $scope.pet);
    		$http.post("/api/pets", $scope.pet).then((response)=>{
    			$scope.pet = response.data;
    			console.log("Nueva mascota guardada");
    			history.back();
    		});
    	}

    	$scope.update = ()=>{
    		console.log("modificar mascota:", $scope.pet);
    		$http.put("/api/pets/" + $scope.pet._id, $scope.pet).then((response)=>{
    			$scope.pet = response.data;
    			console.log("mascota modificada");
    			history.back();
    		});
    	}


    	$scope.remove = ()=>{
     		console.log("Borrar mascota:", $scope.pet);
     		$http.delete("/api/pets/" + $scope.pet._id,$scope.pet).then((response)=>{
     			$scope.pet=response.data;
     			console.log("mascota eliminada");
     			history.back();
     		});
    	}
    	$scope.isNew =()=> {
     		return $scope.pet === undefined || $scope.pet._id === undefined;
     	}
    	
});


     	
