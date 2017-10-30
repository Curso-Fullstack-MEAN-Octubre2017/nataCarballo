angular.module('appointmentDetailsModule', []);
 
 angular.module('appointmentDetailsModule')
     .component('appointmentDetailsModule', {
         templateUrl:'app/appointments/appointmentDetails/appointmentDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalles cita...");
         }
     })
     .controller('AppointmentDetailsController', ($http, $scope)=> {
     	console.log("inicializando el AppointmentDetailsController...");
     	
     	$scope.$on("appointments:modificarCita", (eventos, datos)=>{
     	
     	if(datos["id"]) {
     		
	    	$http.get("/api/appointments/" + datos["id"]).then((response)=> {
 	    		console.log("Response /api/appointments/" + datos["id"] , response);
 	    		$scope.appointment = response.data;
 	    	});
	    	
     	} 
     		
     		$scope.appointment = {};
     		
     		$scope.appointment.dateStart= moment(datos["date"], 'YYYYMMDDhh:mm').toDate();
     		$scope.appointment.dateEnd= moment(datos["date"],'YYYYMMDDhh:mm' ).add(30,'m').toDate();

     	
     	
     	
     		$http.get("api/pets").then((response)=>{
     		   		  $scope.pets = response.data; 
     		}); 
     	});

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
     	$scope.isNew = ()=> {
     				return $scope.appointment === undefined || $scope.appointment._id === undefined;
     		        }
     	
     	$scope.cancel = ()=> {
    		history.back();
    	};
     	
     });
     