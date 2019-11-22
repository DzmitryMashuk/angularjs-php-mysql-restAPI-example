'use strict';

let app = angular.module('myCrudApp', []);

app.controller('firstController', ($scope) => {
    $scope.title = 'Hello AngularJS';
});
