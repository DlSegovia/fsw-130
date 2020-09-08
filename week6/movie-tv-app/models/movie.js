const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Blueprint
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Number,
    required: false
  },
})

module.exports = mongoose.model("Movie", movieSchema)

