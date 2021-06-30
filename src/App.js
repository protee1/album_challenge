import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Album from "./album";

function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/album/:id" component={Album} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
