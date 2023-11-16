require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const testRouter = require('./routes/userRoute.js')
const authRouter = require('./routes/authRoute.js')
const app = express();

// allow json
app.use(express.json())


const PORT = process.env.PORT
const uri = process.env.MONGO_URI

// connect to the server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

// test api route
app.use('/api/user', testRouter)

// auth api route
app.use('/api/auth', authRouter)

// connect to database(mongodb)
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database")
  })
  .catch((err) => {
    console.log(err)
  })
