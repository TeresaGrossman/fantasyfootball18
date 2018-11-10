require("dotenv").config();

var request = require("request");

function doFantasyAPI(url, cb) {

    const options = {  
        url: url,
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.key
        }
    };

    request(options, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            cb(JSON.parse(body));
        } 
        else {
            console.log("error: " + error);
            cb({});
        };
        
    }); // request

}

module.exports = doFantasyAPI;


