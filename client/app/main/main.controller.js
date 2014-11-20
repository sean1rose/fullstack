'use strict';

angular.module('fullstackApp')
  .controller('MainCtrl', ['$scope', '$location', 'anchorSmoothScroll', 
    function($scope, $location, anchorSmoothScroll){
        $scope.goto = function(eID){
            $location.hash('useit');
            anchorSmoothScroll.scrollTo(eID);
        };
    }
  ]);
