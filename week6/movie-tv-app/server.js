const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')


// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 
app.use(cors())

//Connect to DB
mongoose.connect('mongodb://Localhost:27017/moviesdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the DB")
)

// Routes //
app.get("/", function(req,res, next){
  req.json({msg:"This is CORS-enabled for all origins!" })
})
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/shows", require("./routes/showRouter.js"))

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})