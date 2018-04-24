var fonctions = {};


var mongoose = require('mongoose');








var meteoSchema = new mongoose.Schema({

UpdateDate : { type : Date, default : Date.now },
  response : {
  version : Number,
  termsofService : String,
  features : {
  conditions : Number
  }
  },
  current_observation : {
  image : {
  url : String,
  title : String,
  link : String
  },
  display_location : {
  full : String,
  city : String,
  state : String,
  state_name : String,
  country : String,
  country_iso3166 : String,
  zip : String,
  latitude : String,
  longitude : String,
  elevation : String
  },
  observation_location : {
  full : String,
  city : String,
  state : String,
  country : String,
  country_iso3166 : String,
  latitude : String,
  longitude : String,
  elevation : String
  },
  estimated : {},
  station_id : String,
  observation_time : String,
  observation_time_rfc822 : String,
  observation_epoch : String,
  local_time_rfc822 : String,
  local_epoch : String,
  local_tz_short : String,
  local_tz_long : String,
  local_tz_offset : String,
  weather : String,
  temperature_string : String,
  temp_f : Number,
  temp_c : Number,
  relative_humidity : String,
  wind_string : String,
  wind_dir : String,
  wind_degrees : Number,
  wind_mph : Number,
  wind_gust_mph : String,
  wind_kph : Number,
  wind_gust_kph : String,
  pressure_mb : String,
  pressure_in : String,
  pressure_trend : String,
  dewpoint_string : String,
  dewpoint_f : Number,
  dewpoint_c : Number,
  heat_index_string : String,
  heat_index_f : String,
  heat_index_c : String,
  windchill_string : String,
  windchill_f : String,
  windchill_c : String,
  feelslike_string : String,
  feelslike_f : String,
  feelslike_c : String,
  visibility_mi : String,
  visibility_km : String,
  solarradiation : String,
  UV : String,
  precip_1hr_string : String,
  precip_1hr_in : String,
  precip_1hr_metric : String,
  precip_today_string : String,
  precip_today_in : String,
  precip_today_metric : String,
  icon : String,
  icon_url : String,
  forecast_url : String,
  history_url : String,
  ob_url : String
  }
});


fonctions.insererJson = function(donnees) {

mongoose.connect('mongodb://localhost/M306', function(err) {
  if (err) { throw err; }
});

var meteoModel = mongoose.model('infos_meteo', meteoSchema);


var maMeteo = new meteoModel(donnees);

maMeteo.save(function (err) {
  if (err) { throw err; }
  console.log('Meteo ajouté avec succès !');
  mongoose.connection.close();
});

};

exports.data = fonctions;



