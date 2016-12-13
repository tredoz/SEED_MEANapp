/// <reference path="../../../../typings/angularjs/angular.d.ts" />
angular.module('app')
    .controller('FooterController', ['$scope', '$system', function ($scope, $system) {
        $system.check_user_login();

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
