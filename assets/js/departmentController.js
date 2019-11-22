'use strict';
 
angular.module('myCrudApp').controller('DepartmentController', ['$scope', 'DepartmentService', function($scope, DepartmentService) {
    let self = this;
    self.department = { id: null, name:'' };
    self.departments = [];
 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
 
    findAllDepartments();
 
    function findAllDepartments(){
        DepartmentService.findAllDepartments()
            .then(
            function(d) {
                self.departments = d;
            },
            function(errResponse){
                console.error('Error while fetching departments');
            }
        );
    }
 
    function createDepartment(department){
        DepartmentService.createDepartment(department)
            .then(
            findAllDepartments,
            function(errResponse){
                console.error('Error while creating department');
            }
        );
    }
 
    function updateDepartment(department){
        DepartmentService.updateDepartment(department)
            .then(
            findAllDepartments,
            function(errResponse){
                console.error('Error while updating department');
            }
        );
    }
 
    function deleteDepartment(id){
        DepartmentService.deleteDepartment(id)
            .then(
            findAllDepartments,
            function(errResponse){
                console.error('Error while deleting department');
            }
        );
    }
 
    function submit() {
        if(self.department.id===null){
            console.log('Saving New Department', self.department);
            createDepartment(self.department);
        }else{
            updateDepartment(self.department);
            console.log('Department updated with id ', self.department.id);
        }
        reset();
    }
 
    function edit(id){
        console.log('id to be edited', id);
        for(let i = 0; i < self.departments.length; i++){
            if(self.departments[i].id === id) {
                self.department = angular.copy(self.departments[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.department.id === id) {//clean form if the department to be deleted is shown there.
            reset();
        }
        deleteDepartment(id);
    }
 
 
    function reset(){
        self.department={id:null, name:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);
