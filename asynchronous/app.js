const request = require('request')

const url = 'https://api.darksky.net/forecast/1192755c8b22bc41c6b4ad153fe63254/37.8267,-122.4233'

request( { url: url, json:true }, (error, response) => {
    console.log("It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.");
});

const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9hb3ZpY3RvcjEyMDUiLCJhIjoiY2sxdmIwZzB3MHFjZDNtcWZraGZjNmlmNyJ9.A_Uz_S3QA6TaT8ZfQ4EPfg&limit=1";

request( { url: geoURL, json:true }, (error, response) => {
    
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(latitude, longitude);

});