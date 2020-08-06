//REACT
import React, { lazy } from "react";

//ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//LAZY LOADED PAGES
const Home = lazy(() => import("../pages/home"));
const NewsByCategory = lazy(() => import("../pages/newsbyCategory"));
const NewsBySearchWord = lazy(() => import("../pages/newsBySearchWord"));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:name">
          <NewsByCategory />
        </Route>
        <Route path="/search/:word">
          <NewsBySearchWord />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
