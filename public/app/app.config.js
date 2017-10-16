'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            
            .when("/",{
                template: "<customer-list-module></customer-list-module>"
            })
            .when("/customers/",{
                template: "<customer-details-module></customer-details-module>"
            })
            .when("/customers/:id",{
            	template: "<customer-details-module></customer-details-module>"
            })
            .otherwise({
                  template: "Other"
            });
    });


