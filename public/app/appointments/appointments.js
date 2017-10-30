'use strict';

angular.module('appointmentsModule', []);

angular.module('appointmentsModule')
    .component('appointmentsModule', {
        templateUrl:'app/appointments/appointments.html',
        controller: function($scope, $http, $routeParams) {
        		console.log("inicializando", this);
        		
           
        		var currentDate = moment($routeParams.date,"YYYYMMDD");
        		$scope.currentDate = currentDate.format("YYYYMMDD");
        	
                
          $scope.$on("appointments:modificarCitaClick",(evento, datos)=>{
        	  
        	  $scope.$broadcast("appointments:modificarCita", datos);
        	  
        	  console.log("he recibido un evento con datos", datos);
          });
          
        		
        }
    });