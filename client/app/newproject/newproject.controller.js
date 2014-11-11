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
          projectgoals: $scope.projectData.projectgoals
        };
        //submit --> http request --> route
        // route hits the server --> forward onto function (calls mongoose)

        // var data = $scope.projectData;
        // Project.save(data, function(data){
        //   console.log('data is ', data);
        // },
        // function(err){
        //   if (err) return handleError(err);
        //   console.log('data is ', data);
        // })

        // see client/components/auth/auth.service.js --> createUser ==> return User.save
        // need to create a new project in mongo using Project.save??? rather than post?
        // maybe even create a factory??? see how signup.controller.js works w/ auth.service.js

        $http.post('/api/projects/', currentProject)
        .success(function(data){
          console.log('data to be saved to mongo...', data);

          // project.save(function(err, data){
          //   var project = new Project(data);
          //   if (err){
          //     console.log('errror is ', err);
          //     res.json(err);
          //   } else {
          //     console.log('success saving to mongo!');
          //     res.json(data);
          //   }
          // })
        })
        .error(function(err){
          console.log('error', err);
        })
        .then(function(){
          // probably want to redirect to that project page
          $location.path('/');
        })
      }
    }

  }]);
