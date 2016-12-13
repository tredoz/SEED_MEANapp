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
            restrict: 'AEC',
            templateUrl: 'components/common/system/view.html',
            controller: 'SystemController'
        };
    }])
    .factory('$system', ['$rootScope', function ($rootScope) {
        return {
            check_user_login: function () {
                return $rootScope.$broadcast('login_check', {user_login: true});
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
