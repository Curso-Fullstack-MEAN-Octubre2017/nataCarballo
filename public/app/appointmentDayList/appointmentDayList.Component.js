'use strict';

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

				 for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {

					 var hourKey = hour.format('hh:mm');
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
});

