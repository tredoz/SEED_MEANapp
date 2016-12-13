/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('PublicProfilesController', ['$scope','$location', function ($scope,$location) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/public-profiles", {
                templateUrl: "components/views/public-profiles/view.html",
                controller: 'PublicProfilesController'
            })
    });
