const fs = require('fs'); 
function getData() {
    return fs.readFile('./data.json',(error, content) => {
        if(error) {
            throw error;
        }
         JSON.parse(content);
    });
      
}
getData();
module.exports = {getData};

