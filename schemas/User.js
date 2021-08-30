const Schema = require("mongoose").Schema
const mongoose = require("mongoose");

const UserSchema = new Schema({
    fullName: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    isAdmin: { type: Boolean, require: true }
});

module.exports = mongoose.model("user", UserSchema);