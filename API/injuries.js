const axios = require("axios");

const API = {
    injuries: function(param){
        axios({
            method:'get',
            url:"https://api.fantasydata.net/v3/nfl/stats/JSON/Injuries/2018reg/9?",
            headers: {"Ocp-Apim-Subscription-Key": "7acd3937197e4eb48f178057d8efbd2b"}
            
          })
            .then(function(data) {
           
                // console.log(data);
                
          });
    }
}

API.injuries();

module.exports = API;

 
    

