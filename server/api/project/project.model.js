'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var ProjectSchema = new Schema({
  // username: String,
  // hashedPassword: String,
  // password: String,
  projectname: String,
  projectdeveloper: String,
  projectdescription: String,
  projectduration: String,
  projectgoals: String,
  // image: {data:Buffer, contentType: String},
  // id: Number,
  // userId: String
});

module.exports = mongoose.model('Project', ProjectSchema);


