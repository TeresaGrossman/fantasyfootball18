import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


const styles = {
  introStyles: {
   color: "white"
 
  }
};


class Games extends Component {

// livegames API to React page //

  state = {
    livedata: {}
  }

  componentDidMount() {
    this.loadLiveGames();
  }

  // loadLiveGames = () => {
  //   API.getLiveGames()
    loadLiveGames = () => {
      API.getLiveGames(this.props.match.params.week_id, this.props.match.params.id)
      .then(res => this.setState({livedata: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={styles.introStyles}>
        <br></br>
        <br></br>
        <h4> SCORE </h4>
        <div>Home: {this.state.livedata.awayScore}</div>
        <div>Away: {this.state.livedata.homeScore}</div>
        <br></br>
        <h4> GAME STATS </h4>
        <div>forecast: {this.state.livedata.forecastDescription}</div>
        <div>Low: {this.state.livedata.forecastTempLow}</div>
        <div>High: {this.state.livedata.forecastTempHigh}</div>
        <div>Wind Chill: {this.state.livedata.forecastWindChill}</div>
        <div>Wind Speed: {this.state.livedata.forecastWindSpeed}</div>
        <div>Time Left: {this.state.livedata.timeRemaining}</div>
        <div>Quarter: {this.state.livedata.quarter}</div>
        <div>Down: {this.state.livedata.down}</div>
        <div>Yard Line: {this.state.livedata.yardLine}</div>
        <div>Updated: {this.state.livedata.astUpdated}</div>
        
      </div>
    );
  }
}

export default Games;
