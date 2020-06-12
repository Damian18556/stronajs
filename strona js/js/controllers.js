var portfolioApp = angular.module('portfolioApp',[]);

angular.module("app", ["ds.clock"]).controller("AppCtrl", function ($scope) {
        $scope.format = 'dd-MMM-yyyy hh:mm:ss a';
});