import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home, Missing, Found, Search, UserProfile } from "pages";
import PersonAlertProfile from "components/PersonAlert/PersonAlertProfile";
import { PAGE_ROUTES, HOME, MISSING, FOUND, SEARCH } from "constants/pages";
import Nav from "components/Nav";

const history = createBrowserHistory();

export const PERSON_ALERT_URL = "/person-alert/:key/:name";
export const USER_PROFILE_URL = "/profile/:key/:name";

const Routes = () => {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route path={PAGE_ROUTES[HOME]} exact component={Home} />
        <Route path={PAGE_ROUTES[MISSING]} exact component={Missing} />
        <Route path={PAGE_ROUTES[FOUND]} exact component={Found} />
        <Route path={PAGE_ROUTES[SEARCH]} exact component={Search} />
        <Route path={PERSON_ALERT_URL} component={PersonAlertProfile} />
        <Route path={USER_PROFILE_URL} component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
