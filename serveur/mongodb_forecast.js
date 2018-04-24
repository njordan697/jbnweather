var fonctions = {};


var mongoose = require('mongoose');


var meteoSchema = new mongoose.Schema({

  UpdateDate : { type : Date, default : Date.now },
  response: {
  version: String,
  termsofService: String,
  features: {
  forecast: Number
  }
  },
  forecast: {
  txt_forecast: {
  date: String,
  forecastday: [{
  period: Number,
  icon: String,
  icon_url: String,
  title: String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }, {
   period : Number,
   icon : String,
   icon_url : String,
   title : String,
   fcttext : String,
   fcttext_metric : String,
   pop : String
  }]
  },
   simpleforecast : {
   forecastday : [{
   date : {
   epoch : String,
   pretty : String,
   day : Number,
   month : Number,
   year : Number,
   yday : Number,
   hour : Number,
   min : String,
   sec : Number,
   isdst : String,
   monthname : String,
   weekday_short : String,
   weekday : String,
   ampm : String,
   tz_short : String,
   tz_long : String
  },
   period : Number,
   high : {
   fahrenheit : String,
   celsius : String
  },
   low : {
   fahrenheit : String,
   celsius : String
  },
   conditions : String,
   icon : String,
   icon_url : String,
   skyicon : String,
   pop : Number,
   qpf_allday : {
   in : Number,
   mm : Number
  },
   qpf_day : {
   in : Number,
   mm : Number
  },
   qpf_night : {
   in : Number,
   mm : Number
  },
   snow_allday : {
   in : Number,
   cm : Number
  },
   snow_day : {
   in : Number,
   cm : Number
  },
   snow_night : {
   in : Number,
   cm : Number
  },
   maxwind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avewind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avehumidity :Number,
   maxhumidity : Number,
   minhumidity : Number
  }, {
   date : {
   epoch : String,
   pretty : String,
   day : Number,
   month : Number,
   year : Number,
   yday : Number,
   hour : Number,
   min : String,
   sec : Number,
   isdst : String,
   monthname : String,
   weekday_short : String,
   weekday : String,
   ampm : String,
   tz_short : String,
   tz_long : String
  },
   period : Number,
   high : {
   fahrenheit : String,
   celsius : String
  },
   low : {
   fahrenheit : String,
   celsius : String
  },
   conditions : String,
   icon : String,
   icon_url : String,
   skyicon : String,
   pop : Number,
   qpf_allday : {
   in : Number,
   mm : Number
  },
   qpf_day : {
   in : Number,
   mm : Number
  },
   qpf_night : {
   in : Number,
   mm : Number
  },
   snow_allday : {
   in : Number,
   cm : Number
  },
   snow_day : {
   in : Number,
   cm : Number
  },
   snow_night : {
   in : Number,
   cm : Number
  },
   maxwind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avewind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avehumidity : Number,
   maxhumidity : Number,
   minhumidity : Number
  }, {
   date : {
   epoch : String,
   pretty : String,
   day : Number,
   month : Number,
   year : Number,
   yday : Number,
   hour : Number,
   min : String,
   sec : Number,
   isdst : String,
   monthname : String,
   weekday_short : String,
   weekday : String,
   ampm : String,
   tz_short : String,
   tz_long : String
  },
   period : Number,
   high : {
   fahrenheit : String,
   celsius : String
  },
   low : {
   fahrenheit : String,
   celsius : String
  },
   conditions : String,
   icon : String,
   icon_url : String,
   skyicon : String,
   pop : Number,
   qpf_allday : {
   in : Number,
   mm : Number
  },
   qpf_day : {
   in : Number,
   mm : Number
  },
   qpf_night : {
   in : Number,
   mm : Number
  },
   snow_allday : {
   in : Number,
   cm : Number
  },
   snow_day : {
   in : Number,
   cm : Number
  },
   snow_night : {
   in : Number,
   cm : Number
  },
   maxwind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avewind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avehumidity : Number,
   maxhumidity : Number,
   minhumidity : Number
  }, {
   date : {
   epoch : String,
   pretty : String,
   day : Number,
   month : Number,
   year : Number,
   yday : Number,
   hour : Number,
   min : String,
   sec : Number,
   isdst : String,
   monthname : String,
   weekday_short : String,
   weekday : String,
   ampm : String,
   tz_short : String,
   tz_long : String
  },
   period : Number,
   high : {
   fahrenheit : String,
   celsius : String
  },
   low : {
   fahrenheit : String,
   celsius : String
  },
   conditions : String,
   icon : String,
   icon_url : String,
   skyicon : String,
   pop : Number,
   qpf_allday : {
   in : Number,
   mm : Number
  },
   qpf_day : {
   in : Number,
   mm : Number
  },
   qpf_night : {
   in : Number,
   mm : Number
  },
   snow_allday : {
   in : Number,
   cm : Number
  },
   snow_day : {
   in : Number,
   cm : Number
  },
   snow_night : {
   in : Number,
   cm : Number
  },
   maxwind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avewind : {
   mph : Number,
   kph : Number,
   dir : String,
   degrees : Number
  },
   avehumidity : Number,
   maxhumidity : Number,
   minhumidity : Number
  }]
  }
  }
});





fonctions.insererJson = function(donnees) {

mongoose.connect('mongodb://localhost/M306', function(err) {
  if (err) { throw err; }
});

var meteoModel = mongoose.model('infos_meteos_forecast', meteoSchema);


var maMeteo = new meteoModel(donnees);

maMeteo.save(function (err) {
  if (err) { throw err; }
  console.log('Meteo ajouté avec succès !');
  mongoose.connection.close();
});

};

exports.data = fonctions;



