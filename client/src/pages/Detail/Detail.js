import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Table } from 'reactstrap';


class Detail extends Component {
  state = {
    game: {}
  };
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/games/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Players</h1>
              <p>
                {this.state.game.players}
              </p>
            </article>
            <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Player Name</th>
                        <th>Player Position</th>
                      </tr>
                    </thead>
                    <tbody>

        {this.state.players.map(player => (

          <tr>
            <th scope="row">{player.id}</th> 
            <td>Name: {player.name}</td>
            <td>Position: {player.position}</td>
            <td>PasYrds: {player.passingYards}</td>
            <td>PasTD: {player.passingTouchdowns}</td>
            <td>RusYrds: {player.rushingYards}</td>
            <td>RusTD: {player.rushingTouchdowns}</td>
            <td>RecYrds: {player.receivingYards}</td>
            <td>RecTD: {player.receivingTouchdowns}</td>
            </tr>
        ))}              
                    </tbody>
                  </Table>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Games</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
