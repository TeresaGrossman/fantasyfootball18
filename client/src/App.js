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
import Ticker from "./components/Ticker/Ticker.js";

// import { Button } from 'reactstrap';

const App = () => (
  <Router>
    <div>
      
      {/* <Button className = "btn">Hi</Button> */}
      <Nav />
      <Switch>
        <Route exact path="/" component={Detail} />
        <Route exact path="/games/:week_id" component={Games} />
        <Route exact path="/livegames/:week_id/:id" component={LiveGames} />
        <Route exact path="/player/:week_id" component={Player} />
        <Route exact path="/team" component={Team} />
        {/* <Route exact path="/games/:week_id" component={Detail} /> */}
        <Route exact path="/news" component={News} />
        <Route exact path="/injuries" component={Injuries} />
        <Route exact path="/ticker" component={Ticker} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
