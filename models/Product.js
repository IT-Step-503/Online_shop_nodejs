const path = require("path");
const fs = require("fs");

const { v4: uuidv4 } = require('uuid');

const p = path.join(__dirname, "..", "data", "products.json");

const ProductSchema = require("../schemas/User");

let dataProduct = null;
fs.readFile(p, (err, products) => {
    if (err) throw err
    dataProduct = JSON.parse(products);
})

module.exports = class Product {
    constructor(data) {
        this.imgurl = data.imgurl;
        this.imgUrls = data.imgUrls;
        this.title = data.title;
        this.prise = data.prise;
        this.desc = data.desc;
        this.code = data.code;
        this.color = data.color;
        this.sizes = data.sizes;
        this.prodId = uuidv4();
    }

    addInDatabase() {
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
            if (err) throw err
            console.log("The product has been added!");
        })
    }
}