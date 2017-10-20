'use strict';

//moment.calendar(); //permite situarnos en la fecha y hora actual.

angular.module('appointmentCalendarModule', []);

angular.module('appointmentCalendarModule')
.component('appointmentCalendarModule', {
    templateUrl:'app/appointmentsCalendar/appointmentsCalendar.html',
    controller: ($scope, $http)=> {
        console.log("appointmentCalendarModule...");
    }
})
.controller('appointmentCalendarController', ($http, $scope, $routeParams)=> {
	
	console.log("appointmentCalendarController...");
	moment.locale("es");
	
	var Month = moment().startOf('month');// se guarda en month el primer día de ese mes
		
	if($routeParams.month) {
		
	}
	});
	
});

































