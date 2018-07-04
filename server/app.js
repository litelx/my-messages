const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const postsRoutes = require('./routes/posts')

const app = express()

// mongoose.connect('mongodb://litel:0UWvK3vuJFTHXc7A@cluster0-shard-00-00-hpih8.mongodb.net:27017,cluster0-shard-00-01-hpih8.mongodb.net:27017,cluster0-shard-00-02-hpih8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
mongoose
  .connect(
    'mongodb+srv://litel:0UWvK3vuJFTHXc7A@cluster0-hpih8.mongodb.net/node-angular?retryWrites=true'
  )
  .then(() => {
    console.log('connected to database!')
  })
  .catch(() => {
    console.log('connection failed!')
  })
// 0UWvK3vuJFTHXc7A

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PATCH, PUT, DELETE, OPTIONS'
  )
  next()
})

app.use('/api/posts', postsRoutes)

module.exports = app
