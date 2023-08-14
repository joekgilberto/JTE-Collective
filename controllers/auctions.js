const Auction = require('../models/auctions')
const Listing = require('../models/listings')

module.exports = {
    create,
    // delete: deleteAuction
}

async function create(req,res,next){
    const id = req.params.id
    const auctionData = {...req.body}
    try {
        const createdAuction = await Auction.create(auctionData);
        console.log(createdAuction)
        const foundListing = await Listing.findById(id)
        foundListing.auctions.push(createdAuction._id)
        await foundListing.save()

        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
}