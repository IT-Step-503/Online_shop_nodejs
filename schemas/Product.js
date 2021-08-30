const Schema = require("mongoose").Schema
const mongoose = require("mongoose");

const ProductSchema = new Schema({
    imgUrl: { type: String, require: true },
    imgUrls: { type: Array, require: true },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    code: { type: Number, require: true },
    price: { type: Number, require: true },
    color: { type: String, require: true },
    sizes: { type: Array, require: true }
});

module.exports = mongoose.model("product", ProductSchema);