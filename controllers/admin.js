const Product = require("../models/Product");

exports.getAddProduct = (req,res)=>{
    if(req.cookies.isAdmin === "true"){
        res.render("add-product")
    }else{
        res.redirect("/")
    }
    
}

exports.postAddProduct = (req,res)=>{
    const { body } = req;
    new Product(body).addInDatabase();
    res.redirect("/");
}
