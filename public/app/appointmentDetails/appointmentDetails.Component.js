angular.module('appointmentDetailsModule', []);
 
 angular.module('appointmentDetailsModule')
     .component('appointmentDetailsModule', {
         templateUrl:'app/appointmentDetails/appointmentDetails.html',
         controller: ($scope, $http)=> {
             console.log("Incializando detalles cita...");
         }
     })
     .controller('AppointmentDetailsController', ($http, $scope, $routeParams)=> {
     	console.log("inicializando el AppointmentDetailsController...");
     	
     });