var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '' });
});

router.get('/services', function(req,res,next){
  res.render('services', {title:''})
})
module.exports = router;
