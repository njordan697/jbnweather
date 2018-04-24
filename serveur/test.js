var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var dateMtn = new Date();

//console.log(dateMtn.getHours());
//var year = dateMtn.getFullYear();

//var nouvelleDate = new Date(year,0,1);

//console.log(nouvelleDate);

console.log(new Date());

var date = new Date().getTime();
date += (2 * 60 * 60 * 1000);
//console.log(new Date(date).toUTCString());
// displays: Wed, 30 Jul 2014 01:44:06 GMT
var day = new Date().getUTCDay();

function setNumberFormat(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}



var month = new Date().getMonth();
var year = new Date().getUTCFullYear();

var hours = new Date().getUTCHours();

console.log(year);

console.log(new Date().get);
var maDate = new Date('2018-04-24T07:00:00.000Z');
var maDate2 = new Date('2018-04-24T07:10:00.000Z');
//console.log(maDate);
//console.log(maDate2);

var arrayTemperature = [];

function getTempOfDay(){

for (var x = 0; x <= hours; x++)
{
    var tempHour = hours-x;
    var tempArray2 = [];
//console.log(year+"-"+setNumberFormat(month)+"-"+setNumberFormat(day)+"T"+setNumberFormat(tempHour)+":00:00.000Z");
var dateOclock = new Date(year+"-"+setNumberFormat(month)+"-"+setNumberFormat(day)+"T"+setNumberFormat(tempHour)+":00:00.000Z"); 
var dateTenMin = new Date(year+"-"+setNumberFormat(month)+"-"+setNumberFormat(day)+"T"+setNumberFormat(tempHour)+":10:00.000Z");
console.log(dateOclock);

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("M306");
    
    dbo.collection("infos_meteos").find({UpdateDate:{'$lte': maDate2,'$gte': maDate}}).limit(1).toArray(function(err, result) {
        //dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
      if (err) throw err;
     //console.log(result);
        tempArray2[0] = result[0].current_observation.temp_c;
        tempArray2[1] = result[0].current_observation.feelslike_c;

        arrayTemperature[x] = tempArray2;
         
      db.close();
  
     
    });

  });


}


}

getTempOfDay();

console.log(arrayTemperature);