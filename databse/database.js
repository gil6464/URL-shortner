const { json } = require('body-parser');
const fs = require('fs');
const { get } = require('../api/shorturl/api');
const DB_NAME = "my-url";
const url =  "https://api.jsonbin.io/v3/b/6016ba3213b20d48e8bf90bf"
const fetch = require('node-fetch')

async function getPersistent() {

  const init = {
    method :"GET"
  };
  
  const response = await fetch(url + "/latest", init);
  const body = await response.json();
  return body.record ["my-url"];

}

async function setPersistent(data) {
 const dataObject = {
   "my-url" :data
 };
  const init = {
    method :"PUT" ,
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(dataObject)
  };
  const response = await fetch(url, init);
  return response.ok;
}

class DataBase {
    constructor(){
        this.data = []
    }
async getData() {
       this.data = await getPersistent()
       return this.data
   }
setData(info) {
    const url = new Url (info,(this.data.length + 1)) // write +1 because i didnt want to short url start with 0.
    this.data.push(url)
    setPersistent(this.data)
}
    
async checkUrl(url) {
  const data = await getPersistent();
  let checkData = data.filter(obj => obj.originalUrl === url);

  if(checkData.length === 0){
     this.setData(url); 
     const response = new ResponseUrl(url,this.data.length)
     return response;
  } else {
    const existUrl = new ResponseUrl(checkData[0].originalUrl, checkData[0].shorturl)
    return existUrl
  }

}
}

class Url {
    constructor(originalUrl,shortUrl){

        this.creationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
        this.redirectCount = 0
    }
}

class ResponseUrl {
    constructor(originalUrl,shortUrl) {
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
    }
}

module.exports = DataBase