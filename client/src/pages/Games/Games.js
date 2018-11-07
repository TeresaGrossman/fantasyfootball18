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
    this.loadPlayer();
  }
  loadPlayer = () => {
<<<<<<< HEAD

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
=======
>>>>>>> 143cc898c327cac423af238dc84c9af78d22918c

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
        this.setState({ games: res.data, user: "", team: ""})
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
