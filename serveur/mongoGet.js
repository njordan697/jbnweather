let resultat;

exports.getLastWeek = function() {



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("M306");
  
  dbo.collection("infos_meteos").find({UpdateDate:{'$lte':new Date(),'$gte':new Date(Date()-7)}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    
    db.close();

resultat = result;
  });

});

console.log(resultat);

}




