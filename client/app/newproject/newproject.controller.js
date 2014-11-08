'use strict';

angular.module('fullstackApp')
  .controller('NewProjectCtrl', ['$scope', function ($scope, Auth, $location, $window, $http) {
    $scope.projectData = {};
    $scope.errors = {};
    $scope.inputType = 'password';
    
    $scope.submitForm = function(){
      $scope.submitted = true;
      if ($scope.projectForm.$valid){
        Auth.createUser({
          username: $scope.projectData.username,
          password: $scope.projectData.password,
          projectname: $scope.projectData.projectname,
          projectdeveloper: $scope.projectData.developer,
          projectemail: $scope.projectData.email,
          projectdescription: $scope.projectData.projectdescription,
          projectduration: $scope.projectData.projectduration,
          projectgoals: $scope.projectData.projectgoals
        })
        .then(function(){
          // probably want to redirect to a page for further developer info
          $location.path('/');
        })
        .catch(function(err){
          err = err.data;
          $scope.errors = {};

          // update validity of form fields that match the mongoose errors? not sure what this does...
          angular.forEach(err.errors, function(error, field){
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    }

    $scope.loginOauth = function(provider){
      $window.location.href = '/auth/' + provider;
    };

  }]);
