/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('SubscribedProfilesController', ['$scope','$location', function ($scope,$location) {
        // $location.url('/login');
    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/subscribed-profiles", {
                templateUrl: "components/views/subscribed-profiles/view.html",
                controller: 'SubscribedProfilesController'
            })
    });
