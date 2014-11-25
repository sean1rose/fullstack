'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusController'
      });
  });