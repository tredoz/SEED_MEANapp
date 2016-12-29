/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('TopbarController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        $scope.hidden = true;
        $rootScope.$on('$routeChangeSuccess', function (evt, cur, prev) {
            $scope.hidden = $location.path() === '/login';
        });
    }])
    .directive('topBar', [function () {
        return {
            restrict: 'AEC',
            templateUrl: 'components/common/topbar/view.html',
            controller: 'TopbarController'
        };
    }]);