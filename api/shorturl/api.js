const { json } = require('body-parser');
const e = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const DataBase = require("../../class/classes");
const dataBase = new DataBase();
let urls ;

router.use((req, res, next) => {
   fs.readFile(process.cwd() + '\\data.json', (error, content) => {
       if(error) {
        throw error
       } 
    urls = JSON.parse(content)
    next();
    });
});
console.log(urls);
router.post('/', (req,res) => {
    let obj = {
        originalUrl: req.body.id,
        shorturl : 1
    }
    dataBase.addUrl(obj, obj.originalUrl)
    res.send(obj)
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