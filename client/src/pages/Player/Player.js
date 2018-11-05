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

// players API to React page //

  state = {
    name:"",
    position: "",
    passingYards: 0,
    passingTouchdowns: 0,
    rushingYards: 0,
    rushingTouchdowns: 0,
    receivingYards: 0,
    receivingTouchdowns: 0
   
  }

  componentDidMount() {
    this.loadPlayer();
  }

  loadPlayer = () => {
    API.getPlayer(this.props.match.params.week_id, this.props.match.params.id)
      .then(res => this.setState({
        name: res.data.name,
        position: res.data.position,
        passingYards: res.data.passingYards,
        passingTouchdowns: res.data.passingTouchdowns,
        rushingYards: res.data.rushingYards,
        rushingTouchdowns: res.data.rushingTouchdowns,
        receivingYards: res.data.receivingYards,
        receivingTouchdowns: res.data.receivingTouchdowns
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
        <div>Name: {this.state.name}</div>
        <div>Position: {this.state.position}</div>
        <div>PasYrds: {this.state.passingYards}</div>
        <div>PasTD: {this.state.passingTouchdowns}</div>
        <div>RusYrds: {this.state.rushingYards}</div>
        <div>RusTD: {this.state.rushingTouchdowns}</div>
        <div>RecYrds: {this.state.receivingYards}</div>
        <div>RecTD: {this.state.receivingTouchdowns}</div>
      </div>
    );
  }
}

export default Player;
