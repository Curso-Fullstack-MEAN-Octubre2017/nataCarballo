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
            
            .when("/appointments/",{template:"<appointment-list-module></appointment-list-module>"})
            
            .when("/appointments/:id",{template:"<appointment-details-module></appointment-details-module>"})
            
           // .when("/appointments-day-list/:date",{ template: "<appointments-day-list-module></appointments-day-list-module>" })
            
             .when("/appointments-calendar/",{template:"<appointments-calendar-module></appointments-calendar-module>"})
            
            .when("/appointments-calendar/:month",{template:"<appointments-calendar-module></appointments-calendar-module>"})
           
            .when("/appointments/add/:datetime",{ template: "<appointment-details-module></appointment-details-module>" })
            
            .when("/appointments-day-list/:date",{ template: "<appointments-module></appointments-module>" })
            
            .otherwise({
                  template: "Other"
            });
    });


