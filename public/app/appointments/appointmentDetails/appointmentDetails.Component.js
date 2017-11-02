angular.module('appointmentDetailsModule', []);
 
 angular.module('appointmentDetailsModule')
     .component('appointmentDetailsModule', {
         templateUrl:'app/appointments/appointmentDetails/appointmentDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalles cita...");
         }
     })
     .controller('AppointmentDetailsController', ($http, $scope, appointmentServicie)=> {
     	console.log("inicializando el AppointmentDetailsController...");
     	
     	
     	$http.get("api/pets").then((response)=>{
	   		  $scope.pets = response.data; 
     	});
     
     	$scope.$on("appointments:showAppointment", function(event, data){
     	
     		if(data.id){
     		
	    	$http.get("api/appointments/" + data.id).then(function(response) {
 	    		console.log("Response api/appointments/" + data.id , response);
 	    		$scope.appointment = response.data;
 	    	});
     		}else{
     		
     		$scope.appointment = {};
     		
     		$scope.appointment.dateStart= moment(data.datetime, 'YYYYMMDD-HH:mm').toDate();
     		$scope.appointment.dateEnd= moment($scope.appointment.dateStart).add(30,'m').toDate();

     		}	 
     	});

     	$scope.submit = function(){
     		console.log("añadir cita:", $scope.appointment);
     		$http.post("api/appointments", $scope.appointment).then((response)=>{
     			$scope.appointment = response.data;
     			console.log("cita guardada");
     			appointmentServicie.clearCache();
     			history.back();
     		});
     		$scope.$emit("appointment:insertAppointmentClick", $scope.appointment);
     	}
   

 
     	$scope.update = ()=> {
     		console.log("Modificar cita:", $scope.appointment);
     		$http.put("api/appointments/" + $scope.appointment._id, $scope.appointment).then((response)=>{
     			$scope.appointment = response.data;
     			console.log("cambios guardados");
     			appointmentServicie.clearCache();
     			history.back();
     		});
     		$scope.$emit("appointment:updateAppointmentClick", $scope.appointment);
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
    	
     	$scope.isNew = ()=> {
     				return $scope.appointment === undefined || $scope.appointment._id === undefined;
     		        }
     	
     	$scope.cancel = ()=> {    history.back();    };
     	
     });
     