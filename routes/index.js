var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {layout:false});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/list-car', function(req, res, next) {
  res.render('listCar');
});

router.get('/add-new-car', function(req, res, next) {
  res.render('addNewCar');
});


module.exports = router;
