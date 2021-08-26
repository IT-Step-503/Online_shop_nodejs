const mongoose = require('mongoose')

const url = 'mongodb+srv://onlineshop:onlineshop_db@cluster0.jgoek.mongodb.net/test';
const db = mongoose.connect(url)


module.exports = class Mongoose {
    constructor(db) {

        this.db = db
    }
}