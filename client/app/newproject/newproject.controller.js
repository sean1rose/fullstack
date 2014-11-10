'use strict';

angular.module('fullstackApp')
  .controller('NewProjectCtrl', ['$scope', 'Auth', '$location', '$window', '$http', function ($scope, Auth, $location, $window, $http) {
    $scope.projectData = {};
    $scope.errors = {};
    $scope.inputType = 'password';
    
    $scope.submitForm = function(){
      $scope.submitted = true;
      if ($scope.projectForm.$valid){

        // see client/components/auth/auth.service.js --> createUser ==> return User.save
        // need to create a new project in mongo using Project.save??? rather than post?
        // maybe even create a factory??? see how signup.controller.js works w/ auth.service.js
        $http.post('/api/projects', {
          // user should be logged in already
          //need to store this to projects database
          projectname: $scope.projectData.projectname,
          projectdeveloper: $scope.projectData.developer,
          projectdescription: $scope.projectData.projectdescription,
          projectduration: $scope.projectData.projectduration,
          projectgoals: $scope.projectData.projectgoals
          // projectuser: need to id the project's user
        })
        .success(function(data){
          console.log('data is ', data);
        })
        .error(function(err){
          console.log('error', err);
        })
        .then(function(){
          $location.path('/');
        })


        // Auth.createUser({
        //   username: $scope.projectData.username,
        //   password: $scope.projectData.password,
        // })
        // .then(function(){
        //   // probably want to redirect to a page for further developer info
        //   $location.path('/');
        // })
        // .catch(function(err){
        //   err = err.data;
        //   $scope.errors = {};

        //   // update validity of form fields that match the mongoose errors? not sure what this does...
        //   angular.forEach(err.errors, function(error, field){
        //     form[field].$setValidity('mongoose', false);
        //     $scope.errors[field] = error.message;
        //   });
        // });
      }
    }

    $scope.loginOauth = function(provider){
      $window.location.href = '/auth/' + provider;
    };

  }]);
