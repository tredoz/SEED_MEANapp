/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('DjangoAdminController', ['$scope','$location', function ($scope,$location) {

    }])
    .config(function ($routeProvider) {
        $routeProvider.when("/django-admin", {
                templateUrl: "components/views/django-admin/view.html",
                controller: 'DjangoAdminController'
            })
    });
