const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String},
    price: {type: String},
    category:{type: String},
    userId: {type: String},
    company: {type: String}
},{timestamps:true})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;