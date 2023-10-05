const fs = require('fs');
const dirPath = '../Documents/Postman Collections/';
let outputFile = '../Documents/swagger/';
let outputArr;
try {
    outputArr = fs.readdirSync(dirPath);
} catch (err) {
  console.error('Error reading directory:', err);
}


const postmanToOpenApi = require('postman-to-openapi');

for(var x=0; x< outputArr.length; x++){
    let postmanCollection = dirPath+outputArr[x];
     outputFile = '../Documents/swagger/'+ outputArr[x].replace('postman_collection.json','yml');
    postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })
}
