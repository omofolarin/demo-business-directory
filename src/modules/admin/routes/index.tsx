import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import BusinessesRoutes from "./businesses";
import Interface from "../components/interface";

interface Props {}

export default function Routes(): any {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin/" exact>
          <div>
            <Login />
          </div>
        </Route>

        <Route path="/admin/manage">
          <BusinessesRoutes
            from="/admin/manage"
            path="/admin/manage/businesses"
          />

          <Route path="/admin/manage/categories">
            <Interface>
              <div>
                <h1>category admin Interface</h1>
              </div>
            </Interface>
          </Route>
        </Route>
      </Switch>
    </React.Fragment>
  );
}
