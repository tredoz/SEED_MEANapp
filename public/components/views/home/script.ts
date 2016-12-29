/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('HomeController', ['$scope','$location', function ($scope,$location) {
        // $location.url('/login');
    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: "components/views/home/view.html",
                controller: 'HomeController'
            })
    });
