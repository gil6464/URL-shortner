const { json } = require('body-parser');
const e = require('express');
const express = require('express');
const router = express.Router();
const DataBase = require("../../database/database");
const dataBase = new DataBase();


router.post('/', async (req,res) => {
    const response = await dataBase.checkUrl(req.body.url);
    res.json(response)
})

module.exports = router