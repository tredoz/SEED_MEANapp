/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('LoginController', ['$scope', function ($scope) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/login", {
                templateUrl: "components/views/login/view.html",
                controller: 'LoginController'
            })
    });
