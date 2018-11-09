import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { runInThisContext } from "vm";

class Player extends Component {

// players API to React page //
  state = {
    // name:"",
    // position: "",
    // passingYards: 0,
    // passingTouchdowns: 0,
    // rushingYards: 0,
    // rushingTouchdowns: 0,
    // receivingYards: 0,
    // receivingTouchdowns: 0
    players: []
  }

  componentDidMount() {
    this.loadPlayer();
  }

  loadPlayer = () => {

    var teamArray = [13320, 16802, 18877, 3807, 11056, 18983];

      for(var i = 0; i<teamArray.length; i++) {

          API.getPlayer(this.props.match.params.week_id, teamArray[i])
          .then(res => {
              var players = this.state.players;
              players.push(res.data);
              this.setState({players: players})
          })
          .catch(err => console.log(err));
  
      }

  };

  render() {
    return (
      <div>
        {this.state.players.map(player => (
          <div>
            <h4>PLAYER</h4>
            <div>Name: {player.name}</div>
            <div>Position: {player.position}</div>
            <div>PasYrds: {player.passingYards}</div>
            <div>PasTD: {player.passingTouchdowns}</div>
            <div>RusYrds: {player.rushingYards}</div>
            <div>RusTD: {player.rushingTouchdowns}</div>
            <div>RecYrds: {player.receivingYards}</div>
            <div>RecTD: {player.receivingTouchdowns}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Player;
