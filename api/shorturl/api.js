const { json } = require('body-parser');
const e = require('express');
const express = require('express');
const router = express.Router();
const DataBase = require("../../database/database");
const dataBase = new DataBase();
const fetch = require('node-fetch');

async function checkStatus(url) {
  const init = {
    method :"GET"
  };
   try {
       const response = await fetch(url , init)   
       const body = response.status;
       return body; 
    }catch (error) {
        return error;
    }
}

router.post('/', async (req,res) => {

    const url = req.body.url;  
    const hostName = await checkStatus(url);
    if(hostName >= 200 && hostName <= 299) {
      const response = await dataBase.checkUrl(url);
      res.status(200).json(response);
      return;
    } else {
      res.status(404).json("Invalid host name");
        return;
    }   
})
module.exports = router;