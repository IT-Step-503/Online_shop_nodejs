const UserModel = require("../schemas/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getLogin = (req, res) => {
    res.render("login");
}

exports.getRegister = (req, res) => {
    res.render("register");
}


exports.postLogin = async(req, res) => {
    const { username, password } = req.body;

    const userLogin = await UserModel.findOne({ username });

    if (userLogin && await bcrypt.compareSync(password, userLogin.password)) {

        const token = jwt.sign({ user_id: userLogin._id, username: userLogin.username },
            String(process.env.TOKEN_KEY), {
                expiresIn: "2h"
            }
        );
        userLogin.token = token;

        res.json(userLogin);
    } else {
        return (res.status(409).send("User already exists!"))
    }

}


exports.postRegister = async(req, res) => {
    const { username, password, fullName, phoneNumber } = req.body;
    const userExists = await UserModel.findOne({ username });

    if (userExists) {
        return (res.status(409).send("User already exists!"))
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
        fullName,
        username,
        password: encryptedPassword,
        phoneNumber,
        isAdmin: false
    });

    const token = jwt.sign({ user_id: newUser._id, username: newUser.username },
        String(process.env.TOKEN_KEY), {
            expiresIn: "2h"
        });

    newUser.token = token;

    res.redirect("/");
}