const express = require('express');
const app = express()
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')


//Middleware (for every request)//
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB//
mongoose.connect('mongodb://localhost:27017/uglyThingdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the DB")
)

//Routes//
app.use('/uglyThing', require('./routes/uglyThingRouter.js'))

//Error handler//
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Sever Listen //
app.listen(7000, () => {
  console.log("The server is running on port 7000")
})