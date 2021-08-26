const path = require("path");
const fs = require("fs");

const express = require("express");
const router = express.Router();

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "products.json"), (err, prods)=>{
    if(err) throw err
    data = JSON.parse(prods);
})


router.get("/product/:prodId", (req, res)=>{
    res.render("product", {thisProd: data.find(elem => elem.prodId === req.params.prodId)})
})

router.get("/products", (req, res)=>{
    res.render("products", {products: data});
})

router.get("/about", (req, res)=>{
    res.render("about");
})

router.get("/cart", (req, res)=>{
    res.render("cart");
})

router.get("/", (req,res)=>{
    res.render("index", {products: data});
})

module.exports = router;