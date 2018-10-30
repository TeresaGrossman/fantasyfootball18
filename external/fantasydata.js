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

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            var gameData = JSON.parse(body);
            var returnValues = {
                homeScore: gameData.Score.HomeScore,
                awayScore: gameData.Score.AwayScore,
                inProgess: gameData.IsInProgress,
               
            };
            cb(returnValues);
        } else {
            console.log("error: " + err);
            cb({});
        };
        
    }); // request

}

module.exports = doFantasyAPI;


