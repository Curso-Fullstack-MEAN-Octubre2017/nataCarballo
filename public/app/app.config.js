'use strict';

angular.module('petStore')
    .config((
        $locationProvider,
        $routeProvider
    )=>{
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            
            .when("/",{template: "<customer-list-module></customer-list-module>"})
            
            .when("/customers/",{template: "<customer-details-module></customer-details-module>"})
            
            .when("/customers/:id",{template: "<customer-details-module></customer-details-module>"})
            
            .when("/customers/:customerId/pets/add",{template: "<pet-details-module></pet-details-module>" })
            
            .when("/customers/:customerId/pets/:id",{ template: "<pet-details-module></pet-details-module>" })
  
            .when("/pets/:id",{template: "<pet-details-module></pet-details-module>" })
            
           // .when("/appointments/",{template:"<appointment-list-module></appointment-list-module>"})
            
            .when("/appointments/:id",{template:"<appointment-details-module></appointment-details-module>"})
            
            .when("/appointments-day-list/:date",{ template: "<appointment-day-list-module></appointment-day-list-module>" })
            
             .when("/appointmentsCalendar/",{template:"<appointments-calendar-module></appointments-calendar-module>"})
            
            .when("/appointmentsCalendar/:month",{template:"<appointments-calendar-module></appointments-calendar-module>"})
           
           
            .otherwise({
                  template: "Other"
            });
    });


