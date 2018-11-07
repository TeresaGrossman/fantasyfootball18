import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import BackgroundImage from "../../components/FF.jpg";
// const anotherWay = require('../../components/FF.jpg');
import { Table } from 'reactstrap';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myBkg:{
    background: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    repeat: 'no-repeat',
  }
};

class Games extends Component {
  state = {
    games: [],
    user: "",
    team: "",
    players: []
  };

  componentDidMount() {
    this.loadGames();
  }
  loadPlayer = () => {

    var teamArray = [18055, 16253, 17923, 16763, 18058, 17959];
  
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

  loadGames = () => {
    API.getGames()
      .then(res =>
        this.setState({ games: res.data, user: "", team: "", players: "" })
      )
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

      <Container fluid style={styles.myBkg}>
            {/* <img src={BackgroundImage} style={styles.container} /> */}
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

            <div>
              {this.state.players.map(player => (
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player Name</th>
                    <th>Position</th>
                    <th>Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                  </tr>
                </tbody>
              </Table>
              ))}
              </div>
              <FormBtn
                disabled={!(this.state.team && this.state.user)}
                onClick={this.handleFormSubmit}
              >
                Submit Team
              </FormBtn>
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
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>

    );
  }
}


export default Games;
