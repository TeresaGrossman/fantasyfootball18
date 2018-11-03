import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./pages/Games";
import LiveGames from "./pages/LiveGames";
import Team from "./pages/Team";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Games} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/livegames/" component={LiveGames} />
        <Route exact path="/team/:week_id/:id" component={Team} />
        <Route exact path="/games/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
