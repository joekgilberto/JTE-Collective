var express = require('express');
var router = express.Router();
const listingsCtrl = require('../controllers/listings')

/* GET users listing. */
router.get('/', listingsCtrl.index)

router.get('/new', listingsCtrl.new)

router.get('/:id', listingsCtrl.show)

router.get('/:id/edit', listingsCtrl.edit)

router.post('/', listingsCtrl.create);

router.put('/:id', listingsCtrl.update)

module.exports = router;
