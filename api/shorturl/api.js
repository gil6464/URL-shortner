const express = require('express');
const router = express.Router();

let listOfUrl = [];

router.post('/', (req,res) => {
    const url = {
        originalUrl : req.body.url,
        id : (1 + listOfUrl.length)
    }
    let checkUrl = listOfUrl.filter(url => url.originalUrl === req.body.url);
    if(checkUrl.length === 0) {
        listOfUrl.push(url);
        res.send(url)
    } else {
        res.send(...checkUrl)
    }
})

router.get("/id", (req,res) => {
    res.redirect("https://github.com/")
  })

module.exports = router;