const Auction = require('../models/auctions')
const Listing = require('../models/listings')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    create,
    delete: deleteAuction
}

async function create(req,res,next){
    const id = req.params.id
    const auctionData = {...req.body}
    const foundListing = new ObjectId(id)

    auctionData.listing = foundListing
    auctionData.user = req.user._id;
    auctionData.username = req.user.name;

    try {
        const createdAuction = await Auction.create(auctionData);
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAuction(req,res,next){
    const listingId = req.params.listingId;
    const auctionId = req.params.auctionId;
    await Auction.deleteOne({ _id: auctionId }).then(function () {
        res.redirect(`/listings/${listingId}`)
    })
        .catch(function (err) {
            next(err)
        })
}