'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('docs', {
        url: '/docs',
        templateUrl: 'app/docs/docs.html',
        controller: 'DocsController'
      });
  });