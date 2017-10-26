angular.module('appointmentDetailsModule', []);
 
 angular.module('appointmentDetailsModule')
     .component('appointmentDetailsModule', {
         templateUrl:'app/appointmentDetails/appointmentDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalles cita...");
         }
     })
     .controller('AppointmentDetailsController', ($http, $scope, $routeParams, $location)=> {
     	console.log("inicializando el AppointmentDetailsController...");
     	
     	if($routeParams.id) {
     		
	    	$http.get("/api/appointments/" + $routeParams.id).then((response)=> {
 	    		console.log("Response /api/appointments/" + $routeParams.id, response);
 	    		$scope.appointment = response.data;
 	    	});
	    	
     	} else{
     		
     		$scope.appointment = {};
     	//	var principio=moment($routeParams.datetime, 'YYYYMMDDhh:mm').toDate();
     	//	var fin= moment($routeParams.datetime,'YYYYMMDDhh:mm' ).add(30,'m').toDate();
     	//	var principioCita= moment(principio).format('YYYYMMDDhh:mm');
     	//	var finalCita= moment(fin).format('YYYYMMDDhh:mm');
     		
     		$scope.appointment.dateStart= moment($routeParams.datetime, 'YYYYMMDDhh:mm').toDate();
     		$scope.appointment.dateEnd= moment($routeParams.datetime,'YYYYMMDDhh:mm' ).add(30,'m').toDate();

     	}

     	$scope.submit =()=> {
     		console.log("añadir cita:", $scope.appointment);
     		$http.post("/api/appointments", $scope.appointment).then((response)=>{
     			$scope.appointment = response.data;
     			console.log("cita guardada");
     			var date = moment($scope.appointment.dateStart).format("YYYYMMDD")
     			$location.path("/appointments-day-list/" + date);
     		});
     	}
   
     	$scope.remove = ()=> {
    		if(confirm("¿seguro?")) {
    			var date = moment($scope.appointment.dateStart).format("YYYYMMDD");
    			$http.delete("/api/appointments",$scope.appointment).then(()=> {
						$location.path("/appointments-day-list/" + date);
					}, ()=> {
						alert("no se ha borradof!!");
					});
				}
    	};
 
     	$scope.update = ()=> {
     		console.log("Modificar cita:", $scope.appointment);
     		$http.put("/api/appointments/" + $scope.appointment._id, $scope.appointment).then((response)=>{
     			$scope.appointment = response;
     			console.log("cambios guardados");
     			history.back();//volver atras en el historial
     		});
     	}
     	
     	$scope.cancel = ()=> {
    		history.back();
    	};

     });