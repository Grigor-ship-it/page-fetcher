const request = require('request');
const fs = require('fs')


let input = process.argv.slice(2)
let domainName = input[0].toString()
let localFilePath = input[1].toString()

request(domainName, (error, response, body) => {
  console.log('error:', error);
  console.log('statuscode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(localFilePath, body, () => {
    console.log(`Downloaded and saved 1235 bytes to ${localFilePath}`)
    console.log("local storage:", localFilePath)
    console.log("BODY:", body)
  })
});

