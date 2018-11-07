import React, { Component } from "react";
import API from "../../utils/API";

class Injuries extends Component {
    state = {};

    componentDidMount(){
        this.loadInjuries();
    }

    loadInjuries = () => { 
        API.getInjuries()
          .then(res => {
            console.log("this is our response ", res)
          
            // this.setState({ games: res.data, user: "", team: "", players: "" })
            
          })
          .catch(err => console.log(err));
      };

      render(){
          return (
            <div>Hello Injuries World</div>
          );
          
      }
}

export default Injuries;