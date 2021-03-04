// const express = require('express');
// const routerGet = express.Router();

// routerGet.get("/:id", (req,res) => {
//     const id = parseInt(req.params.id)
//     let checkid = listOfUrl.find(url => url.shorturl === id)
//     console.log(checkid);
//     if(checkid.length === 0 ) {
//         res.send("this url arent stored in our service")
//     } else {
//         res.redirect(checkid[0].originalUrl)
//     }
// })

// module.exports = routerGet