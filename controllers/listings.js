// const { default: mongoose } = require('mongoose')
const Listing = require('../models/listings')
const Auction = require('../models/auctions')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    index,
    new: newListing,
    create,
    show,
    edit,
    update,
    delete: deleteListing
}

async function index(req, res, next) {
    const listings = await Listing.find({})
    res.render('index', { title: 'All Listings', listings });
}

async function newListing(req, res, next) {
    res.render('listings/new', { title: 'New Listing', errorMsg: '' });
}

async function create(req, res, next) {
    const listingData = { ...req.body };

    //TODO: deal with absence of image
    listingData.listingDate = new Date();

    try {
        const createdListing = await Listing.create(listingData);
        // TODO: redirect to listings/:id
        res.redirect('/listings');
    } catch (err) {
        console.log(err);
        res.render('listings/new', { title: 'New Listing', errorMsg: err.message });
    }
}

async function show(req, res, next) {
    const id = req.params.id
    try {

        const showListing = await Listing.findById(id)
        let auctions = await Auction.find({ listing: new ObjectId(id) })

        if (auctions.length > 0) {
            auctions.forEach(a => {
                a.accepted = false
            })

            auctions.sort((a, b) => {
                return b.offer - a.offer
            })

            auctions[0].accepted = true
        }

        res.render('listings/show', { title: showListing.title, listing: showListing, auctions })
    } catch (err) {
        next(err)
    }
}

async function edit(req, res, next) {
    const id = req.params.id;
    const results = await Listing.findById(id)
    res.render('listings/edit', { title: `Edit Listing`, listing: results, id, errorMsg: '' })
}

async function update(req, res, next) {
    const id = req.params.id
    const updatedData = req.body

    if (updatedData.sold === 'on') {
        updatedData.sold = true
    } else {
        updatedData.sold = false
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        )
        res.redirect(`/listings/${id}`)
    } catch (err) {
        next(err)
    }
}

async function deleteListing(req, res, next) {
    const id = req.params.id;

    Listing.deleteOne({ _id: id }).then(function () {
        res.redirect(`/listings`)
    })
        .catch(function (err) {
            next(err)
        })
}