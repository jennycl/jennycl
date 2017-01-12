var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jenny' });
});

router.get('/about', function(req, res, next){
  res.render('about');
})

router.get('/projects', function(req, res, next){
  res.render('projects');
})

router.get('/skills', function(req, res, next){
  res.render('skills');
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})


router.get('/interests', function(req, res, next){
  res.render('interests');
})

module.exports = router;
