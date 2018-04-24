const http = require('http');

var mongodb = require("./mongodb_forecast.js");

function getJsonViaAPI() {


http.get('http://api.wunderground.com/api/44bde16d53e070bb/forecast/q/ch/estavayer-le-lac.json', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    mongodb.data.insererJson(JSON.parse(data));
    //console.log(data);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

}

setInterval(getJsonViaAPI, 60);

//getJsonViaAPI();


//setInterval(getJsonViaAPI, 60);

//600000
