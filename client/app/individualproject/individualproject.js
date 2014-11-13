'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('individualproject', {
        // where is each id defined and stored? as soon as a project is created, is a new id created in mongoose automatically? do i need to create one?
        url: '/project/:id',
        templateUrl: 'app/individualproject/individualproject.html',
        controller: 'IndividualProjectController'
      });
  });