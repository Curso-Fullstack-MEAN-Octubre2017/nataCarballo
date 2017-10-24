'use strict';

angular.module('appointmentsDayListModule', []);
angular.module('appointmentsDayListModule')
	.component('appointmentsDayListModule', {
		templateUrl: 'app/appointmentDayList/appointmentDayList.html',
		controller('appointmentDayListController', ($http, $scope, $routeParams, appointmentServicie)=> {
		moment.locale("es");
		
		
		
		var currentDate = moment($routeParams.date, "YYYYMMDD"); 
        $scope.currentDate = currentDate.format("YYYYMMDD");

        $scope.hourSlots = [];
		
        
        appointmentServicie.getAppointmentsForDate().then ((response)=>{
        	
        	
        	
        });
		
       
		
		
		
		
		
		});
	});