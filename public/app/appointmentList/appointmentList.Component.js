'use strict';

angular.module('appointmentListModule', []);

angular.module('appointmentListModule')
    .component('appointmentListModule', {
        templateUrl:'/app/appointmentList/appointmentList.html',
        controller: ($scope, $http)=> {
            console.log("Incializando lista clientes...")
        }
    })
    .controller('AppointmentListController', ($http, $scope,$routeParams)=> {
    	console.log("inicializando el controlador de citas...");
    	//listar las citas
    	$http.get("/api/appointments").then((response)=> {
    		console.log("Response /api/appointments", response);
    		$scope.appointmentList = response.data;
    	});
    });
