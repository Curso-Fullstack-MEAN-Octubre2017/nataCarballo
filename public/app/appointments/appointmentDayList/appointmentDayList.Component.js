

'use strict';

angular.module('appointmentsDayListModule', []);

angular.module('appointmentsDayListModule')
    .component('appointmentsDayListModule', {
        templateUrl:'app/appointments/appointmentDayList/appointmentDayList.html',
        bindings: {
        	currentDate: "="
        },
        controller: function($scope, $http) {

            moment.locale("es");
            
            this.$onInit = function(){
            	var currentDate = moment(this.currentDate, "YYYYMMDD");
            	loadAppointments(currentDate);
            }
            
           function loadAppointments(currentDate){
        	   
        	   var fromDate = moment(currentDate).format("YYYYMMDD");
        	   var toDate = moment(currentDate).add(1, "days").format("YYYYMMDD");
        	   
            $http.get("/api/appointmentsByDate/" + fromDate + "/" + toDate).then((res)=>{
                $scope.app = res.data[fromDate] || {};

                var open = moment(currentDate).hour(9);
                var close = moment(currentDate).hour(21);
                
                $scope.timetable = [];
                
                for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
                    var hourKey = hour.format('HH:mm');
                    $scope.timetable.push({
                        hour: hourKey,
                        appointment: $scope.app[hourKey]
                    });
                }         

              }); 
           }
            $scope.modificarCita= function(idAppointment){
            	console.log(idAppointment);
            	$scope.$emit("appointments:modificarCitaClick", {id:idAppointment, date:this.currentDate});
            	
            }
            
            $scope.crearCita= ()=>{
            	alert("creada");
            }
            
        }
    });




/*'use strict';

angular.module('appointmentsDayListModule', []);
angular.module('appointmentsDayListModule')
	.component('appointmentsDayListModule', {
		templateUrl: 'app/appointmentDayList/appointmentDayList.html',
		controller: ($http, $scope, $routeParams, appointmentServicie) => {
		moment.locale("es");
		
		
		
			var day = moment().startOf('day');
            if ($routeParams.date) {
                day = moment($routeParams.date,"YYYYMMDD");
            }
       
            $scope.day = moment(day).format("YYYYMMDD");

	    
	    $scope.timetable = [];            
		
		appointmentServicie.getAppointmentsForDate(day).then((response)=> {
			$scope.appointmentsByDate = response;
			

				  var open = moment(day).hour(9);
				  var close = moment(day).hour(21);

				 for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'H')) {

					 var hourKey = hour.format('HH:MM');
						$scope.timetable.push({
						 hour: hourKey,
						 appointment: $scope.appointmentsByDate[hourKey],
					 });
				 }
			}
		)

        $scope.openAppointment = (id) => {
            alert(id);  
        };
	}
});*/