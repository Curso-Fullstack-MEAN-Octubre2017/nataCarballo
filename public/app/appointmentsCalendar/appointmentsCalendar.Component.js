'use strict';


angular.module('appointmentsCalendarModule', []);

angular.module('appointmentsCalendarModule')
.component('appointmentsCalendarModule', {
    templateUrl:'app/appointmentsCalendar/appointmentsCalendar.html',
    controller: ($scope, $http)=> {
        console.log("inicializando controlador calendario...");
    }
})
.controller('appointmentCalendarController', ($http, $scope, $routeParams,$location, appointmentServicie)=> {
	
	console.log("inicializando controlador calendario...");
	moment.locale("es");

	 var currentMonth = moment().startOf('month'); //mes actual
	 
	 if($routeParams.month) {   					//si hay datos
     	currentMonth = moment($routeParams.month, "YYYYMMDD"); 
     }
	 
	

     $scope.currentMonth = currentMonth.toDate();	
     $scope.prevMonth = moment(currentMonth).add(-1,'M').toDate();	//al mes actual le resta uno
     $scope.nextMonth = moment(currentMonth).add(1,'M').toDate();	//añade uno al mes actual
	 
     $scope.cells = []	//se crea un array, cada celda será un día del mes.
	 
     var firstWeekDay = currentMonth.weekday(); //día en el q empieza el mes, lo guardamos en firstWeekDay
     for(var i = 0; i < firstWeekDay; i++) {	//tantas celdas como días tiene el mes.
     	$scope.cells.push({date: "---"});
     }
     
     appointmentServicie.getMonthAppointmentsByDate(currentMonth).then((response)=>{
     
     	$scope.appointmentsByDate = response;
         for (var m = moment(currentMonth); m.isBefore($scope.nextMonth); m.add(1, 'days')) {  // Pintamos las celdas que corresponden al mes y añadimos los datos a cada celda.
         	var currentDate = m.format('YYYYMMDD');
         	$scope.cells.push({
         		date: m.toDate(), 
         		appointments: $scope.appointmentsByDate[currentDate],
         		appointmentsCount: $scope.appointmentsByDate[currentDate] ? Object.keys($scope.appointmentsByDate[currentDate]).length : 0,
         	});
     	}
     });
     $scope.openDayAppointments = (date) => {
         $location.path("/appointments-day-list/" + moment(date).format('YYYYMMDD'))
     };
});
	

