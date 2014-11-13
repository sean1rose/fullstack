'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

// get all projects
router.get('/', controller.index);

// get one project
//http.get('/api/id') // ('/api/:id')
//http.get('/projects/id')
//http.get('/id')
router.get('/:id', controller.show);

// get create project page?
router.get('/projects', controller.index);

// create project
// $http.post('/api/projects/') --> newproject.controller.js
router.post('/', controller.create);

// update project
router.put('/:id', controller.update);

// ???
router.patch('/:id', controller.update);

// delete project
router.delete('/:id', controller.destroy);

module.exports = router;