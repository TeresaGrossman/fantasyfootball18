require("dotenv").config();
var request = require("request");

function doFantasyAPI(url, cb) {

    const options = {  
        url: url,
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '7acd3937197e4eb48f178057d8efbd2b'
        }
    };

    request(options, function(error, response, body) {

        if (!error && response.statusCode === 200) cb(JSON.parse(body));
        else {
            console.log("error: " + err);
            cb({});
        };
        
    }); // request

}

module.exports = doFantasyAPI;


