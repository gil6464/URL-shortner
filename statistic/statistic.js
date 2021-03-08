const express = require('express');
const DataBase = require('../database/database');
const statisticRouter = express.Router();
const database = new DataBase()

statisticRouter.get('/:id', async (req,res)=> {
    const id = parseInt(req.params.id);
    const listOfUrl = await database.getData();
    const indexOfUrl = listOfUrl.findIndex(obj => obj.shortUrl === id);
    if(indexOfUrl === -1) {
        res.status(404).send("Unexist statistic of this short url id in our Data base please make sure add your link to our service")
    }else {
        res.send(listOfUrl[indexOfUrl]);
    }
})
module.exports = statisticRouter;