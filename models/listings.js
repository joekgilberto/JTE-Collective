const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // image: {
    //     type: Buffer,
    //     contentType: String
    //     //TODO: default
    // },
    listingDate: {
        type: Date,
        default: new Date()
    },
    sold: {
        type: Boolean,
        default: false
    },
    auctions: [{
        type: Schema.Types.ObjectId,
        ref: 'Auction'
    }]
})

module.exports = mongoose.model('Listing', listingSchema)