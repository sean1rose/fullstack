'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

// get all projects
router.get('/', controller.index);

// get one project
router.get('/:id', controller.show);

// create project
router.post('/', controller.create);

// update project
router.put('/:id', controller.update);

// ???
router.patch('/:id', controller.update);

// delete project
router.delete('/:id', controller.destroy);

module.exports = router;