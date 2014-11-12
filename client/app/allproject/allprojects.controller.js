'use strict';

angular.module('fullstackApp')
  .controller('AllProjectsController', function($scope, Projects, $stateParams){
    Projects.getProjects().then(function(data){
      console.log('project data structure IS ', data);    
      $scope.projects = data.data;
    })
  })