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

  .service('anchorSmoothScroll', function(){
      this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
  })