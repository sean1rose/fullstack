'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var ProjectSchema = new Schema({

  //need "project_id: String" --> to be called in html file w/ stateParams in order to link to individual project
  // need this to be automatically generated every time a new project is created (is there a mongoid created automatically w/ each entry and can i just use that, or is it better practice to generate one)
  projectname: String,
  projectdeveloper: String,
  projectdescription: String,
  projectduration: String,
  projectgoals: String,
  project_id: String
  // image: {data:Buffer, contentType: String},
  // id: Number,
  // userId: String
});

module.exports = mongoose.model('Project', ProjectSchema);


