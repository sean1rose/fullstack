'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newproject', {
        url: '/newproject',
        templateUrl: 'app/newproject/newproject.html',
        controller: 'NewProjectCtrl'
      });
  });