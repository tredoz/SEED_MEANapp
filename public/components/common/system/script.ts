/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('SystemController', ['$scope', function ($scope) {

        $scope.errors = [];
        $scope.notifications = [];
        $scope.warnings = [];
        $scope.successs = [];

        $scope.$on('warn_notification', function (e, message) {
            $scope.warnings.push(message);
        });
        $scope.$on('success_notification', function (e, message) {
            $scope.successs.push(message);
        });
        $scope.$on('error_notification', function (e, message) {
            $scope.errors.push(message);
        });
        $scope.$on('notification', function (e, message) {
            $scope.notifications.push(message);
        });


        $scope.removeNotification = function (i, type) {
            $scope[type].splice(i, 1);
        };
    }])
    .directive('system', [function () {
        return {
            templateUrl: 'components/common/system/view.html',
            controller: 'SystemController'
        };
    }])
    .factory('$system', ['$rootScope','$http', function ($rootScope,$http) {
        return {
            load_config: function () {
                return $http({
                    method: 'GET',
                    url: '/api/system/config/get'
                }).then(function successCallback(response) {
                    $rootScope.$broadcast('load_config',response);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });



            },
            warn: function (message) {
                return $rootScope.$broadcast('warn_notification', message);
            },
            success: function (message) {
                return $rootScope.$broadcast('success_notification', message);
            },
            error: function (message) {
                return $rootScope.$broadcast('error_notification', message);
            },
            notify: function (message) {
                return $rootScope.$broadcast('notification', message);
            }
        };
    }]);
