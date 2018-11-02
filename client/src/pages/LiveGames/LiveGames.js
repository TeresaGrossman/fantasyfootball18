import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Games extends Component {


  /** TUTOR SESSION PSEUDO 10/29/18
   * find players in API and get ID 
   * get Id from DB axios/hhtp req
   * hit sports API
   * search sports API for most recent plays
   * a for each loop player ID inside recent plays
   * if player ID involved with play, display stat player was in involved with
   * console log everything
   * create variable outside of for loop to save player data
  */



  state = {
    awayScore: 0,
    homeScore: 0,
    
   
  }

  componentDidMount() {
    this.loadLiveGames();
  }

  loadLiveGames = () => {
    API.getLiveGames()
      .then(res => this.setState({
            awayScore: res.data.awayScore,
            homeScore: res.data.homeScore
          })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h4> SCORE </h4>
        <div>Home: {this.state.awayScore}</div>
        <div>Away: {this.state.homeScore}</div>
       




      </div>
    );
  }
}

export default Games;
