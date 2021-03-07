require("dotenv").config();  
const express = require("express");
const cors = require("cors");
const bodyParser  = require("body-parser");
const api = require('./api/shorturl/api');
const redirect = require('./api/shorturl/shorturl')
const statistics = require('./statistic/statistic')
const app = express();

app.use(cors());

app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/shorturl/new', api);
app.use('/api/shorturl', redirect);
app.use('/api/statistic/', statistics);

module.exports = app;
