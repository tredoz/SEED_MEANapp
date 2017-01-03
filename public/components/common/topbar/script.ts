/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('TopbarController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        $scope.hidden = false;
    }])
    .directive('topBar', [function () {
        return {
            restrict: 'AEC',
            templateUrl: 'components/common/topbar/view.html',
            controller: 'TopbarController'
        };
    }]);
