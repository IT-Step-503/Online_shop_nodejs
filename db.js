const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((err) => {
            console.log("Database connection filed. Exiting now...");
            console.log(err);
            process.exit(1);
        })
}