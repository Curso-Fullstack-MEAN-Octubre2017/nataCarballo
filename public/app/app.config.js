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
            /*.when("/pets/",{
                template: "<pets-list-module></pets-list-module>" 
            })*/
            .when("/pets/:id",{
                template: "<pet-details-module></pet-details-module>" 
            })
            .when("/customers/:customerId/pets/add",{
                template: "<pet-details-module></pet-details-module>" 
            })
            
            .otherwise({
                  template: "Other"
            });
    });


