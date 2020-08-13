const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Blueprint//
const uglyThingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imgURL: {
    type: String
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('UgltThing', uglyThingSchema)