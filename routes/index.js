var express = require('express');
var router = express.Router();
// var fish = require('./fish.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Fish House' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about our Express Fish House' });
});




module.exports = router;
