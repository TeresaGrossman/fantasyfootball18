require("dotenv").config();

var request = require("request");

function doFantasyAPI(url, cb) {
console.log(process.env.ACCESS_KEY);
    const options = {  
        url: url,
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'cf65fe71442940abaf90a006c17fe2cf'
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


