var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',HomeController.homesite)

module.exports = router;
