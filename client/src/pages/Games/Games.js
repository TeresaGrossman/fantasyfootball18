import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Games extends Component {
  state = {
    games: [],
    user: "",
    team: "",
    players: ""
  };

  componentDidMount() {
    this.loadGames();
  }

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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What should MY Team Be?</h1>
            </Jumbotron>
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
              <TextArea
                value={this.state.Players}
                onChange={this.handleInputChange}
                name="players"
                placeholder="Players (Optional)"
              />
              <FormBtn
                disabled={!(this.state.team && this.state.user)}
                onClick={this.handleFormSubmit}
              >
                Submit Team
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Games List</h1>
            </Jumbotron>
            {this.state.games.length ? (
              <List>
                {this.state.games.map(game => (
                  <ListItem key={game._id}>
                    <Link to={"/games/" + game._id}>
                      <strong>
                        {game.user} by {game.team}
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
