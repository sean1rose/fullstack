'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allprojects', {
        // where does this URL come from? defined here or somewhere else?
        url: '/project',
        templateUrl: 'app/allproject/allprojects.html',
        controller: 'AllProjectsController'
      });
  });