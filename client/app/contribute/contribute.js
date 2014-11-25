'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contribute', {
        url: '/contribute',
        templateUrl: 'app/contribute/contribute.html',
        controller: 'ContributeController'
      });
  });