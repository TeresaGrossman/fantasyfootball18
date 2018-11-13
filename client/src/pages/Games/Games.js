import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { Input, } from "../../components/Form";
import { Table } from 'reactstrap';
import { Input, Col } from 'reactstrap';
// import "../styles/Games.css";


const Background = '../images/ff.png';
const styles = {
  mainBg: {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "2000px",
    align: "center"
    // backgroundSize: 'cover',
    // justifyContent: "flex-end"
  },
  tableStyles: {
    color: "yellow"

  },
  inputStyles: {
    background: "black",
    color: "yellow"
  }

}; // END STYLES 



class Games extends Component {
  state = {
    games: [],
    user: "",
    team: "",
    players: [],
    selectionTable: {},
    points: 0
  };

  componentDidMount() {
    this.loadGames();
    this.loadPlayer();
    // setInterval(this.loadPlayer, 60000);

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

      <div style={styles.mainBg}>
        <br></br>
        <br></br>
        <div >
          <Col sm={4}>
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
          </Col>
        </div>
        <br></br>
        <br></br>
        <div>
          <Col md={8}>
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
          </Col>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

    );
  }
}
export default Games;

