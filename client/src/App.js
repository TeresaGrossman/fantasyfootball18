import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./pages/Games";
import LiveGames from "./pages/LiveGames";
import Player from "./pages/Player";
import Team from "./pages/Team";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import News from "./pages/News";
import Injuries from "./pages/Injuries";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Games} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/livegames/:week_id/:id" component={LiveGames} />
        <Route exact path="/player/:week_id" component={Player} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/games/:id" component={Detail} />
        <Route exact path="/news" component={News} />
        <Route exact path="/injuries" component={Injuries} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
