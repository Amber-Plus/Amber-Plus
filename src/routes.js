import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Missing from "pages/Missing";

export const HOME_PAGE_URL = "/";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={HOME_PAGE_URL} exact component={Missing} />
        <Route path="*">
          <Redirect to={HOME_PAGE_URL} component={Missing} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
