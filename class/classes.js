// class Url {
//     constructor(creationDate,originalUrl,shorturl,redirectCount)
    
//     creationDate = this.creationDate;
//     originalUrl = this.originalUrl;
//     shorturl = this.shorturl;
//     redirectCount = 0
// }
let listOfUrl = [ {
    originalUrl : "test1",
    shorturl : 1
},
{
    originalUrl : "test2",
    shorturl : 2
},
{
    originalUrl : "test3",
    shorturl : 3
},
];

class DataBase {
    constructor(){}

    getDate() {

    }

    setDate() {

    }

    findUrl(){

    }

    addUrl(obj, url) {
        let checkUrl = listOfUrl.filter(obj => obj.originalUrl === url)
        if(checkUrl.length === 0){
            listOfUrl.push(obj)
            // console.log("not found")
            return obj
        } else {
            // console.log("found")
            return obj
        }
    }
}

const dataBase = new DataBase;


let test = {
    originalUrl : "test8",
    shorturl : 3
}
// console.log(dataBase.addUrl(test ,test.originalUrl))
module.exports = DataBase