angular.module('appointmentDetailsModule', []);
 
 angular.module('appointmentDetailsModule')
     .component('appointmentDetailsModule', {
         templateUrl:'app/appointmentDetails/appointmentDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalles cita...");
         }
     })
     .controller('AppointmentDetailsController', ($http, $scope, $routeParams)=> {
     	console.log("inicializando el AppointmentDetailsController...");
     	
     	if(isNaN(+$routeParams.id)) {
     		
	    	$http.get("/api/appointments/" + $routeParams.id).then((response)=> {
 	    		console.log("Response /api/appointments/" + $routeParams.id, response);
 	    		$scope.appointment = response.data;
 	    	});
	    	
     	} else $scope.appointment = {};
     	
 
     	$scope.submit =()=> {
     		console.log("añadir cita:", $scope.appointment);
     		$http.post("/api/appointments", $scope.appointment).then((response)=>{
     			$scope.appointment = response.data;
     		});
     	}
 
     	$scope.update = ()=> {
     		console.log("Modificar cita:", $scope.appointment);
     		$http.put("/api/appointments/" + $scope.appointment._id, $scope.appointment).then((response)=>{
     			$scope.appointment = response.data;
     			console.log("cambios guardados");
     			history.back();//volver atras en el historial
     		});
     	}
     	
     	
     	$scope.isNew = ()=> {
     		return $scope.appointment === undefined || $scope.appointment._id === undefined;
     	}
     });