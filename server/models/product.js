const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
    name: String,
    image: String,
    price: Number,
    stock: Number
})

let Product = mongoose.model('Products',productSchema)

module.exports = Product