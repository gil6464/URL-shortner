const fs = require('fs');

class DataBase {
    constructor(){}
    
getDate() {
        
}
    
setDate() {
        
}
    
findUrl(){
        
}
    
addUrl(obj, url) {
  fs.readFile('./data.json',(error, content) => {
    if(error) {
     throw error;
    }
  let data = JSON.parse(content);
  let checkUrl = data.filter(obj => obj.originalUrl === url)
    if(checkUrl.length === 0){
     obj.shorturl = data.length
     data.push(obj);
     fs.writeFile('./data.json',JSON.stringify(data,null, 4),(err) => { 
     if(err) {
     throw err
     }    
    })
    obj.shorturl = data.length
    return obj
                } else {
                return obj
                }
            });
    }
}

// class Url {
//     constructor(creationDate,originalUrl,shorturl,redirectCount)
    
//     creationDate = this.creationDate;
//     originalUrl = this.originalUrl;
//     shorturl = this.shorturl;
//     redirectCount = 0
// }
const dataBase = new DataBase;

let test = {
    originalUrl : "test8",
    shorturl : 3
}
// console.log(dataBase.addUrl(test ,test.originalUrl))
module.exports = DataBase