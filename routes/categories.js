var express = require('express');
var router = express.Router();
const categoryCtrl = require('../controllers/categories')

/* GET users listing. */
router.get('/categories', categoryCtrl.index);

router.get('/categories/new', categoryCtrl.new);

router.get('/categories/:id', categoryCtrl.show);

// router.get('/categories/:id/edit', categoryCtrl.edit);

router.post('/categories', categoryCtrl.create);

router.post('/listings/:id/categories', categoryCtrl.addToCategory);

// router.put('/categories/:id', categoryCtrl.update);

// router.delete('/:id', categoryCtrl.delete)

module.exports = router;
