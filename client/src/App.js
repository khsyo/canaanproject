import React, { Fragment, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Utils
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

// Component
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import "./styles/App.scss";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
