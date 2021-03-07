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
       const body = response.status
       return body; 
    }catch (error) {
        return error
    }
  
}
function isValidURL(string) {
    const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};

router.post('/', async (req,res) => {
    const url = req.body.url;  
    const checkValid = isValidURL(url);
     if(checkValid) {
      const hostName = await checkStatus(url);
       if(hostName >= 200 && hostName <= 299) {
        const response = await dataBase.checkUrl(url);
        res.json(response);
        } else {
          res.status(404).json("Invalid host name");
        }
        } else {
            res.status(400).json("Aint real URL")
        }
})

module.exports = router;