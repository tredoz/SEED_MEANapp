/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('NewProfileController', ['$scope','$location', function ($scope,$location) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/new-profile", {
                templateUrl: "components/views/new-profile/view.html",
                controller: 'NewProfileController'
            })
    });
