'use strict';

angular.module('fullstack.services', [])

  .factory('Projects', function( $http ){

    // getProjects will query the api for all projects
    var _getProjects = function(params){
      params = params || {};
      return $http({
        method: 'GET',
        url: '/api/projects',
        params: params
      })
      .success(function(data){
        console.log('All Project data - ', data);
        return data;
      })
      .error(function(){
        console.log('Error occurred while retrieving project data');
      })
    };

    var _getProject = function(id){
      id = id || {};
      console.log('_getProject ID', id);
      return $http({
        method: 'GET',
        // url: '/' + id
        // url: '/api/'
        // url: '/api/project/' + id
        //url: '/api/projects/' + id
        url: '/api/projects/' + id
      })
      .success(function(data){
        console.log('project Data - ', data);
        return data;
      })
      .error(function(){
        console.log('Error occurred while getting project data');
      })
    };

    return {
      getProjects: _getProjects,
      getProject: _getProject
    }
  })