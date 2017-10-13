'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Pet Store Demo (Hello World) <a ng-href='sample'>Sample Module</a>"
            })
            .when("/customer",{
                template: "<sample-module></sample-module>"
            })
            .otherwise({
                template: "Other"
            });
    });