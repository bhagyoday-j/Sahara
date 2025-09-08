import express from "express";
const router = express.Router();

let checkLogin = (req,res,next) => {
  if(req.session.user){
    next()
  }else{
    res.render('login',{
      error: null
    });
  }
}

router.get('/', checkLogin, (req, res) => {
  res.render('home', { 
    error: null,
    user: req.session.user,
    name: req.session.name
  });
});

module.exports = router