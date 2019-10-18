const request = require('request');
const geocode = require('./geocode');

const url = 'https://api.darksky.net/forecast/1192755c8b22bc41c6b4ad153fe63254/37.8267,-122.4233'

request( { url: url, json:true }, (error, response) => {

    if (error){
        console.log("Unable to connect to Weather Service!");
    }
    else if (response.body.error) {
        console.log("Unable to find location!");
    }
    else {
        console.log("It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.");
    }
});



geocode('Philadelphia', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});