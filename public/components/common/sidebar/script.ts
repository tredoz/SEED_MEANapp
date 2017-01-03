/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('SidebarController', ['$scope', '$system', '$location', '$rootScope', function ($scope, $system, $location, $rootScope) {
        $scope.loading = true;
        $scope.hidden = false;
        $scope.$on('load_config', function (e, response) {
            $scope.loading = false;
        });
    }])
    .directive('sidebar', [function () {
        return {
            templateUrl: 'components/common/sidebar/view.html',
            controller: 'SidebarController'
        };
    }]);
