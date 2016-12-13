/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('AllProfilesController', ['$scope','$location', function ($scope,$location) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/all-profiles", {
                templateUrl: "components/views/all-profiles/view.html",
                controller: 'AllProfilesController'
            })
    });
