'use strict';

angular.module('fullstackApp')
	.controller('ProjectsCtrl', function ($scope) {
		$scope.projects = [1,2];
		$scope.pMod0 = $scope.projects.length % 3 === 0;
		$scope.pMod1 = $scope.projects.length % 3 === 1;
		$scope.pEven = $scope.projects.length % 2 === 0;
		$scope.pMod2 = $scope.projects.length % 3 === 2;
	});