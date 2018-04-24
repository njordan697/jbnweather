
var express = require('express');
var app = express();
var mongoGet = require("./mongoGet");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send('Serveur Proxy de Bastien, Nathan et Jonathan');
});

app.get('/api/today', function(req, res) {

	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("M306");
  
  dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).toArray(function(err, result) {
  	//dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(JSON.stringify(result));
    db.close();

resultat = result;
  });

});
	
});

app.get('/api/LastWeek', function(req, res) {
	var week = mongoGet.getLastWeek();
	
	res.send(week);
	
});

app.get('/api/LastMonth', function(req, res) {

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
