'use strict';

angular.module('fullstackApp')
	.controller('ProjectsCtrl', function ($scope, ProjectsFactory) {
		$scope.projects = [];
		$scope.pMod0 = $scope.projects.length % 3 === 0;
		$scope.pMod1 = $scope.projects.length % 3 === 1;
		$scope.pEven = $scope.projects.length % 2 === 0;
		$scope.pMod2 = $scope.projects.length % 3 === 2;

		ProjectsFactory.updateProjects($scope);
	})
	.factory('ProjectsFactory', function($http){
		var _updateProjects = function($scope){
			$http.get('/api/projects').success(function(projects) {
			  $scope.projects = projects;
			});
		};

		return {
			updateProjects: _updateProjects,
		}
	});