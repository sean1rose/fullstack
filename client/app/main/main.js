'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('individualProjects', {
        url: '/projects/:id',
        templateURL: 'app/project/individualprojects.html',
        controller: 'ProjectCtrl'
      });
  })