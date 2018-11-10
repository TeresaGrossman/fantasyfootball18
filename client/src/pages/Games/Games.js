import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table } from 'reactstrap';


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

  }
  // Convert stats to points //
  /*
    25 pass yards= 1pt
    pass TD= 4pts
    -----
     10 rush yards = 1pt
    Rush TD = 6pts
    -----
    10 receiving yards= 1pt
    Receiving TD = 6pts  
    
    page is refreshed every two minutes ( 120000 ) to update the game
    */

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
    var teamArray = [13320, 16802, 18877, 3807, 11056, 18983];
    var players = this.state.players;

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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <br></br>
            <br></br>
            <form>
              <Input 
                value={this.state.User}
                onChange={this.handleInputChange}
                name="user"
                placeholder="User (required)"
              />
              <Input 
                value={this.state.Team}
                onChange={this.handleInputChange}
                name="team"
                placeholder="Team (required)"
              />

              <Table bordered>
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

                  {this.state.players.map(player => (
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

              {/* <FormBtn
                disabled={!(this.state.team && this.state.user)}
                onClick={this.handleFormSubmit}
              >
                Submit Team
              </FormBtn>  */}
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.games.length ? (
              <List>
                {this.state.games.map(game => (
                  <ListItem key={game._id}>
                    <Link to={"/games/" + game._id}>
                      <strong>
                        {game.user}'s Team is {game.team}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteGame(game._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3></h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Games;
