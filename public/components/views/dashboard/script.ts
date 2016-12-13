/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('DashboardController', ['$scope','$location', function ($scope,$location) {
        // $location.url('/login');
    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: "components/views/dashboard/view.html",
                controller: 'DashboardController'
            })
    });
