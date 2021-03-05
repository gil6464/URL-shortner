const { json } = require('body-parser');
const e = require('express');
const express = require('express');
const router = express.Router();
const DataBase = require("../../class/classes");
const dataBase = new DataBase();

router.post('/', (req,res) => {

     const response = dataBase.checkUrl(req.body.url)
        res.send(response);
})


router.get("/:id", (req,res) => {
    const id = parseInt(req.params.id)
    let checkid = listOfUrl.filter(url => url.shorturl === id)
    // console.log(checkid);
    if(checkid.length === 0 ) {
        res.send("this url arent stored in our service")
    } else {
        res.redirect(checkid[0].originalUrl)
    }
})
module.exports = router