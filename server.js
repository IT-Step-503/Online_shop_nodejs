const path = require("path");
const mongoose = require('mongoose')

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoute");

<<<<<<< HEAD
=======
//const db = require("./db")
>>>>>>> 42e82f18bf39a3f2e8097edb1cfb012e90d3b0b7

const app = express();

app.set("views", "templates");
app.set("view engine", "pug");

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, `public`)));

<<<<<<< HEAD

=======
//app.use(db)
>>>>>>> 42e82f18bf39a3f2e8097edb1cfb012e90d3b0b7

async function start() {
    try {
        await mongoose.connect(
<<<<<<< HEAD
            "mongodb+srv://onlineshop:onlineshopdb@cluster0.jgoek.mongodb.net/test", {
=======
            "mongodb+srv://dbnodejsuser:dbnodejspassword@cluster0.arh6c.mongodb.net/myFirstDatabase", {
>>>>>>> 42e82f18bf39a3f2e8097edb1cfb012e90d3b0b7
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
<<<<<<< HEAD
        app.listen(8000, () => {
=======
        app.listen(PORT, () => {
>>>>>>> 42e82f18bf39a3f2e8097edb1cfb012e90d3b0b7
            console.log("server has been started");
        });
    } catch (e) {
        console.log(e);
    }
}

start()


app.use(`/auth`, authRoutes);
app.use(`/admin`, adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render("404page");
});


app.listen(8080, () => {
    console.log("Server Zapushen na porte 8080");
});