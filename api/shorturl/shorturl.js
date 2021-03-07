const express = require('express');
const DataBase = require('../../database/database');
const redirectRouter = express.Router();
const databse = new DataBase();

redirectRouter.get("/:id", async (req,res) => {
  const id = parseInt(req.params.id);
  const listOfUrl = await databse.getData();
  const checkId = listOfUrl.filter(obj => obj.shortUrl === id);
  if(checkId.length === 0) {
    res.status(404).send("This id dont exist in our data base");
  } else {
    databse.updateCount(checkId[0].originalUrl);
    res.redirect(checkId[0].originalUrl);
  }
})

module.exports = redirectRouter;