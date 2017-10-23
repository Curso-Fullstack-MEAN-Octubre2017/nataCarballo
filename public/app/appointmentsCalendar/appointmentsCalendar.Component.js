'use strict';


angular.module('appointmentsCalendarModule', []);

angular.module('appointmentsCalendarModule')
.component('appointmentsCalendarModule', {
    templateUrl:'app/appointmentsCalendar/appointmentsCalendar.html',
    controller: ($scope, $http)=> {
        console.log("inicializando controlador calendario...");
    }
})
.controller('appointmentCalendarController', ($http, $scope, $routeParams)=> {
	
	console.log("inicializando controlador calendario...");
	moment.locale("es");
	
	 var currentMonth = moment().startOf('month');// selecciona el primer día del mes
	 if($routeParams.month) {
     	currentMonth = moment($routeParams.month, "YYYYMM"); 
     }

     $scope.currentMonth = currentMonth.toDate();
     $scope.prevMonth = moment(currentMonth).add(-1,'M').toDate();
     $scope.nextMonth = moment(currentMonth).add(1,'M').toDate();
	 
     $scope.cells = []
	 
     var firstWeekDay = currentMonth.weekday();
     for(var i = 0; i < firstWeekDay; i++) {
     	$scope.cells.push({date: "---"});
     }
     
   
     $http.get("/api/appointmentsByDate/20171001/20171101").then((response)=>{
     
     	$scope.appointmentsByDate = response.data;
         for (var m = moment(currentMonth); m.isBefore($scope.nextMonth); m.add(1, 'days')) {
         	var currentDate = m.format('YYYY-MM-DD');
         	$scope.cells.push({
         		date: currentDate, 
         		appointments: $scope.appointmentsByDate[currentDate],
         		appointmentsCount: $scope.appointmentsByDate[currentDate] ? Object.keys($scope.appointmentsByDate[currentDate]).length : 0,
         	});
     	}
     });
     
     
     
	});
	








/*

           

            

      (currentMonth).then((response)=>{
            	$scope.appointmentsByDate = response;
                for (var m = moment(currentMonth); m.isBefore($scope.nextMonth); m.add(1, 'days')) {
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
        }
    });*/
























