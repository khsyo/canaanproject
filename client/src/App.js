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
import Footer from "./components/layout/Footer";
// import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CampaignPage from "./components/campaign/CampaignPage";
import CampaignJob from "./components/campaign/CampaignJob";

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
          <div className="container">
            <Switch>
              <Route exact path="/" component={CampaignPage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route
                exact
                path="/2020June-speed-interview"
                component={CampaignPage}
              /> */}
              <Route exact path={"/job/:id"} component={CampaignJob} />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
