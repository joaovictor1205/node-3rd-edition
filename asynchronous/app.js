const request = require('request')

const url = 'https://api.darksky.net/forecast/1192755c8b22bc41c6b4ad153fe63254/37.8267,-122.4233'

request( { url: url, json:true }, (error, response) => {
    console.log("It is currently" + response.body.currently.temperature + "degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.");
});

