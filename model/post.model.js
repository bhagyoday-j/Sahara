const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  urgency: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high']
  },
  ownerUsername: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  time: {
    type: String,
    required: true
  },
  helpers: [
    {
      username: { type: String, lowercase: true, trim: true, required: true },
      contact: { type: String, required: true, trim: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('post', postSchema)