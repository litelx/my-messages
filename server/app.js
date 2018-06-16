const express = require('express')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
  let posts = [
    {
      id: 'm5948v67',
      title: 'First post title',
      content: 'Content of first post'
    },
    {
      id: '487fh6fd',
      title: 'Second title',
      content: 'Content of second content'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
