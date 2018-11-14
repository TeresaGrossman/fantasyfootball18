<Container fluid>
{/* style={styles.mainBg} */}
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

{/* <Input
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
        /> */}