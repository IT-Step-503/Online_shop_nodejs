const path = require("path");
const fs = require("fs");

const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');

const p = path.join(__dirname, "..", "data", "users.json");

let data = null;
fs.readFile(p, (err, users) => {
    if (err) throw err
    data = JSON.parse(users);
})

module.exports = class User {
    constructor(username, password, fullName, phoneNumber) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.userID = uuidv4();
        this.isAdmin = false;
    }

    register() {
        for (let user of data) {
            if (user.username === this.username) {
                throw new Error("Profile with such username already exists")
            }
        }

        const hash = bcrypt.hashSync(this.password, 10);
        this.password = hash;

        data.push(this);

        fs.writeFile(p, JSON.stringify(data, null, 2), (err) => {
            if (err) throw err
            console.log("User registered!");
        })
    }

    static _checkLogin(body) {
        for (let user of data) {
            console.log(user);
            if (user.username === body.username && bcrypt.compareSync(body.password, user.password)) {
                return true
            }
        }
    }


    static _getUserLogin(body){
        for (let user of data) {
            if (user.username === body.username) {
                return user.isAdmin;
            }
        }
    }
}

