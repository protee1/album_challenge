import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from "./albums";
import Album from "./album";

function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route exact path="/album/:id" component={Album} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
