'use strict';
 
angular.module('myCrudApp').factory('DepartmentService', ['$http', '$q', function($http, $q){
 
    let REST_SERVICE_URI = 'http://localhost/test/';
 
    let factory = {
        findAllDepartments: findAllDepartments,
        createDepartment: createDepartment,
        updateDepartment: updateDepartment,
        deleteDepartment: deleteDepartment
    };
 
    return factory;
 
    function findAllDepartments() {
        let deferred = $q.defer();
        $http.get(REST_SERVICE_URI+'department/read.php')
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching departments');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function createDepartment(department) {
        let deferred = $q.defer();
        $http.post(REST_SERVICE_URI+'department/create.php', department)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating department');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
 
    function updateDepartment(department) {
        let deferred = $q.defer();
        $http.put(REST_SERVICE_URI+'department/update.php', department)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating department');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function deleteDepartment(id) {
        let deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+'department/delete.php?id='+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting department');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
}]);
