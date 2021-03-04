require("dotenv").config();  
const express = require("express");
const cors = require("cors");
const bodyParser  = require("body-parser");
const app = express();

app.use(cors());

app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/shorturl/new', require('./api/shorturl/api'));

app.get("/test", (req,res) => {
  res.redirect("https://github.com/")
})
module.exports = app;
