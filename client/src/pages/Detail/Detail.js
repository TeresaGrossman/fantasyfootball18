import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

const Background = '../images/logo2.png';

const styles = {
  introStyles: {
    color: "white"
  },
  logoStyles: {
    backgroundImage: `url(${Background})`,
    width: "70%",
    height: "20px",
  }
  
};


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
<div style={styles.introStyles}>
<h1 style={styles.logoStyles} align="center"></h1>
</div>
<Row>
  <Col size="md-12">
  <div width='100%' align='center'>
  <img src='../../images/logo3.png' height='115px'  
   />
   </div>
  </Col>
</Row>
        <Row>
          <Col size="md-6">
            <div style={styles.introStyles}>
              <h4>The Game</h4>
              Are you ready for some Fantasy Football! BUT... don't want to hassle with a long season and worrying, "What players who??" or "How good are they?"" and "Am I making the right choice?" Our app chooses the players for you from the game being played and adds points to your team as the player's performance progresses. Think of it as the "Scratcher" of Fantasy Football! You don't have to be an expert or an avid football fan to play! We'll randomly select the players and at the end, your points will be added to the team you've created. The next game will have a whole new squad to rack up points!
            </div>
          </Col>
          <Col size="md-6">
            <div style={styles.introStyles}>
              <h4>The Rules</h4>
              <div>
                Our scoring system turns yards and touchdowns into points. Here's how it works:
              </div>
              <div>
                25 &nbsp;passing yards = 1 point
                </div>
              <div>
                10 &nbsp;&nbsp;rushing yards = 1 point
                </div>
              <div>
                10 &nbsp;&nbsp;receiving yards = 1 point
                </div>
              <div>
                &nbsp;&nbsp;1 &nbsp;&nbsp;passing touchdown = 1 point
                </div>
              <div>
                &nbsp;&nbsp;1 &nbsp;&nbsp;rushing touchdown = 1 point
                </div>
              <div>
                &nbsp;&nbsp;1 &nbsp;&nbsp;receiving touchdown = 1 point
            </div>

            </div>

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

