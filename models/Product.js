const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { v4: uuidv4 } = require("uuid");

const p = path.join(__dirname, "..", "data", "products.json");

let dataProduct = null;
fs.readFile(p, (err, products) => {
  if (err) throw err;
  dataProduct = JSON.parse(products);
});

module.exports = new Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  desc: { type: String, required: true },
  prise: { type: Number, required: true },
  code: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  imgUrls: [String, { required: true }],
  sizes: [
    {
      size: String,
      qty: Number,
    },
  ],
});

const addInDatabase = () => {
  let bool = false;
  console.log(this);
  for (let prod of dataProduct) {
    if (prod.code === this.code) {
      prod.qty = prod.qty + parseInt(this.qty);
      bool = true;
    }
  }

  if (!bool) {
    dataProduct.push(this);
  }

  fs.writeFile(p, JSON.stringify(dataProduct, null, 2), (err) => {
    if (err) throw err;
    console.log("The product has been added!");
  });
};
