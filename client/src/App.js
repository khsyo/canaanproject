import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
