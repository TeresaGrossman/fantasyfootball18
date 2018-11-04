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
    forecastDescription: "",
    forecastTempLow: 0,
    forecastTempHigh: 0,
    forecastWindChill: 0,
    forecastWindSpeed: 0,
    timeRemaining: 0,
    isOver: true,
    quarter: "",
    down: 0,
    yardLine: 0,
    down:0,
    lastUpdated: ""


  }

  componentDidMount() {
    this.loadLiveGames();
  }

  loadLiveGames = () => {
    API.getLiveGames()
      .then(res => this.setState({
        awayScore: res.data.awayScore,
        homeScore: res.data.homeScore,
        forecastDescription: res.data.forecastDescription,
        forecastTempLow: res.data.forecastTempLow,
        forecastTempHigh: res.data.forecastTempHigh,
        forecastWindChill: res.data.forecastWindChill,
        forecastWindSpeed: res.data.forecastWindSpeed,
        timeRemaining: res.data.timeRemaining,
        isOver: res.data.isOver,
        quarter: res.data.quarter,
        down: res.data.down,
        yardLine: res.data.yardLine,
        lastUpdated: res.data.lastUpdated
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
        <br></br>
        <h4> GAME STATS </h4>
        <div>forecast: {this.state.forecastDescription}</div>
        <div>Low: {this.state.forecastTempLow}</div>
        <div>High: {this.state.forecastTempHigh}</div>
        <div>Wind Chill: {this.state.forecastWindChill}</div>
        <div>Wind Speed: {this.state.forecastWindSpeed}</div>
        <div>Time Left: {this.state.timeRemaining}</div>
        <div>Game Status: {this.state.isOver}</div>
        <div>Quarter: {this.state.quarter}</div>
        <div>Down: {this.state.down}</div>
        <div>Yard Line: {this.state.yardLine}</div>
        <div>Updated: {this.state.lastUpdated}</div>
        
      </div>
    );
  }
}

export default Games;
