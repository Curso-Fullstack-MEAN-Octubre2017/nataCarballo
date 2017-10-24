angular.module('appointmentServicie', []).factory('appointmentServicie',$http, $q)=>{
	var service = {};
	
	service._appointmentsMapByMonth = {};
	
	service.getMonthAppointmentsByDate = (month) => {
		return …;
		}
		
		
	service.getAppointmentsForDate=(date)=>{
		
	}
	
	return service;
});