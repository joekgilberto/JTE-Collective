// const { default: mongoose } = require('mongoose')
const Listing = require('../models/listings')

module.exports = {
    index,
    new: newListing,
    create,
    show
}

async function index(req,res,next){
    const listings = await Listing.find({})
    console.log(listings)
    res.render('index', { title: 'All Listings', listings });
}

async function newListing(req,res,next){
    res.render('listings/new',{title: 'New Listing', errorMsg: ''});
}

async function create(req,res,next){
    const listingData = {...req.body};

    //TODO: deal with absence of image
    listingData.listingDate = new Date();

    try {
        const createdListing = await Listing.create(listingData);
        // TODO: redirect to listings/:id
        console.log(createdListing)
        res.redirect('/listings');
      } catch (err) {
        console.log(err);
        res.render('listings/new', { title: 'New Listing', errorMsg: err.message });
      }
}

async function show(req,res,next){
    const id = req.params.id
    const showListing = await Listing.findById(id)
    console.log(showListing)
    res.render('listings/show', {title: showListing.title, listing: showListing})
}