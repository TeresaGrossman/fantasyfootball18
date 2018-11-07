const axios = require("axios");

const API = {
    news: function(param){
        axios({
            method:'get',
            url:"https://api.fantasydata.net/v3/nfl/stats/JSON/News?",
            headers: {"Ocp-Apim-Subscription-Key": "7acd3937197e4eb48f178057d8efbd2b"}
            
          })
            .then(function(data) {
           
                // console.log(data);
                
          });
    }
}

API.news();

module.exports = API;

 
    

