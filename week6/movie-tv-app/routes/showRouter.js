const express = require('express')
const showRouter = express.Router()
const Show = require('../models/show.js')


// Get All
showRouter.get("/", (req, res, next) => {
  Show.find((err, shows) =>{
    if(err){
      res.status(500)
      return next(err)
    }
console.log(shows)
    return res.status(200).send(shows)
  })
})


// Post One
showRouter.post("/", (req, res, next) => {
  const newShow = new Show(req.body)
  newShow.save((err, savedShow) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(201).send(savedShow)
})
})

// Delete One
showRouter.delete("/:ShowId", (req, res, next) => {
  Show.findOneAndDelete({_id: req.params.ShowId }, (err, deletedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
  })
})


// Update One
showRouter.put("/:ShowId", (req, res, next) => {
  Show.findByIdAndUpdate(
    {_id: req.params.ShowId}, // find this one to update
    req.body, // undate the object with this data
    {new: true}, //send back the updated version please
    (err, updatedShow) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedShow)
    }
  )
})


module.exports = showRouter