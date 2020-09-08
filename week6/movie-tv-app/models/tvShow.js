const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Blueprint
const tvShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  episodeNumber: {
    type: Number,
    required: false
  },
})

module.exports = mongoose.model("TVShow", tvShowSchema)