'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  image: {data:Buffer, contentType: String},
  id: Number
});

module.exports = mongoose.model('Project', ProjectSchema);