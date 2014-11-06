'use strict';

angular.module('fullstackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.projects = [1,2,3,4];
    $scope.pMod0 = $scope.projects.length % 3 === 0;
    $scope.pMod1 = $scope.projects.length % 3 === 1;
    $scope.pMod2 = $scope.projects.length % 3 === 2;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
