//REACT
import React, { lazy } from "react";

//ROUTER
import { Switch, Route } from "react-router-dom";

//LAZY LOADED PAGES
const Home = lazy(() => import("../pages/home"));
const NewsByCategory = lazy(() => import("../pages/newsbyCategory"));
const NewsBySearchWord = lazy(() => import("../pages/newsBySearchWord"));

const Routes: React.FC = () => {
  return (
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
  );
};

export default Routes;
