const mongoose = require('mongoose');
// const fs = require('fs'); // Don't forget to require fs

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: {
        type: String,
        // enum: ['Electronics', 'Bikes', 'Pets', 'Clothing'],
        required: true,
        unique: true,
    },
    // image: {
    //     type: Buffer,
    //     contentType: String
    //     //TODO: default
    // },

},
{
    timestamps: true,
});

// categorySchema.pre('save', function (next) {
//     const defaultImages = {
//         'Electronics': {
//             data: fs.readFileSync('../public/images/electronics-default.png'),
//             contentType: 'image/png'
//         },
//         'Clothing': {
//             data: fs.readFileSync('../public/images/clothing-default.png'),
//             contentType: 'image/png'
//         },
//         'Bikes': {
//             data: fs.readFileSync('../public/images/bikes-default.png'),
//             contentType: 'image/png'
//         },
//         'Pets': {
//             data: fs.readFileSync('../public/images/pets-default.png'),
//             contentType: 'image/png'
//         },
//         // Add more categories and default images as needed
//     };

//     if (!this.image) {
//         this.image = defaultImages[this.title];
//     }

//     next();
// });

module.exports = mongoose.model('Category', categorySchema);