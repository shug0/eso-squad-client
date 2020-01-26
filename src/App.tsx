import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import HomePage from "./pages/HomePage/HomePage";
import NewGroupPage from "./pages/NewGroupPage/NewGroupPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GroupPageContainer from "./pages/GroupPage/GroupPageContainer";
import { ROUTE_GROUP, ROUTE_NEW, ROUTE_SETUP } from "./constants/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <main className="Wrapper">
          <Route path={`${ROUTE_SETUP}`} component={StartPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path={`${ROUTE_NEW}`} component={NewGroupPage} />
          <PrivateRoute
            path={`${ROUTE_GROUP}/:groupId`}
            component={GroupPageContainer}
          />
        </main>
      </Router>
    );
  }
}

export default App;
