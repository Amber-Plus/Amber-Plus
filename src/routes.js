import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Missing, Found, Search } from "pages";
import Nav from "components/Nav";
import PersonAlertProfile from "components/PersonAlert/PersonAlertProfile";
import UserProfile from "components/UserProfile";
import Login from "components/Login";
import SignUp from "components/Login/SignUp";
import { PAGE_ROUTES, HOME, MISSING, FOUND, SEARCH } from "constants/pages";

export const PERSON_ALERT_URL = "/person-alert/:key/:name";
export const USER_PROFILE_URL = "/profile/:key/:name";
export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/signup";

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Missing} />
          <Route path={PAGE_ROUTES[MISSING]} exact component={Missing} />
          <Route path={PAGE_ROUTES[FOUND]} exact component={Found} />
          <Route path={PAGE_ROUTES[SEARCH]} exact component={Search} />
          <Route path={PERSON_ALERT_URL} component={PersonAlertProfile} />
          <Route path={USER_PROFILE_URL} component={UserProfile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Routes;
