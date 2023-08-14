const Auction = require('../models/auctions')

module.exports = {
    create,
    // delete: deleteAuction
}

async function create(req,res,next){
    const id = req.params.id
    const auctionData = {...req.body}
    try {
        const createdAuction = await Auction.create(auctionData);
        // TODO: redirect to listings/:id
        console.log(auctionData)
        res.redirect(`/listings/${id}`);
    } catch (err) {
        next(err);
    }
}