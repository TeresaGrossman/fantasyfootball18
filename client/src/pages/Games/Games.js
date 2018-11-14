import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import { Input, Col } from 'reactstrap';
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import {  TextArea, FormBtn } from "../../components/Form";
// import { Input, } from "../../components/Form";
// import "../styles/Games.css";


const Background = '../images/ff.png';
const styles = {
  mainBg: {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "2000px",
  },
  tableStyles: {
    color: "yellow",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  inputStyles: {
    background: "black",
    color: "yellow"
  },
  introStyles: {
    color: "white",
    position: "absolute",
    left: '135vh',
    top: '20vh',

  }

}; // END STYLES 



class Games extends Component {
  state = {
    games: [],
    user: "",
    team: "",
    players: [],
    selectionTable: {},
    points: 0,
    livedata: {}
  };

  componentDidMount() {
    // this.loadGames();
    this.loadPlayer();
    this.loadLiveGames();
    // setInterval(this.loadPlayer, 60000);

  }

  loadLiveGames = () => {
    API.getLiveGames('10', 'PIT')
      .then(res => this.setState({ livedata: res.data }))
      .catch(err => console.log(err));
  }

  pointConversion = (player) => {
    var points = 0
    if (player.passingYards >= 25) {
      points += Math.floor(player.passingYards / 25);
    }
    if (player.passingTouchdowns >= 1) {
      points += Math.floor(player.passingTouchdowns / 1);

    }
    if (player.rushingYards >= 10) {
      points += Math.floor(player.rushingYards / 10);

    }
    if (player.rushingTouchdowns >= 1) {
      points += Math.floor(player.rushingTouchdowns / 1);

    }
    if (player.receivingYards >= 10) {
      points += Math.floor(player.receivingYards / 10);

    }
    if (player.receivingTouchdowns >= 1) {
      points += Math.floor(player.receivingTouchdowns / 1);
    }
    return points;
  }
  // loads specific players from API //
  loadPlayer = () => {
    console.log("loaded");
    var teamArray = [13320, 16802, 18877, 3807, 11056, 18983];
    var players = [];

    for (var i = 0; i < teamArray.length; i++) {

      API.getPlayer(this.props.match.params.week_id, teamArray[i])
        .then(res => {
          var player = res.data;
          player.points = this.pointConversion(player);
          players.push(player);
          this.setState({ players })
        })
        .catch(err => console.log(err));
    }
  };

  loadGames = () => {
    API.getGames()
      .then(res => {
        this.setState({ games: res.data, user: "", team: "" })

      })
      .catch(err => console.log(err));
  };

  deleteGame = id => {
    API.deleteGame(id)
      .then(res => this.loadGames())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.user && this.state.team) {
      API.saveGame({
        user: this.state.user,
        team: this.state.team,
        players: this.state.players
      })
        .then(res => this.loadGames())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div >
          <br></br>
          <Col sm={4}>
      <form>
            <Input size="sm" style={styles.inputStyles}
              value={this.state.User}
              onChange={this.handleInputChange}
              name="user"
              placeholder="User (required)"
            />
            <br></br>
            <Input size="sm" style={styles.inputStyles}
              value={this.state.Team}
              onChange={this.handleInputChange}
              name="team"
              placeholder="Team (required)"
            />
      </form>
          </Col>
        </div>
        <br></br>
        <div>
          <Col md={8}>
      <form>
            <Table bordered style={styles.tableStyles}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player Name</th>
                  <th>Player Position</th>
                  <th>Pass Yards</th>
                  <th>Pass Touchdowns</th>
                  <th>Rush Yards</th>
                  <th>Rush Touchdowns</th>
                  <th>Receiving Yards</th>
                  <th>Receiving Touchdowns</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {this.state.players.sort(function (a, b) {
                  return a["name"].localeCompare(b["name"]);
                }).map(player => (
                  <tr key={player.id}>
                    <th scope="row">{player.id}</th>
                    <td> {player.name}</td>
                    <td> {player.position}</td>
                    <td> {player.passingYards}</td>
                    <td> {player.passingTouchdowns}</td>
                    <td> {player.rushingYards}</td>
                    <td> {player.rushingTouchdowns}</td>
                    <td> {player.receivingYards}</td>
                    <td> {player.receivingTouchdowns}</td>
                    <td> {player.points}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <FormBtn
                disabled={!(this.state.user && this.state.team)}
                onClick={this.handleFormSubmit}
              >
                Create Team
              </FormBtn>
      </form>
          </Col>
        </div>


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

      </div>
    );
  }
}
export default Games;

