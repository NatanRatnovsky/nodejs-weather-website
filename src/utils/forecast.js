const request = require('request');


const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7338a904e22fcbdae7b06ae814f042a4&query=' + latitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Please check location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It\'s currently ' + body.current.temperature +
                ' degrees out. It\'s feels like ' + body.current.feelslike + ' degrees out.'+ 'Humidity is '
            + body.current.humidity + ' %.')
        }
    });
};

module.exports = forecast;
