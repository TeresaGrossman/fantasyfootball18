require("dotenv").config();
var request = require("request");

movieThis("matrix");
 
 function movieThis(movie_name) {

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

            var movieData = JSON.parse(body);
            var awayScore = movieData.Score.AwayScore;
            console.log(awayScore);
            
        } else {
            console.log("error: " + err);
            return;
        };
        
        
        });
    };

