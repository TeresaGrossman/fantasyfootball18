import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Games extends Component {
  state = {
    awayScore: 0,
    homeScore: 0
  }

  componentDidMount() {
    this.loadLiveGames();
  }

  loadLiveGames = () => {
    API.getLiveGames()
      .then(res =>
        this.setState({ awayScore: res.data.awayScore })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>{this.state.awayScore}</div>
    );
  }
}

export default Games;
