var express = require('express');
var router = express.Router();
const listingsCtrl = require('../controllers/listings')

/* GET users listing. */
router.get('/', listingsCtrl.index)

router.get('/new', listingsCtrl.new)

router.get('/:id', listingsCtrl.show)

router.post("/", listingsCtrl.create);

module.exports = router;
