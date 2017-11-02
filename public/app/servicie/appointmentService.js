angular.module('appointmentServicie', []).factory('appointmentServicie',($http, $q)=>{
	var service = {};
	
service._appointmentsMapByMonth = {};
	
	service.getMonthAppointmentsByDate = (month) => {
		
		 var d = $q.defer();
		
		 var formatCurrentMonth = moment(month).format("YYYYMMDD"); //mes en curso
		 var formatNextMonth = moment(month).add(1,'M').format("YYYYMMDD");	//mes siguiente
		
		 
		 if(service._appointmentsMapByMonth[formatCurrentMonth]) {
				d.resolve(service._appointmentsMapByMonth[formatCurrentMonth]);
				return d.promise;
			}//si ya tenemos el cache
		 
		 
		 
		 $http.get("/api/appointmentsByDate/" + formatCurrentMonth + "/" + formatNextMonth)
		 	.success((response)=>{
				service._appointmentsMapByMonth[formatCurrentMonth] = response;
				d.resolve(service._appointmentsMapByMonth[formatCurrentMonth]);
			})
			.error((response)=>{
				d.reject({status: response.status, message: 'TODO'});// en caso de q devuelva error.
				
			});
		
			return d.promise;
	}

	service.getAppointmentsForDate = (date) => {
		
		var d = $q.defer();

	    var fromDate = moment(date).format("YYYYMMDD");
	    var toDate = moment(date).add(1, "days").format("YYYYMMDD");
	  
        
	    $http.get("/api/appointmentsByDate/" + fromDate + "/" + toDate)
	    	.success((response) => {
				d.resolve(response);
	    	})
	    	.error((error) => {
	    		d.reject(error)	;
	    	});

	    return d.promise;	
	}
	service.clearCache= ()=>{
		service._appointmentsMapByMonth = {};
	}

	return service;
});