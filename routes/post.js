const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/user.model');
const post = require('../model/post.model'); 

// Middleware to check if user is logged in
let checkLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render('login', { error: null });
  }
};

// Routes
router.get('/post_accept', (req, res) => {
  res.render('post_accept', { error: null });
});

router.post('/post_accept', async (req, res) => {
  const { title, description, address } = req.body;

  const response = await post.create({ title, description, address });
  console.log(response);
  res.json(response);
});

module.exports = router;
