'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      // See angular parameter documentation here: https://github.com/angular-ui/ui-router/wiki/URL-Routing
      // this should be separated into own folder
      .state('individualProjects', {
        url: '/projects/:id',
        templateURL: 'app/project/individualprojects.html',
        controller: 'ProjectCtrl'
      });
  })