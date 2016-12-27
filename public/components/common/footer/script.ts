/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('FooterController', ['$scope', '$system', function ($scope, $system) {
        $system.load_config();
        $scope.$on('load_config', function (e, response) {
            $scope.company_name = response.data.company_name;
            $scope.year = response.data.year;
            document.title = response.data.app_name;
            $scope.loading = false;
        });

    }])
    .directive('foot', [function () {
        return {
            restrict: 'AEC',
            templateUrl: 'components/common/footer/view.html',
            controller: 'FooterController'
        };
    }])
    .factory('$footer', ['$rootScope', function ($rootScope) {
        return false;
    }]);
;
