import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Team extends Component {


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
   gamedate: ""
   
  }

  componentDidMount() {
    this.loadTeam();
  }

  loadTeam = () => {
    API.getTeam(this.props.match.params.week_id, this.props.match.params.id)
      .then(res => this.setState({
        gamedate: res.data.GameDate
       
          })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h4>TEAM</h4>
        <div>Team Data: {this.state.gamedate}</div>
      </div>
    );
  }
}

export default Team;
