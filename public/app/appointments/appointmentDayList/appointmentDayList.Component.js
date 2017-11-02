

'use strict';

angular.module('appointmentsDayListModule', []);

angular.module('appointmentsDayListModule')
    .component('appointmentsDayListModule', {
        templateUrl:'app/appointments/appointmentDayList/appointmentDayList.html',
        bindings: {
        	day: '='
        },
        controller: function($scope, $http) {

            this.$onInit = function(){
            	var day = moment(this.day);
            	$scope.day = moment(day).format("YYYYMMDD");
            	loadAppointments(day.toDate());
            }
            
            $scope.$on("appointments:loadAppointment", function(event, data){
            	loadAppointment(data.day);
            });

    
            function loadAppointments(day){
        	   
        	   var fromDate = moment(day).format("YYYYMMDD");
        	   var toDate = moment(day).add(1, "days").format("YYYYMMDD");
        	   
        	   $scope.timetable = [];
        	   
            $http.get("/api/appointmentsByDate/" + fromDate + "/" + toDate).then((res)=>{
                $scope.app = res.data[fromDate] || {};

                var open = moment(day).hour(9);
                var close = moment(day).hour(21);

                
                for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
                    var hourKey = hour.format('HH:mm');
                    $scope.timetable.push({
                        hour: hourKey,
                        appointment: $scope.app[hourKey]
                    });
                }         

              }); 
           }
            $scope.editAppointment= function(id){
            	console.log(id);
            	$scope.$emit("appointments:showAppointmentClick", {id,id});
            	
            }
            
            $scope.addAppointment = function(datetime){
            	console.log("Vamos a añadir:" + datetime);
            	
            	$scope.$emit("appointments:newAppointmentClick", {datetime: datetime});
            }
            
        }
    });




