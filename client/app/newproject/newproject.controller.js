  'use strict';

angular.module('fullstackApp')
  .controller('NewProjectCtrl', ['$scope', '$location', '$window', '$http', function ($scope, $location, $window, $http, Project) {
    $scope.projectData = {};
    $scope.errors = {};
    $scope.inputType = 'password';
    
    $scope.submitForm = function(){
      $scope.submitted = true;
      if ($scope.projectForm.$valid){

        var currentProject = {
          projectname: $scope.projectData.projectname,
          projectdeveloper: $scope.projectData.developer,
          projectdescription: $scope.projectData.projectdescription,
          projectduration: $scope.projectData.projectduration,
          projectgoals: $scope.projectData.projectgoals,
        };
        console.log("project_id is - ", currentProject.project_id);

        $http.post('/api/projects/', currentProject)
        .success(function(data){
          console.log('data to be saved to mongo...', data);
        })
        .error(function(err){
          console.log('error', err);
        })
        .then(function(){
          // want to redirect to that project page
          $location.path('/');
        })
      }
    }

  }]);
