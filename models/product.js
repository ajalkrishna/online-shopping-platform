const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    image: { type: String, required: [true, "Image is required!"] },
    productName: { type: String, required: [true, "Product name is required!"] },
    shopName: { type: String, required: [true, "Seller name is required!"] },
    price: { type: Number, required: [true, "Price of product is required!"] }
}, { collection: 'products' })


const productModel = mongoose.model('product', productSchema)


module.exports = productModel