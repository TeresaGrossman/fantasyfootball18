require("dotenv").config();
var request = require("request");

gameStat("nfl");
 
 function gameStat(live_play) {

    const options = {  
        url: "https://api.fantasydata.net/v3/nfl/pbp/JSON/PlayByPlay/2018REG/8/HOU",
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '7acd3937197e4eb48f178057d8efbd2b'
        }
    };
    
    request(options, function(error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            var gameData = JSON.parse(body);
            var awayScore = gameData.Score.AwayScore;
            var homeScore = gameData.Score.HomeScore;
            console.log(awayScore);
            console.log(homeScore);
            
        } else {
            console.log("error: " + err);
            return;
        };
        
        
        });
    };

