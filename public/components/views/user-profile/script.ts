/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('UserProfileController', ['$scope','$location', function ($scope,$location) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/user-profile", {
                templateUrl: "components/views/user-profile/view.html",
                controller: 'UserProfileController'
            })
    });
