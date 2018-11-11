import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";



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
          
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/"></Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
