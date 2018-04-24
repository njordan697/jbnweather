var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var dateStr = new Date("2018","01","01");
var nextDate = new Date("2018","12","31");

var year = 2018;

var allJson = [];
var arrayWeather = [];

var arrayWeatherAfterSort = [];

var dateYear = new Date(year,0,1);

var jourLePlusChaud;
var tempLaPlusChaude;

var jourLePlusFroid;
var tempLaPlusFroide;

var month = new Date().getUTCMonth() + 1;
var year = new Date().getUTCFullYear();
var hours = new Date().getUTCHours();
var arrayTemperature = [];
var day = new Date().getUTCDate();

//console.log(day);

//console.log(dateYear);

//console.log(new Date());

function getJourLePlusChaud (done) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("M306");
        
        dbo.collection("infos_meteos").find({UpdateDate:{'$lte': new Date(),'$gte': dateYear}}).sort({"current_observation.temp_c": -1}).limit(1).toArray(function(err, result) {
            //dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
          if (err) throw err;
         // console.log(result);
            
     
          jourLePlusChaud = result[0].UpdateDate;
          tempLaPlusChaude = result[0].current_observation.temp_c;
          db.close();
      
          done();
        });
    
      });


}

function getJourLePlusFroid (done) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("M306");
        
        dbo.collection("infos_meteos").find({UpdateDate:{'$lte': new Date(),'$gte': dateYear}}).sort({"current_observation.temp_c": 1}).limit(1).toArray(function(err, result) {
            //dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
          if (err) throw err;
         // console.log(result);

     
          jourLePlusFroid = result[0].UpdateDate;
          tempLaPlusFroide = result[0].current_observation.temp_c;
          db.close();
      
          done();
        });
    
      });


}

function getNumberOfWeatherTime (done) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("M306");
        
        dbo.collection("infos_meteos").find({UpdateDate:{'$lte': new Date(),'$gte': dateYear}}).toArray(function(err, result) {
            //dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
          if (err) throw err;
         // console.log(result);
            
            allJson = result;
  
          db.close();
      
          done();
        });
    
      });


}

function makeArrayOfWeatherTime(done)
{

    for (var x = 0; x < allJson.length; x++)
    {
        arrayWeather[x] = allJson[x].current_observation.weather;
    }

    done();
}

function countNumberOfWeatherTime(done)
{
    arrayWeather.sort();

    var current = null;
    var cnt = 0;
    var iterate = 0;
    for (var i = 0; i < arrayWeather.length; i++) {
        if (arrayWeather[i] != current) {
            if (cnt > 0) {
                var tempArray = [];
                tempArray[0] = current;
                tempArray[1] = cnt;
                arrayWeatherAfterSort[iterate] = tempArray;

                iterate++;
                //console.log(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = arrayWeather[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        var tempArray = [];
        tempArray[0] = current;
        tempArray[1] = cnt;
        arrayWeatherAfterSort[iterate] = tempArray;

        iterate++;
        //console.log(current + ' comes --> ' + cnt + ' times');
    }
done();

}

function setNumberFormat(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}


function getTemperatureOfDay(done){

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
        
        dbo.collection("infos_meteos").find({UpdateDate:{'$lte': dateTenMin,'$gte': dateOclock}}).limit(1).toArray(function(err, result) {
            //dbo.collection("infos_meteos").find().sort({UpdateDate: -1}).limit(1).lean().exec(function (err, result) {
          if (err) throw err;
         //console.log(result[0]);
         console.log(result[0].current_observation.temp_c)
            tempArray2[0] = result[0].current_observation.temp_c;
            tempArray2[1] = result[0].current_observation.feelslike_c;
    
            arrayTemperature[x] = tempArray2;
             console.log(arrayTemperature[x]);
          db.close();
      
          
        });
    
      });
     
    
    }
    done();
    }

function rapide (done) {

    console.log("test");
    console.log("jourLePlusChaud  |  " + jourLePlusChaud + "  |  Température : " + tempLaPlusChaude);
    console.log("jourLePlusFroid  |  " + jourLePlusFroid + "  |  Température : " + tempLaPlusFroide);
    console.log(arrayWeatherAfterSort);
    console.log(arrayTemperature);
    done();
}


function sequentiel (callback) {


    getJourLePlusChaud((err, data) => {
        if (err) return callback(err)
        

        getJourLePlusFroid((err, data) => {
            if (err) return callback(err)
            
            getNumberOfWeatherTime((err, data) => {
                if (err) return callback(err)

                makeArrayOfWeatherTime((err, data) => {
                    if (err) return callback(err)

                    countNumberOfWeatherTime((err, data) => {
                        if (err) return callback(err)

                        getTemperatureOfDay((err, data) => {
                            if (err) return callback(err)

                        rapide((err, data) => {
                            if (err) return callback(err)

                        })
        }) 
        })
        })
        })
    })
})

}

sequentiel();











