'use strict';

angular.module('fullstackApp')
  .controller('NewProjectCtrl', ['$scope', function ($scope, $http) {
    $scope.projectData = {};
    $scope.inputType = 'password';
    $scope.submitForm = function(){
        if ($scope.newProjectForm.$valid){
          alert("validation is working");
        }
    }
  }]);
