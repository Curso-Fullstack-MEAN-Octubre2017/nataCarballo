'use strict';

angular.module('appointmentsModule', []);

angular.module('appointmentsModule')
    .component('appointmentsModule', {
        templateUrl:'app/appointments/appointments.html',
        controller: function($scope, $http, $routeParams) {
        		console.log("inicializando", this);
        		moment.locale("es");
        		
        		
           
        		 var day = moment().startOf('day');
        		 if ($routeParams.date) {
                     day = moment($routeParams.date,"YYYYMMDD");
                 }
        	
        		 $scope.day = moment(day).format("YYYYMMDD");
        		 
          $scope.$on("appointments:showAppointmentClick",function(event, data){
        	  
        	  $scope.$broadcast("appointments:showAppointment", data);
        	  
 
          });
          
          
          $scope.$on("appointments:newAppointmentClick", function(event, data){
          	console.log("He recibido los siguientes datos: ", data);
          	
          	$scope.$broadcast("appointments:showAppointment", data);
          });
          
          
          $scope.$on("appointments:insertAppointmentClick", function(event, data){
          	console.log("Recibida la petición para añadir estos datos: ", data);
          	
          	$scope.$broadcast("appointments:loadAppointment", {day: data.dateStart});
          });
          
          $scope.$on("appointments:updateAppointmentClick", function(event, data){
          	console.log("Recibida la petición para editar estos datos: ", data);
          	
          	$scope.$broadcast("appointments:loadAppointment", {day: data.dateStart});
          });
        	
          
          $scope.$on("appointments:deleteAppointmentClick", function(event, data){
          	console.log("Recibida la petición para eliminar estos datos: ", data);
          	
          	$scope.$broadcast("appointments:loadAppointment", {day: data.dateStart});
          });
        }
    });