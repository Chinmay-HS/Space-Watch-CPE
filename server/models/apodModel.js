const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  title: { type: String, required: true},
  date: { type: String, required: true},
  url: { type: String, required: true},
  copyright: { type: String, required :true}
});

const ApodModel = mongoose.model("apod", apodSchema);

module.exports = ApodModel;
