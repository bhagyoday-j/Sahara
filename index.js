const express = require('express');
const app = express();
const session = require('express-session')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('./model/user.model')
const connectDB = require('./config/db');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const post = require('./routes/post');
const postsApi = require('./routes/posts.api');

const PORT = process.env.PORT

//Database Connection
connectDB();

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set("view engine", "ejs");

app.use(session({
  secret : process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

let checkLogin = (req,res,next) => {
  if(req.session.user){
    next()
  }else{
    res.render('login',{
      error: null
    });
  }
}

app.use('/', authRoutes);
app.use('/', post);
app.use('/', postsApi);
// Routes
// app.get('/', checkLogin, (req, res) => {
//   res.render('home1', { 
//     error: null,
//     user: req.session.user,
//     name: req.session.name
//   });
// });

// app.get('/skills_connect',checkLogin, (req, res) => {
//   res.render('skills');
// });

// app.get('/profile',checkLogin, (req, res) => {
//   res.send(`<h1>Profile Page</h1>
//     <p>Hello, ${req.session.user}</p>
//     <a href="/logout">Logout</a>
//     `);
// });


// app.get('/login', (req, res) => {
//   if(req.session.user){
//     res.redirect('/')
//   }else{
//     res.render('login',{ error: null});
//   }
  
// });

// app.get('/register', (req, res) => {
//   res.render('register',{ error: null});
// });

// app.post('/register',async (req, res) => {
//   const {username, userpassword, name} = req.body

//   const user = await User.findOne({username})
//   if(user) return res.render('login', { error: 'User Already Exist Login here'})

//   const hasedPassword = await bcrypt.hash(userpassword, 10)

//   // res.send({username, userpassword: hasedPassword })
//   await User.create({username, userpassword: hasedPassword, name})
//   res.redirect('/login')
// })

// app.post('/login',async (req, res) => {
//   const {username, userpassword} = req.body

//   const user = await User.findOne({username})
//   if(!user) return res.render('login', { error: 'User not found'})

//   const isMatch = await bcrypt.compare(userpassword, user.userpassword)
//   if(!isMatch) return res.render('login', { error: 'Invalid Password'})

//     req.session.user = username;
//     req.session.name = user.name;
//     res.redirect('/')
// })

// app.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.redirect('/login')
//   })
// })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});