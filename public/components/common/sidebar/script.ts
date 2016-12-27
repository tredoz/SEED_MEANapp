/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('SidebarController', ['$scope', '$system', '$location', '$rootScope', function ($scope, $system, $location, $rootScope) {
        $scope.loading = true;
        $scope.hidden = true;
        $rootScope.$on('$routeChangeSuccess', function (evt, cur, prev) {
            if ($location.path() === '/login') {
                $scope.hidden = true;
            } else {
                $scope.hidden = false;
            }

        });
        $scope.$on('load_config', function (e, response) {
            $scope.loading = false;
        });
    }])
    .directive('sidebar', [function () {
        return {
            restrict: 'AEC',
            templateUrl: 'components/common/sidebar/view.html',
            controller: 'SidebarController'
        };
    }]);