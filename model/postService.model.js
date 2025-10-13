const mongoose = require('mongoose');

const postservice = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  dailyRate: {
    type: Number,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('postservice', postservice);