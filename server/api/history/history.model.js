'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HistorySchema = new Schema({
  id: String,
  name: String,
  url: String,
  create_date: String
});

module.exports = mongoose.model('History', HistorySchema);
