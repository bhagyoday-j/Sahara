const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title :{
    type: String,
    require: true,
  },
  description:{
    type: String,
    require:true
  },
  address:{
    type: String,
    require:true
  }
})

module.exports = mongoose.model('post', postSchema)