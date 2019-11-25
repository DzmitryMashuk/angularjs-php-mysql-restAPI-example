'use strict';

angular.module('myCrudApp').controller('watchController', ($scope) => {
    $scope.q = {
        a: 1,
        b: 2,
        c: this.a * this.b
    };
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = $scope.a * $scope.b;

    $scope.$watch('a', function(newValue, oldValue) {
        $scope.b = $scope.a * 2;
    });

    $scope.$watchGroup(['a', 'b'], function(newValue, oldValue) {
        $scope.c = $scope.a * $scope.b;
    });

    $scope.$watch('q', function(newValue, oldValue) {
        $scope.q.c = $scope.q.a * $scope.q.b;
    }, true);
});
