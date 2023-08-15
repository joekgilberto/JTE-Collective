var express = require('express');
var router = express.Router();
const auctionsCtrl = require('../controllers/auctions')

router.post('/listings/:id/auction/new', auctionsCtrl.create)
router.delete('/listings/:listingId/auction/:auctionId', auctionsCtrl.delete)


module.exports = router;