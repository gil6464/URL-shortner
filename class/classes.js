const { json } = require('body-parser');
const fs = require('fs');
const { get } = require('../api/shorturl/api');


class DataBase {
    constructor(){
        this.data = []
    }
    
getData() {
    return new Promise((res) => {
        fs.readFile('./data.json',(error, content) => {
            if(error) {
                throw error;
            }
            this.data = JSON.parse(content);
            res(this.data)
        })   
    })
}

    
setData(url) {
    this.getData().then((res) => { 
        let list = (res.length + 1)
        this.url = new Url(url,list);
        this.data.push(this.url)
        fs.writeFile('./data.json',JSON.stringify(this.data,null, 4),(err) => { 
            if(err) {
                throw err
            } 
        })
    })
}
    
checkUrl(url) {
 let checkList = this.data.filter(obj => obj.originalUrl === url);

}
}

class Url {
    constructor(originalUrl,shorturl){

        this.creationDate = new Date();
        this.originalUrl = originalUrl;
        this.shorturl = shorturl;
        this.redirectCount = 0
    }
}

module.exports = DataBase