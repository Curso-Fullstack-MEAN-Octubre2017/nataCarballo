'use strict';
 
 angular.module('customerDetailsModule', []);
 
 angular.module('customerDetailsModule')
     .component('customerDetailsModule', {
         templateUrl:'/app/customerDetails/customerDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando customerDetails");
         }
     })
    .controller('CustomerDetailsController', ($http, $scope, $routeParams)=> {
     	console.log("inicializando el controlador de detalles cliente...");

     	if(isNaN(+$routeParams.id)) { //comprobamos si viene con id, si es así cargamos los datos.
	    	$http.get("/api/customers/" + $routeParams.id).then((response)=> {
 	    		console.log("Response /api/customers/" + $routeParams.id, response);
 	    		$scope.customer = response.data;
 	    	});
	    	$http.get("/api/customers/" + $routeParams.id + "/pets").then((response)=> {
 	    		console.log("Response /api/customers/" + $routeParams.id + "/pets", response);
 	    		$scope.customerPets = response.data;
 	    	});	    	
     	} else { //sino inicializamos para guardar uno nuevo
     		$scope.customer = {};
     		$scope.customerPets = [];
     	}
 
     	//añadir nuevo cliente
     	
     	$scope.submit =()=> {
     		 		
     		console.log("añadir customer:", $scope.customer);
     		$http.post("/api/customers", $scope.customer).then((response)=>{
     			$scope.customer = response.data;
     			console.log("Nuevo cliente guardado");
     			history.back();
     			
     		});
     	}
 
     	$scope.update = ()=> {
     		console.log("Modificar customer:", $scope.customer);
     		$http.put("/api/customers/" + $scope.customer._id, $scope.customer).then((response)=>{
     			$scope.customer = response.data;
     			console.log("cambios guardados");
     			history.back();//volver atras en el historial
     		});
     	}
     	
     	
     	$scope.isNew = ()=> {
     		return $scope.customer === undefined || $scope.customer._id === undefined;
     	}
     });

     	
 