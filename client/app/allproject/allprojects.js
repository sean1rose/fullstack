'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allprojects', {
        url: '/project',
        templateUrl: 'app/allproject/allprojects.html',
        controller: 'AllProjectsController'
      });
  });