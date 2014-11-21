'use strict';

angular.module('fullstackApp')
  .controller('IndividualProjectController', function($scope, Projects, $stateParams){
    console.log('State Params', $stateParams);
    var id = $stateParams.id;
    Projects.getProject(id).then(function(data){
      console.log("INDIVIDUAL Project Data!!! - ", data);
      var currentProject = data.data;
      $scope.project = data.data;
      $scope.projectname = currentProject['projectname'];
      $scope.projectdeveloper = currentProject['projectdeveloper'];
      $scope.projectdescription = currentProject['projectdescription'];
      $scope.projectduration = currentProject['projectduration'];
      $scope.projectgoals = currentProject['projectgoals'];
      console.log('$scope.projectname', $scope.projectname);
    })
  })