const express = require('express')
const tvShowRouter = express.Router()
const TVShow = require('../models/TVShow.js')


// Get All
tvShowRouter.get("/", (req, res, next) => {
  TVShow.find((err, tvShows) =>{
    if(err){
      res.status(500)
      return next(err)
    }
console.log(tvShows)
    return res.status(200).send(tvShows)
  })
})


// Post One
tvShowRouter.post("/", (req, res, next) => {
  const newTVShow = new TVShow(req.body)
  newTVShow.save((err, savedTVShow) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(201).send(savedTVShow)
})
})

// Delete One
tvShowRouter.delete("/:TVShowId", (req, res, next) => {
  TVShow.findOneAndDelete({_id: req.params.TVShowId }, (err, deletedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
  })
})


// Update One
tvShowRouter.put("/:TVShowId", (req, res, next) => {
  TVShow.findByIdAndUpdate(
    {_id: req.params.TVShowId}, // find this one to update
    req.body, // undate the object with this data
    {new: true}, //send back the updated version please
    (err, updatedTVShow) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTVShow)
    }
  )
})


module.exports = tvShowRouter