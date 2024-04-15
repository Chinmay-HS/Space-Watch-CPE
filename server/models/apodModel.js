const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  title: { type: String, required: true},
  date: { type: String, required: true},
  url: { type: String, required: true},
  copyright: { type: String, required :true},
  userId: { type: mongoose.Schema.Types.ObjectId, required: true } // Use userId instead of email
});

const ApodModel = mongoose.model("apod", apodSchema);

module.exports = ApodModel;
