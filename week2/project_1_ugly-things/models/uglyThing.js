const mongoose = require('mongoose')
const schema = mongoose.Schema

//Blueprint//
const uglyThingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imgURL: {
    imageURL: String
  },
  discription: {
    type: String
  }
})

module.exports = mongoose.model('UgltThing', uglyThingSchema)