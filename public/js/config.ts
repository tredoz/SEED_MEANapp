/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module('app', ['ngRoute','ngAnimate'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled:true,
            requireBase: true
    });
        $routeProvider.otherwise({redirectTo: '/'});


    }]);