import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Player extends Component {


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
    name:"",
    passingYards: 0,
    passingTouchdowns: 0
  }

  componentDidMount() {
    this.loadPlayer();
  }

  loadPlayer = () => {
    API.getPlayer(this.props.match.params.week_id, this.props.match.params.id)
      .then(res => this.setState({
        name: res.data.name,
        passingYards: res.data.passingYards,
        passingTouchdowns: res.data.passingTouchdowns
          })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h4>PLAYER</h4>
        <div>{this.state.name}</div>
        <div>{this.state.passingYards}</div>
        <div>{this.state.passingTouchdowns}</div>
      </div>
    );
  }
}

export default Player;
