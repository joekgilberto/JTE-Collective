var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the index page');
});

router.get('/new', function(req, res, next) {
  res.send('Welcome to the new page');
});

module.exports = router;
