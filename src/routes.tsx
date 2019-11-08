import * as React from "react";
import { Route } from "react-router-dom";
import Website from "./modules/website";
import Admin from "./modules/admin";

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <Website />
      </Route>
      <Route path="/chef">
        <Admin />
      </Route>
    </React.Fragment>
  );
};

export default Routes;
