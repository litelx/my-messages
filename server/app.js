const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

// mongoose.connect('mongodb://litel:0UWvK3vuJFTHXc7A@cluster0-shard-00-00-hpih8.mongodb.net:27017,cluster0-shard-00-01-hpih8.mongodb.net:27017,cluster0-shard-00-02-hpih8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
mongoose
  .connect(
    "mongodb+srv://litel:0UWvK3vuJFTHXc7A@cluster0-hpih8.mongodb.net/node-angular?retryWrites=true"
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed!");
  });
// 0UWvK3vuJFTHXc7A

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    // console.log(createdPost)
    // console.log("post added! ", post);
    res.status(201).json({
      message: "Post added successfully!",
      postId: createdPost._id
    })
  })
})

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: documents
    })
  })
})

app.delete("/api/posts/:id", (req, res, next) => {
  // console.log(req.params.id)
  Post.deleteOne({_id: req.params.id}).then(result => {
    // console.log(result)
    res.status(200).json({
      message: 'Post deleted'
    })
  })
  // .catch
})

module.exports = app;
