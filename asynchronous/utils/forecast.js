const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1192755c8b22bc41c6b4ad153fe63254/' +latitude+ ',' +longitude;

    request( { url: url, json: true } , (error , response) => {

        if (error){
            callback("Unable to connect to Weather Service!", undefined);
        }
        else if (response.body.error) {
            console.log("Unable to find location!", undefined);
        }
        else {
            console.log(undefined, "It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.");
        }

    });

}

module.exports = forecast;