const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");


const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://tahmid56:1234@ecommerce.r47v0gy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("connected to MongoDB");
}).catch((err)=> {
    console.log("Error connecting", err);
})

app.listen(port, ()=> {
    console.log("Server is running on port", port);
})