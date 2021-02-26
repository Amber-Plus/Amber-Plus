import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home, Missing, Found, Search } from "pages";
import { PAGE_ROUTES, HOME, MISSING, FOUND, SEARCH } from "constants/pages";
import TopNav from "components/common/Nav/TopNav";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <TopNav />
      <Switch>
        <Route path={PAGE_ROUTES[HOME]} exact component={Home} />
        <Route path={PAGE_ROUTES[MISSING]} exact component={Missing} />
        <Route path={PAGE_ROUTES[FOUND]} exact component={Found} />
        <Route path={PAGE_ROUTES[SEARCH]} exact component={Search} />
        <Route path="*">
          <Redirect to={PAGE_ROUTES[HOME]} component={Home} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
