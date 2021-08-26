const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    title: {type: String , required: true},
    color: {type: String , required: true},
    desc: {type: String , required: true},
    prise: {type: Number , required: true},
    code: {type: Number , required: true},
    imgUrl: {type: String , required: true},
    imgUrls: [String ,{required: true}],
    sizes:[
        {
        size: String,
        qty: Number
        }
    ]
    
})