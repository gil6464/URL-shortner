const express = require('express');
const DataBase = require('../../databse/database');
const redirectRouter = express.Router();
const databse = new DataBase

redirectRouter.get("/:id", async (req,res) => {
  const id = parseInt(req.params.id)
  const listOfUrl = await databse.getData()
  console.log(listOfUrl)
  const checkId = listOfUrl.filter(obj => obj.shortUrl === id);
    
  res.send(checkId)
})

module.exports = redirectRouter