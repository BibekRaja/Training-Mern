const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({

    product_name: String,
    price: Number
});

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product