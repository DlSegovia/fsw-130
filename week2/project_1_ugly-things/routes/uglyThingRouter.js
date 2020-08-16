const express = require('express')
const uglyThingRouter = express.Router()
const UglyThing = require('../models/uglyThing.js')

console.log(UglyThing)
// Get All
uglyThingRouter.get("/", (req, res, next) => {
  UglyThing.find((err, uglyThing) =>{
    if(err){
      res.status(500)
      return next(err)
    }console.log(uglyThing)
    return res.status(200).send(uglyThing)
  })
})


// Post One
uglyThingRouter.post("/", (req, res, next) => {
  const newUglyThing = new UglyThing(req.body)
  newUglyThing.save((err, savedUglyThing) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(201).send(savedUglyThing)
})
})

// Delete One
uglyThingRouter.delete("/:uglyThingId", (req, res, next) => {
  UglyThing.findOneAndDelete({_id: req.params.uglyThingId }, (err, deletedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
  })
})


// Update One
uglyThingRouter.put("/:uglyThingId", (req, res, next) => {
  UglyThing.findByIdAndUpdate(
    {_id: req.params.uglyThingId}, // find this one to update
    req.body, // undate the object with this data
    {new: true}, //send back the updated version please
    (err, updatedUglyThing) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedUglyThing)
    }
  )
})


module.exports = uglyThingRouter