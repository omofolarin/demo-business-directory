import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Interface from "./components/interface";
import Login from "./pages/login";

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
          <Redirect from="/admin/manage" to="/admin/manage/businesses" />
          <Route path="/admin/manage/businesses">
            <Interface>
              <div>
                <h1>biz admin Interface</h1>
              </div>
            </Interface>
          </Route>

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
