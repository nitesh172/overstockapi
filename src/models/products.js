const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
    // imageURL: {
    //     type: String,
    //     required: true,
    //     minlength: 20
    // },
    // img1: {
    //     type: String,
    //     required: true
    // },
    // img2: {
    //     type: String,
    //     required: true
    // },
    // img3: {
    //     type: String,
    //     required: true
    // },
    // img4: {
    //     type: String,
    //     required: true
    // },
    // name: {
    //     type: String,
    //     required: true,
    //     minlength: 10
    // },
    // desc: {
    //     type: String,
    //     required: true
    // },
    // oldPrice: {
    //     type: String,
    //     required: true
    // },
    // newPrice: {
    //     type: String,
    //     required: true
    // },
    // off: {
    //     type: String,
    //     required: true
    // },
    // category: {
    //     type: String,
    //     required: true
    // },
    // color: {
    //     type: String,
    //     required: true
    // },
    // size: {
    //     type: String,
    //     required: true
    // },

    imageURL: {
        type: String,
        required: true,
        minlength: 20
    },
    
})

// we will create a new collection 

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;