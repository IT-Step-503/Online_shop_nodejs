const User = require("../models/User")

exports.getLogin = (req,res)=>{
    res.render("login");
}
exports.postLogin = (req, res) => {
    const { body } = req;
    let bool = User._checkLogin(body);
    let isAdmin = User._getUserLogin(body)
    
    res.cookie("isAdmin", isAdmin ,{path: '/admin', secure: true});

    if(bool){
        res.redirect("/cart");
    }else{
        res.redirect("/auth/login")
    }
}

exports.getRegister = (req,res)=>{
    res.render("register");
}

exports.postRegister = (req,res)=>{
    const { body } = req;
    new User(body.username, body.password, body.fullName, body.phoneNumber, body.userID).register();
    res.redirect("/");
}