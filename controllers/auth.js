const User = require("../models/User")

exports.getLogin = (req, res) => {
    res.render("login");
}
exports.postLogin = (req, res) => {
    const { body } = req;
    let bool = User._checkUsername(body) && User._checkPassword(body);
    let isAdmin = User._checkIsAdmin(body)

    res.cookie("isAdmin", isAdmin, { path: '/admin', secure: true });

    if (isAdmin) {
        res.redirect("/admin/add-product");
    } else {
        if (bool) {
            res.redirect("/cart")
        } else {
            res.redirect("/auth/login")
        }
    }
}

exports.getRegister = (req, res) => {
    res.render("register");
}

exports.postRegister = (req, res) => {
    const { body } = req;
    console.log(body);
    new User(body.username, body.password, body.fullName, body.phoneNumber, body.userID).register();
    res.redirect("/");
}