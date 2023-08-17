const Category = require('../models/categories');
const Listing = require('../models/listings');
// const ObjectId = require('mongodb').ObjectId;

module.exports = {
    index,
    create,
    show,
    new: newCategory,
    addToCategory
};

async function index(req, res, next) {
    try {
        const listings = await Listing.find({})
        const allCategories = await Category.find({}).sort('title');
        res.render('categories/index', { title: 'All Categories', categories: allCategories, listings });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function show(req, res) {
    res.send("show category");
}

async function create(req,res,next){
    const categoryData = {...req.body}
    await Category.create(categoryData);
    res.redirect('/categories/new');
}

async function newCategory(req, res) {
    res.render("categories/new", {
        categories: await Category.find({}),
        title: 'Add Category',
        errorMsg: "",
    });
}

async function addToCategory(req, res){
    const listingId = req.params.id
    const categoryId = req.body.categoryId

    try {
        const saving = await Listing.findById(listingId).then(async function(result){
            await result.category.push(categoryId)
        }).then(async function(result){
            await result.save()
        })
        console.log("saving",saving)
        res.redirect(`/listings/${foundListing._id}`)
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}
