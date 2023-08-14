var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '' });
});

router.get('/services', function(req,res,next){
  res.render('services', {title:''})
})
router.get('/contact', function(req,res,next){
  res.render('contact', {title:''})
})

router.get('/about', function(req,res,next){
  res.render('about', {title:''})
})
module.exports = router;

